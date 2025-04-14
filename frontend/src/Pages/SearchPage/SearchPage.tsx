import React, { useState, ChangeEvent, SyntheticEvent, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { CompanySearch } from "../../company";
import { searchCompanies } from "../../api";
import { PortfolioGet } from "../../Models/Portfolio";
import {
  portfolioAddAPI,
  portfolioDeleteAPI,
  portfolioGetAPI,
} from "../../Services/PortfolioService";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import CardPortfolio from "../../Components/Portfolio/CardPortfolio/CardPortfolio";
import Footer from "../../Components/Footer/Footer";

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>(
    []
  );
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"portfolio" | "search">("portfolio");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    getPortfolio();
  }, []);

  useEffect(() => {
    if (searchResult.length > 0) {
      setActiveTab("search");
    }
  }, [searchResult]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getPortfolio = () => {
    setIsLoading(true);
    portfolioGetAPI()
      .then((res) => {
        if (res?.data) {
          setPortfolioValues(res?.data);
        }
      })
      .catch((e) => {
        setPortfolioValues(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    portfolioAddAPI(e.target[0].value)
      .then((res) => {
        if (res?.status === 204) {
          toast.success("Stock added to portfolio!");
          getPortfolio();
        }
      })
      .catch((e) => {
        toast.warning("Could not add stock to portfolio!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    portfolioDeleteAPI(e.target[0].value)
      .then((res) => {
        if (res?.status == 200) {
          toast.success("Stock deleted from portfolio!");
          getPortfolio();
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setServerError(null);
    
    try {
      const result = await searchCompanies(search);
      
      if (typeof result === "string") {
        setServerError(result);
      } else if (Array.isArray(result.data)) {
        setSearchResult(result.data);
      }
    } catch (error) {
      setServerError("Unable to connect to API");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 to-indigo-900 relative flex flex-col">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10%] opacity-50">
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="rgba(138, 43, 226, 0.1)" d="M45.4,-51.6C58.3,-39.8,68.5,-24.1,71.8,-6.7C75.1,10.7,71.5,29.9,61,42.7C50.5,55.5,33.1,62,14.6,67.3C-3.8,72.5,-23.4,76.5,-39.1,70.1C-54.8,63.7,-66.7,46.9,-73.5,27.8C-80.2,8.8,-81.9,-12.5,-74.3,-28.5C-66.7,-44.5,-49.9,-55.2,-33.6,-65.9C-17.3,-76.6,-1.6,-87.3,11.8,-87.5C25.2,-87.7,35.6,-77.4,45.4,-51.6Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute inset-0 opacity-30 animate-pulse" style={{animationDuration: '15s'}}>
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="rgba(123, 104, 238, 0.2)" d="M42.8,-65.2C54.9,-56.3,63.6,-42.8,69.7,-28.1C75.8,-13.4,79.2,2.6,76.3,17.8C73.4,33,64.1,47.4,51.2,56.9C38.3,66.5,21.7,71.2,4.6,73.1C-12.5,75,-30.1,74.2,-43.7,65.9C-57.4,57.7,-67.1,42.1,-72.6,25.2C-78.1,8.3,-79.3,-9.9,-73.3,-24.4C-67.2,-38.9,-53.8,-49.7,-39.9,-57.7C-26,-65.7,-11.5,-70.9,2.7,-71.3C16.9,-71.7,33.8,-67.4,42.8,-65.2Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>
      
      <div className="flex-grow">
        <div className="container mx-auto px-6 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Search Header */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-indigo-500/20 hover:border-white/30 mb-10">
              <div className="p-8">
                <h1 className="text-2xl font-bold text-white mb-6 text-center">Financial Data Explorer</h1>
                
                {/* Search Input */}
                <form onSubmit={onSearchSubmit} className="relative">
                  <div className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
                    isFocused ? 'ring-2 ring-indigo-400 shadow-indigo-500/20' : ''
                  }`}>
                    <input
                      className="w-full p-4 pr-16 bg-white/5 border border-white/10 rounded-xl text-white placeholder-indigo-200/60 focus:outline-none transition-all duration-300"
                      placeholder="Search companies by name or symbol..."
                      value={search}
                      onChange={handleSearchChange}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute inset-y-0 right-0 px-4 flex items-center bg-indigo-600 text-white rounded-r-xl hover:bg-indigo-700 transition-all duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Loading Indicator */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex justify-center my-6"
                >
                  <div className="flex items-center px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/10 shadow-lg">
                    <svg className="animate-spin h-5 w-5 mr-3 text-indigo-300" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Loading...</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Error Message */}
            <AnimatePresence>
              {serverError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="my-6 p-4 rounded-xl bg-rose-500/30 backdrop-blur-md text-white text-center border border-rose-500/30 shadow-lg"
                >
                  <div className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-rose-200" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{serverError}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Tab Navigation */}
            {(portfolioValues!.length > 0 || searchResult.length > 0) && (
              <div className="flex justify-center my-8">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-1 shadow-lg">
                  <motion.button
                    onClick={() => setActiveTab("portfolio")}
                    className={`px-6 py-2 rounded-full transition-all font-medium text-sm ${
                      activeTab === "portfolio"
                        ? "bg-indigo-600 text-white shadow-md"
                        : "text-indigo-200 hover:bg-white/5"
                    }`}
                    whileHover={activeTab !== "portfolio" ? { scale: 1.05 } : {}}
                    whileTap={activeTab !== "portfolio" ? { scale: 0.95 } : {}}
                  >
                    Portfolio
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveTab("search")}
                    className={`px-6 py-2 rounded-full transition-all font-medium text-sm ${
                      activeTab === "search"
                        ? "bg-indigo-600 text-white shadow-md"
                        : "text-indigo-200 hover:bg-white/5"
                    }`}
                    whileHover={activeTab !== "search" ? { scale: 1.05 } : {}}
                    whileTap={activeTab !== "search" ? { scale: 0.95 } : {}}
                    disabled={searchResult.length === 0}
                  >
                    Search Results
                  </motion.button>
                </div>
              </div>
            )}
            
            {/* Content Area */}
            <div className="relative min-h-[300px]">
              {/* Portfolio Panel */}
              <AnimatePresence>
                {activeTab === "portfolio" && (
                  <motion.div
                    key="portfolio"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden p-8"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-white">Your Portfolio</h2>
                      {portfolioValues && portfolioValues.length > 0 && (
                        <div className="px-3 py-1 bg-indigo-600/80 text-xs font-medium text-white rounded-full shadow-inner">
                          {portfolioValues.length} {portfolioValues.length === 1 ? 'Stock' : 'Stocks'}
                        </div>
                      )}
                    </div>
                    
                    {portfolioValues && portfolioValues.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {portfolioValues.map((item, index) => (
                          <CardPortfolio
                            key={index}
                            portfolioValue={item}
                            onPortfolioDelete={onPortfolioDelete}
                          />
                        ))}
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-16 text-center"
                      >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-300 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-medium text-white mb-2">Your portfolio is empty</h3>
                        <p className="text-indigo-200">Search for companies to add them to your portfolio</p>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Search Results Panel */}
              <AnimatePresence>
                {activeTab === "search" && (
                  <motion.div
                    key="search"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden p-8"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-white">Search Results</h2>
                      {searchResult.length > 0 && (
                        <div className="px-3 py-1 bg-indigo-600/80 text-xs font-medium text-white rounded-full shadow-inner">
                          {searchResult.length} {searchResult.length === 1 ? 'Result' : 'Results'}
                        </div>
                      )}
                    </div>
                    
                    {searchResult.length > 0 ? (
                      <div className="space-y-4">
                        {searchResult.map((result, index) => (
                          <motion.div
                            key={result.symbol}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 shadow-lg transition-all duration-300 hover:bg-white/10 hover:shadow-indigo-500/10"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <Link
                                  to={`/company/${result.symbol}/company-profile`}
                                  className="block hover:text-indigo-300 transition-colors duration-300 cursor-pointer"
                                >
                                  <h3 className="text-white font-bold">{result.symbol}</h3>
                                  <p className="text-indigo-200 text-sm mt-1">{result.name}</p>
                                </Link>
                                <p className="text-xs text-indigo-300/70 mt-1">{result.currency} · {result.stockExchange}</p>
                              </div>
                              <form onSubmit={onPortfolioCreate} className="ml-4">
                                <input type="hidden" value={result.symbol} />
                                <motion.button
                                  type="submit"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-indigo-600/50 focus:outline-none"
                                >
                                  Add
                                </motion.button>
                              </form>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-16 text-center"
                      >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-300 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-medium text-white mb-2">No results found</h3>
                        <p className="text-indigo-200">Try searching for a different company</p>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchPage;