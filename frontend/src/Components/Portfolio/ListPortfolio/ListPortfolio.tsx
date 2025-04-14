import React, { SyntheticEvent } from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";
import { PortfolioGet } from "../../../Models/Portfolio";

interface Props {
  portfolioValues: PortfolioGet[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
  return (
    <section id="portfolio" className="py-16 relative bg-gradient-to-br from-gray-900 to-indigo-900 overflow-hidden">
      
      {/* Section heading with glass effect */}
      <div className="relative mb-12">
        <h2 className="text-4xl font-bold text-center text-white">
          My Portfolio
        </h2>
        <div className="w-24 h-1 mx-auto mt-4 bg-indigo-600 rounded-full"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {portfolioValues.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioValues.map((portfolioValue, index) => (
              <CardPortfolio
                key={index}
                portfolioValue={portfolioValue}
                onPortfolioDelete={onPortfolioDelete}
              />
            ))}
          </div>
        ) : (
          <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-indigo-900/50 opacity-80"></div>
            <div className="absolute -inset-1 bg-indigo-600/20 blur-xl rounded-full -z-10 opacity-50"></div>
            
            {/* Empty state with animated icon */}
            <div className="flex justify-center mb-6 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-semibold text-center text-white relative z-10">
              Your portfolio is empty
            </h3>
            <p className="mt-2 text-center text-indigo-200 relative z-10">
              Start by adding companies to your portfolio
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ListPortfolio;