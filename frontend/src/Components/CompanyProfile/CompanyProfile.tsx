import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CompanyKeyMetrics } from "../../company";
import { getKeyMetrics } from "../../api";
import RatioList from "../RatioList/RatioList";
import Spinner from "../Spinners/Spinner";
import {
  formatLargeNonMonetaryNumber,
  formatRatio,
} from "../../Helpers/NumberFormatting";
import StockComment from "../StockComment/StockComment";
import { motion } from "framer-motion";

type Props = {};

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNonMonetaryNumber(company.marketCapTTM),
    subTitle: "Total value of all a company's shares of stock",
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.currentRatioTTM),
    subTitle:
      "Measures the companies ability to pay short term debt obligations",
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => formatRatio(company.roeTTM),
    subTitle:
      "Return on equity is the measure of a company's net income divided by its shareholder's equity",
  },
  {
    label: "Return On Assets",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.returnOnTangibleAssetsTTM),
    subTitle:
      "Return on assets is the measure of how effective a company is using its assets",
  },
  {
    label: "Free Cashflow Per Share",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.freeCashFlowPerShareTTM),
    subTitle:
      "Return on assets is the measure of how effective a company is using its assets",
  },
  {
    label: "Book Value Per Share TTM",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.bookValuePerShareTTM),
    subTitle:
      "Book value per share indicates a firm's net asset value (total assets - total liabilities) on per share basis",
  },
  {
    label: "Divdend Yield TTM",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.dividendYieldTTM),
    subTitle: "Shows how much a company pays each year relative to stock price",
  },
  {
    label: "Capex Per Share TTM",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.capexPerShareTTM),
    subTitle:
      "Capex is used by a company to aquire, upgrade, and maintain physical assets",
  },
  {
    label: "Graham Number",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.grahamNumberTTM),
    subTitle:
      "This is the upperbouind of the price range that a defensive investor should pay for a stock",
  },
  {
    label: "PE Ratio",
    render: (company: CompanyKeyMetrics) => formatRatio(company.peRatioTTM),
    subTitle:
      "This is the upperbouind of the price range that a defensive investor should pay for a stock",
  },
];

const CompanyProfile = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCompanyKeyRatios = async () => {
      try {
        setLoading(true);
        setError(null);
        const value = await getKeyMetrics(ticker);
        setCompanyData(value?.data[0]);
      } catch (err) {
        setError("Failed to load company data. Please try again later.");
        console.error("Error fetching key metrics:", err);
      } finally {
        setLoading(false);
      }
    };
    getCompanyKeyRatios();
  }, [ticker]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 bg-gradient-to-br from-gray-900 to-indigo-900 rounded-3xl p-8 shadow-2xl border border-white/10 backdrop-blur-md w-full">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-indigo-900 rounded-3xl p-8 shadow-2xl border border-white/10 backdrop-blur-md w-full">
        <div className="text-center py-10 px-6">
          <div className="w-16 h-16 bg-red-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Data Loading Error</h2>
          <p className="text-indigo-200 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition-colors duration-300 shadow-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="space-y-8 animate-fadeIn w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative bg-gradient-to-br from-gray-900 to-indigo-900 rounded-3xl p-6 shadow-2xl overflow-hidden w-full">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full filter blur-3xl -mr-16 -mb-16"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-purple-600/20 rounded-full filter blur-2xl -mr-10 -mt-10"></div>
        
        {/* Header */}
        <div className="mb-6 relative">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
            <span className="mr-2">{ticker}</span>
            <span className="text-sm px-3 py-1 bg-white/10 rounded-full text-indigo-200 font-normal">Key Metrics</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-500/50 rounded-full"></div>
        </div>
        
        {companyData ? (
          <div className="relative w-full">
            <RatioList config={tableConfig} data={companyData} />
          </div>
        ) : (
          <div className="text-center py-8 text-indigo-200 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 w-full">
            No data available for this company
          </div>
        )}
      </div>

      {/* Stock Comments Section */}
      <div className="bg-gradient-to-br from-gray-900 to-indigo-900 rounded-3xl p-6 shadow-2xl border border-white/10 backdrop-blur-md relative overflow-hidden w-full">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-600/10 rounded-full filter blur-3xl -ml-20 -mb-20"></div>
        
        <h3 className="text-xl font-bold text-white mb-6 relative">
          <span className="relative z-10">Company Reviews</span>
          <div className="h-1 w-16 bg-purple-500/50 rounded-full absolute bottom-0 left-0"></div>
        </h3>
        
        <div className="w-full">
          <StockComment stockSymbol={ticker} />
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyProfile;
