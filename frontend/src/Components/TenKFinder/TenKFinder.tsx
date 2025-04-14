import React, { useEffect, useState } from "react";
import { CompanyTenK } from "../../company";
import { getTenK } from "../../api";
import TenKFinderItem from "./TenKFinderItem";
import Spinner from "../Spinners/Spinner";
import { motion } from "framer-motion";

type Props = {
  ticker: string;
};

const TenKFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyTenK[]>();
  useEffect(() => {
    const getTenKData = async () => {
      const value = await getTenK(ticker);
      setCompanyData(value?.data);
    };
    getTenKData();
  }, [ticker]);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl shadow-lg p-5 m-4 transition-all duration-300 hover:bg-white/10 hover:shadow-indigo-500/10 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-indigo-600/10 rounded-full filter blur-2xl -mr-10 -mb-10"></div>
      
      <div className="relative">
        <h3 className="text-white text-sm font-medium mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Annual Reports (10-K)
        </h3>
        
        <div className="flex flex-wrap gap-2">
          {companyData ? (
            companyData?.slice(0, 5).map((tenK, index) => (
              <TenKFinderItem key={index} tenK={tenK} />
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

export default TenKFinder;
