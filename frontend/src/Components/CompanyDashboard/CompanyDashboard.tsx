import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { portfolioAddAPI } from "../../Services/PortfolioService";
import { toast } from "react-toastify";

interface Props {
  children: React.ReactNode;
  ticker: string;
}

const CompanyDashboard = ({ children, ticker }: Props) => {
  const navigate = useNavigate();

  const handleBackToPortfolio = () => {
    navigate("/search");
  };

  const handleAddToPortfolio = async () => {
    try {
      await portfolioAddAPI(ticker);
      toast.success("Stock added to portfolio!");
    } catch (error) {
      console.error("Error adding stock to portfolio:", error);
      toast.warning("Could not add stock to portfolio!");
    }
  };

  return (
    <div className="relative md:ml-64 w-full min-h-screen bg-indigo-900 bg-fixed">
      {/* Content area */}
      <div className="relative pt-20 pb-32">
        <div className="px-4 md:px-6 mx-auto w-full">
          {/* Action Buttons */}
          <div className="mb-6 flex justify-end space-x-4">
            <motion.button
              onClick={handleAddToPortfolio}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white hover:bg-indigo-600 transition-all duration-300 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add to Portfolio
            </motion.button>
            <motion.button
              onClick={handleBackToPortfolio}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white hover:bg-indigo-600 transition-all duration-300 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Portfolio
            </motion.button>
          </div>

          <div>
            <div className="flex flex-wrap backdrop-blur-md bg-white/5 rounded-3xl border border-white/10 shadow-2xl p-6 transition-all duration-500">
              {children}
            </div>
            <div className="flex flex-wrap mt-6 backdrop-blur-md bg-white/5 rounded-3xl border border-white/10 shadow-2xl p-6 transition-all duration-500">
              {<Outlet context={ticker} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
