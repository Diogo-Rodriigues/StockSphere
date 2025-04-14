import React, { ChangeEvent, SyntheticEvent, useState } from "react";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchChange,
}: Props): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-900 to-indigo-900 overflow-hidden">

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <form
          className="relative"
          onSubmit={onSearchSubmit}
        >
          <div className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 ${
            isFocused ? 'ring-2 ring-indigo-400 shadow-indigo-500/20' : ''
          }`}>
            {/* Glass morphism effect */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20"></div>
            
            <input
              className="w-full p-6 pr-16 text-lg bg-transparent relative z-10 text-white placeholder-indigo-200 border-none focus:outline-none"
              id="search-input"
              placeholder="Search companies"
              value={search}
              onChange={handleSearchChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            
            <button 
              type="submit"
              className="absolute inset-y-0 right-0 px-6 flex items-center bg-indigo-600 text-white hover:bg-indigo-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-600/50 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          
          {/* Subtle glow effect under the search box */}
          <div className="absolute -inset-1 bg-indigo-600/20 blur-xl rounded-full -z-10 opacity-70"></div>
        </form>
      </div>
    </section>
  );
};

export default Search;
