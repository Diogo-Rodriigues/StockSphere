import React from "react";
import { motion } from "framer-motion";

type Props = {
  config: any;
  data: any;
};

const RatioList = ({ config, data }: Props) => {
  const renderedCells = config.map((row: any, index: number) => {
    return (
      <motion.li 
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        className="py-4 transition-all duration-300 hover:bg-indigo-600/20 rounded-xl px-4 my-2"
      >
        <div className="flex items-center space-x-4 relative">
          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 bg-indigo-500/5 opacity-0 hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
          
          <div className="flex-1 min-w-0 relative z-10">
            <p className="text-sm font-medium text-white truncate group-hover:text-indigo-200">
              {row.label}
            </p>
            <p className="text-sm text-indigo-200/70 truncate">
              <a
                href="/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="17727a767e7b57607e7973646372653974787a"
              >
                {row.subTitle && row.subTitle}
              </a>
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-white">
            {row.render(data)}
          </div>
        </div>
      </motion.li>
    );
  });
  
  return (
    <div className="w-full backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 shadow-2xl p-6 transition-all duration-300 hover:shadow-indigo-500/10">
      <ul className="divide-y divide-white/10">
        {renderedCells}
      </ul>
    </div>
  );
};

export default RatioList;
