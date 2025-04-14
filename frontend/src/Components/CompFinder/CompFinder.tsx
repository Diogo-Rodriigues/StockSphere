import React, { useEffect, useState } from "react";
import CompFinderItem from "./CompFinderItem";
import { CompanyCompData } from "../../company";
import { getCompData } from "../../api";
import Spinner from "../Spinners/Spinner";
import { motion } from "framer-motion";

type Props = {
  ticker: string;
};

const CompFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyCompData>();
  useEffect(() => {
    const getComps = async () => {
      const value = await getCompData(ticker);
      setCompanyData(value?.data[0]);
    };
    getComps();
  }, [ticker]);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl shadow-lg p-5 m-4 transition-all duration-300 hover:bg-white/10 hover:shadow-indigo-500/10 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-purple-600/10 rounded-full filter blur-2xl -mr-10 -mb-10"></div>
      
      <div className="relative">
        <h3 className="text-white text-sm font-medium mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          Similar Companies
        </h3>
        
        <div className="flex flex-wrap gap-2">
          {companyData ? (
            companyData?.peersList.map((ticker, index) => (
              <CompFinderItem key={index} ticker={ticker} />
            ))
          ) : (
            <div className="py-2">
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CompFinder;
