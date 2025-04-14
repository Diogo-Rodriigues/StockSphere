import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 relative z-20 bg-gradient-to-br from-gray-900 to-indigo-900 w-full">
      <div className="container mx-auto px-6">
        <div className="md:ml-64 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">StockSphere</h2>
            <p className="text-indigo-200">Financial opinions platform</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
              About
            </a>
            <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
              Features
            </a>
            <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
              Terms
            </a>
            <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
              Privacy
            </a>
          </div>
        </div>
        <div className="md:ml-64 mt-8 pt-8 border-t border-white/10 text-center text-indigo-200 text-sm">
          © {new Date().getFullYear()} StockSphere. All rights reserved to Diogo Gomes Rodrigues.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

