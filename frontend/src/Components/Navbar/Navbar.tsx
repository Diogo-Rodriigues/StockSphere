import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { useAuth } from "../../Context/useAuth";

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-gradient-to-br from-gray-900 to-indigo-900 shadow-lg" 
          : "bg-gradient-to-br from-gray-900 to-indigo-900"
      }`}
    >
      <div className="container mx-auto px-6 py-4 relative">
        {/* Animated gradient accent line at the bottom */}
        <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
        
        <div className="flex items-center justify-between">
          {/* Logo on the left with hover effect */}
          <div className="flex-shrink-0 group">
            <Link to="/" className="flex items-center">
              <div className="p-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 group-hover:bg-white/25">
                <img src={logo} alt="Logo" className="h-8 transition-all duration-300 group-hover:scale-105" />
              </div>
            </Link>
          </div>
          
          {/* Centered navigation with glass effect */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
              <Link 
                to="/search" 
                className="text-white font-medium transition-colors duration-300 relative group"
              >
                Search
                {/* Animated underline effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button with animated icon */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white transition-colors duration-300 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {isLoggedIn() ? (
            <div className="hidden md:flex items-center space-x-6 flex-shrink-0">
              <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                Welcome, <span className="text-indigo-200 font-medium">{user?.userName}</span>
              </div>
              <button
                onClick={logout}
                className="px-5 py-2 font-medium text-white border border-indigo-400 rounded-full hover:bg-indigo-600 hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 bg-indigo-600/80 backdrop-blur-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-6 flex-shrink-0">
              <Link 
                to="/login" 
                className="text-white font-medium transition-colors duration-300 relative group"
              >
                Login
                {/* Animated underline effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/register"
                className="px-5 py-2 font-medium text-white rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 bg-indigo-600 hover:bg-indigo-500"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
        
        {/* Mobile menu with animated slide effect */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2 rounded-2xl bg-indigo-900/80 backdrop-blur-xl border border-white/20 shadow-lg animate-fadeIn overflow-hidden">
            <Link 
              to="/search" 
              className="block py-3 text-white hover:bg-white/10 font-medium text-center transition-colors duration-300"
            >
              Search
            </Link>
            {isLoggedIn() ? (
              <>
                <div className="py-3 text-white font-medium text-center border-t border-white/10">
                  Welcome, <span className="text-indigo-200">{user?.userName}</span>
                </div>
                <button
                  onClick={logout}
                  className="block w-full text-center py-3 text-indigo-200 hover:text-white font-medium border-t border-white/10 hover:bg-indigo-600/40 transition-colors duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="block py-3 text-white hover:bg-white/10 font-medium text-center transition-colors duration-300 border-t border-white/10"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block py-3 text-indigo-200 hover:text-white hover:bg-indigo-600/40 font-medium text-center transition-colors duration-300 border-t border-white/10"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
