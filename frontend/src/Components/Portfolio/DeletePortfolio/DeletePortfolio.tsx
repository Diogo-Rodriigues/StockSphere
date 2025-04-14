import React, { SyntheticEvent, useState } from "react";

interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full">
      <form onSubmit={onPortfolioDelete}>
        <input hidden={true} value={portfolioValue} />
        <button 
          className={`relative w-full py-3 px-6 text-white font-medium rounded-2xl backdrop-blur-md transition-all duration-300 overflow-hidden ${
            isHovered ? 'shadow-lg shadow-red-500/30' : ''
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 transition-transform duration-300 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}></div>
          
          {/* Glow effect */}
          <div className={`absolute -inset-1 bg-red-500/20 blur-md rounded-full opacity-0 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}></div>
          
          {/* Button content */}
          <div className="relative flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <span className="ml-2">Remove</span>
          </div>
        </button>
      </form>
    </div>
  );
};

export default DeletePortfolio;
