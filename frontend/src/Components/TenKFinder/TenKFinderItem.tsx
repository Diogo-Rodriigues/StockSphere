import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CompanyTenK } from "../../company";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  tenK: CompanyTenK;
};

const TenKFinderItem = ({ tenK }: Props) => {
  const fillingDate = new Date(tenK.fillingDate).getFullYear();
  const [showTooltip, setShowTooltip] = useState(false);
  
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const link = document.createElement('a');
    link.href = tenK.finalLink;
    link.download = `${tenK.symbol}_${fillingDate}_10K.pdf`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <Link
        reloadDocument
        to={tenK.finalLink}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-indigo-600 hover:border-indigo-500/50 transition-all duration-300"
      >
        <motion.div 
          className="cursor-pointer relative" 
          onClick={handleDownload}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-indigo-300 hover:text-indigo-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
          
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-900/90 rounded-md backdrop-blur-sm whitespace-nowrap z-10"
              >
                Download PDF
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900/90"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        {fillingDate} Report
      </Link>
    </motion.div>
  );
};

export default TenKFinderItem;
