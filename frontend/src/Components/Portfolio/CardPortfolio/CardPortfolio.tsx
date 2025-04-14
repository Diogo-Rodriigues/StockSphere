import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";
import { PortfolioGet } from "../../../Models/Portfolio";

interface Props {
  portfolioValue: PortfolioGet;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl transition-all duration-300 overflow-hidden ${
        isHovered ? 'transform scale-102 shadow-indigo-500/30' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-gray-900/50 to-indigo-900/50 transition-opacity duration-300 ${
        isHovered ? 'opacity-70' : 'opacity-80'
      }`}></div>
      
      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-indigo-600/20 blur-xl rounded-full -z-10 transition-opacity duration-300 ${
        isHovered ? 'opacity-70' : 'opacity-40'
      }`}></div>
      
      <div className="flex flex-col items-center p-8 space-y-6 relative z-10">
        {/* Symbol icon */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-600/30 backdrop-blur-md mb-2">
          <span className="text-2xl font-bold text-white">{portfolioValue.symbol.charAt(0)}</span>
        </div>
        
        <Link
          to={`/company/${portfolioValue.symbol}/company-profile`}
          className="text-2xl font-bold text-white hover:text-indigo-300 transition-colors duration-300"
        >
          {portfolioValue.symbol}
        </Link>
        
        <p className="text-indigo-200 text-sm -mt-4">{portfolioValue.companyName}</p>
        
        {/* Animated divider */}
        <div className={`w-16 h-0.5 bg-indigo-400/50 transition-all duration-300 ${
          isHovered ? 'w-24' : 'w-16'
        }`}></div>
        
        <DeletePortfolio
          portfolioValue={portfolioValue.symbol}
          onPortfolioDelete={onPortfolioDelete}
        />
      </div>
      
      {/* Animated highlight border on hover */}
      <div className={`absolute inset-0 border border-indigo-400/30 rounded-3xl transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  );
};

export default CardPortfolio;
