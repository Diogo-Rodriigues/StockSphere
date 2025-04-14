import React from "react";

type Props = {
  title: string;
  subTitle: string;
  className?: string;
};

const Tile = ({ title, subTitle, className }: Props) => {
  return (
    <div className={`w-full lg:w-6/12 xl:w-3/12 px-4 ${className}`}>
      <div className="relative flex flex-col min-w-0 break-words backdrop-blur-md bg-white/10 rounded-2xl mb-6 xl:mb-0 shadow-2xl border border-white/20 transition-all duration-300 hover:shadow-indigo-500/30 hover:scale-[1.02] group">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="flex-auto p-4 z-10 relative">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-indigo-300 uppercase font-bold text-xs tracking-wider">
                {title}
              </h5>
              <span className="font-bold text-xl text-white mt-1 block">
                {subTitle}
              </span>
            </div>
            
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-12 h-12 -mt-4 -mr-4 rounded-full bg-indigo-600/20 backdrop-blur-sm border border-white/10 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tile;
