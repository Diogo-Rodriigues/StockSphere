import React, { SyntheticEvent, useState } from "react";

interface Props {
  onPortfolioCreate: (e: SyntheticEvent) => void;
  symbol: string;
}

const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-end flex-1 md:flex-row">
      <form onSubmit={onPortfolioCreate} className="w-full md:w-auto">
        <input readOnly={true} hidden={true} value={symbol} />
        <button
          type="submit"
          className={`relative py-3 px-8 text-white font-medium rounded-2xl backdrop-blur-md transition-all duration-300 overflow-hidden ${
            isHovered ? 'shadow-lg shadow-indigo-500/30' : ''
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-500 transition-transform duration-300 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}></div>
          
          {/* Glow effect */}
          <div className={`absolute -inset-1 bg-indigo-500/20 blur-md rounded-full opacity-0 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}></div>
          
          {/* Button content */}
          <div className="relative flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="ml-2">Add to Portfolio</span>
          </div>
        </button>
      </form>
    </div>
  );
};

export default AddPortfolio;
