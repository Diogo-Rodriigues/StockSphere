import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  ticker: string;
};

const CompFinderItem = ({ ticker }: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <Link
        reloadDocument
        to={`/company/${ticker}/company-profile`}
        className="ticker-link inline-flex items-center px-5 py-3 text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-indigo-600 focus:z-10 focus:ring-2 focus:ring-indigo-400 transition-all duration-300 shadow-lg"
      >
        <motion.div
          className="cursor-pointer relative mr-2"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-300 hover:text-indigo-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-900/90 rounded-md backdrop-blur-sm whitespace-nowrap z-10"
              >
                View Company Profile
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900/90"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        <div className="relative overflow-hidden">
          <span className="relative z-10">{ticker}</span>
          <div className="hover-gradient absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300"></div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CompFinderItem;
