import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 ${
        isHovered ? 'transform scale-102 shadow-indigo-500/30' : ''
      }`}
      key={id}
      id={id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glass morphism effect */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20"></div>
      
      {/* Subtle gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-gray-900/50 to-indigo-900/50 transition-opacity duration-300 ${
        isHovered ? 'opacity-70' : 'opacity-80'
      }`}></div>
      
      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-indigo-600/20 blur-xl rounded-full -z-10 transition-opacity duration-300 ${
        isHovered ? 'opacity-70' : 'opacity-40'
      }`}></div>
      
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-6 relative z-10">
        <Link
          to={`/company/${searchResult.symbol}/company-profile`}
          className="font-bold text-xl mb-3 md:mb-0 text-center text-white hover:text-indigo-200 transition-colors duration-300 md:text-left"
        >
          <span className="block text-indigo-300 text-sm font-medium mb-1">Company</span>
          {searchResult.name} 
          <span className="ml-2 text-indigo-300">({searchResult.symbol})</span>
        </Link>
        
        <div className="flex flex-col items-center md:items-end">
          <span className="block text-indigo-300 text-sm font-medium mb-1">Currency</span>
          <p className="text-white">{searchResult.currency}</p>
        </div>
        
        <div className="flex flex-col items-center my-3 md:my-0 md:items-end">
          <span className="block text-indigo-300 text-sm font-medium mb-1">Exchange</span>
          <p className="font-bold text-white">
            {searchResult.exchangeShortName}
            <span className="text-indigo-300 font-normal ml-2">
              {searchResult.stockExchange}
            </span>
          </p>
        </div>
        
        <AddPortfolio
          onPortfolioCreate={onPortfolioCreate}
          symbol={searchResult.symbol}
        />
      </div>
      
      {/* Animated highlight border on hover */}
      <div className={`absolute inset-0 border border-indigo-400/30 rounded-3xl transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  );
};

export default Card;
