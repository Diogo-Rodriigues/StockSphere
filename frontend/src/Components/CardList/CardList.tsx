import React, { SyntheticEvent } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({
  searchResults,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div className="px-6 py-8 relative z-10">
      {searchResults.length > 0 ? (
        <div className="space-y-4 transition-all duration-300">
          {searchResults.map((result) => {
            return (
              <Card
                id={result.symbol}
                key={uuidv4()}
                searchResult={result}
                onPortfolioCreate={onPortfolioCreate}
              />
            );
          })}
        </div>
      ) : (
        <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-indigo-900/50 opacity-80"></div>
          <div className="absolute -inset-1 bg-indigo-600/20 blur-xl rounded-full -z-10 opacity-50"></div>
          
          {/* Animated icon */}
          <div className="flex justify-center mb-6 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <p className="text-2xl font-semibold text-center text-white relative z-10">
            No results found
          </p>
          <p className="mt-2 text-center text-indigo-200 relative z-10">
            Try adjusting your search terms or use a different company symbol
          </p>
        </div>
      )}
    </div>
  );
};

export default CardList;
