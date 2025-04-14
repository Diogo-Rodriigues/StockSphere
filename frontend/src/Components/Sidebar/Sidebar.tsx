import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaTable, FaMoneyBill } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";

type Props = {};

const Sidebar = (props: Props) => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();
  
  const isActive = (path: string) => {
    return currentPath === path;
  };
  
  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-indigo-900 pt-20 z-10">
      <div className="h-full overflow-y-auto overflow-x-hidden px-6 py-4">
        <div className="flex items-center justify-center w-full mb-8 pt-6">
          <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg border border-indigo-400/30">
            <span className="text-white text-xl font-bold">SS</span>
          </div>
          <h1 className="text-white text-xl font-bold ml-3">StockDash</h1>
        </div>
        
        <div className="md:flex-col md:min-w-full flex flex-col list-none">
          <Link
            to="company-profile"
            className={`flex items-center p-3 rounded-xl md:min-w-full text-white text-sm font-medium block mb-2 transition-all duration-300 ${
              isActive("company-profile") 
              ? "bg-indigo-600 shadow-lg" 
              : "hover:bg-white/10"
            }`}
          >
            <div className={`p-2 rounded-lg ${isActive("company-profile") ? "bg-white/20" : "bg-white/5"}`}>
              <FaHome className="text-white" />
            </div>
            <h6 className="ml-3">Company Profile</h6>
          </Link>
          
          <Link
            to="income-statement"
            className={`flex items-center p-3 rounded-xl md:min-w-full text-white text-sm font-medium block mb-2 transition-all duration-300 ${
              isActive("income-statement") 
              ? "bg-indigo-600 shadow-lg" 
              : "hover:bg-white/10"
            }`}
          >
            <div className={`p-2 rounded-lg ${isActive("income-statement") ? "bg-white/20" : "bg-white/5"}`}>
              <FaTable className="text-white" />
            </div>
            <h6 className="ml-3">Income Statement</h6>
          </Link>
          
          <Link
            to="balance-sheet"
            className={`flex items-center p-3 rounded-xl md:min-w-full text-white text-sm font-medium block mb-2 transition-all duration-300 ${
              isActive("balance-sheet") 
              ? "bg-indigo-600 shadow-lg" 
              : "hover:bg-white/10"
            }`}
          >
            <div className={`p-2 rounded-lg ${isActive("balance-sheet") ? "bg-white/20" : "bg-white/5"}`}>
              <FaTableCells className="text-white" />
            </div>
            <h6 className="ml-3">Balance Sheet</h6>
          </Link>
          
          <Link
            to="cashflow-statement"
            className={`flex items-center p-3 rounded-xl md:min-w-full text-white text-sm font-medium block mb-2 transition-all duration-300 ${
              isActive("cashflow-statement") 
              ? "bg-indigo-600 shadow-lg" 
              : "hover:bg-white/10"
            }`}
          >
            <div className={`p-2 rounded-lg ${isActive("cashflow-statement") ? "bg-white/20" : "bg-white/5"}`}>
              <FaMoneyBill className="text-white" />
            </div>
            <h6 className="ml-3">Cashflow Statement</h6>
          </Link>
          
          <Link
            to="historical-dividend"
            className={`flex items-center p-3 rounded-xl md:min-w-full text-white text-sm font-medium block mb-2 transition-all duration-300 ${
              isActive("historical-dividend") 
              ? "bg-indigo-600 shadow-lg" 
              : "hover:bg-white/10"
            }`}
          >
            <div className={`p-2 rounded-lg ${isActive("historical-dividend") ? "bg-white/20" : "bg-white/5"}`}>
              <SlGraph className="text-white" />
            </div>
            <h6 className="ml-3">Historical Dividend</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
