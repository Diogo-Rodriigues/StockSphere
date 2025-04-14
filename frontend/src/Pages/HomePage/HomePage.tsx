import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hero from "./hero.png";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-indigo-900 min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="rgba(138, 43, 226, 0.1)" d="M45.4,-51.6C58.3,-39.8,68.5,-24.1,71.8,-6.7C75.1,10.7,71.5,29.9,61,42.7C50.5,55.5,33.1,62,14.6,67.3C-3.8,72.5,-23.4,76.5,-39.1,70.1C-54.8,63.7,-66.7,46.9,-73.5,27.8C-80.2,8.8,-81.9,-12.5,-74.3,-28.5C-66.7,-44.5,-49.9,-55.2,-33.6,-65.9C-17.3,-76.6,-1.6,-87.3,11.8,-87.5C25.2,-87.7,35.6,-77.4,45.4,-51.6Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute right-0 w-1/2 h-full opacity-20 animate-pulse" style={{animationDuration: '15s'}}>
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="rgba(123, 104, 238, 0.2)" d="M42.8,-65.2C54.9,-56.3,63.6,-42.8,69.7,-28.1C75.8,-13.4,79.2,2.6,76.3,17.8C73.4,33,64.1,47.4,51.2,56.9C38.3,66.5,21.7,71.2,4.6,73.1C-12.5,75,-30.1,74.2,-43.7,65.9C-57.4,57.7,-67.1,42.1,-72.6,25.2C-78.1,8.3,-79.3,-9.9,-73.3,-24.4C-67.2,-38.9,-53.8,-49.7,-39.9,-57.7C-26,-65.7,-11.5,-70.9,2.7,-71.3C16.9,-71.7,33.8,-67.4,42.8,-65.2Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      {/* Header Hero Section */}
      <header className="relative pt-28 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">
                  Financial Intelligence
                </span> 
                <br />for the Modern Investor
              </h1>
              <p className="text-indigo-100 text-xl mb-8 leading-relaxed">
                Access powerful financial insights, market data, and company reports with our intuitive platform designed for both novice and experienced investors.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/search"
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 flex items-center group"
                >
                  Explore Companies
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link to="/register" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium rounded-xl transition-all duration-300 border border-white/10 hover:border-white/30">
                  Sign Up Free
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative z-10">
                  <img 
                    src={hero} 
                    alt="Financial data visualization" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-indigo-200 text-sm mb-1">Market Overview</p>
                        <h3 className="text-white text-xl font-bold">Real Analytics</h3>
                      </div>
                      <div className="flex gap-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">+12.38%</span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Trending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Financial Tools</h2>
            <p className="text-indigo-100 text-lg max-w-2xl mx-auto">Discover our comprehensive suite of tools designed to help you make informed investment decisions</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-indigo-100 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
              <div>
                <svg className="h-10 w-10 text-indigo-400 mb-6" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                </svg>
                <p className="text-xl text-indigo-100 mb-6 leading-relaxed">
                  StockSphere has transformed my investment strategy. The company insights and reports available are comprehensive and easy to understand. I've been able to make more informed decisions and have seen a significant improvement in my portfolio performance.
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-indigo-600/20 flex items-center justify-center text-white font-bold text-xl">M</div>
                  <div className="ml-4">
                    <h4 className="text-white font-bold">Maria Sanchez</h4>
                    <p className="text-indigo-200 text-sm">Investment Analyst</p>
                  </div>
                </div>
              </div>
              
              <div>
                <svg className="h-10 w-10 text-indigo-400 mb-6" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                </svg>
                <p className="text-xl text-indigo-100 mb-6 leading-relaxed">
                  As a casual investor, I was overwhelmed by all the financial data out there. StockSphere has simplified the process with its intuitive interface and community insights. Now I feel confident in my investment choices and enjoy using the platform daily.
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-purple-600/20 flex items-center justify-center text-white font-bold text-xl">D</div>
                  <div className="ml-4">
                    <h4 className="text-white font-bold">David Chen</h4>
                    <p className="text-indigo-200 text-sm">Retail Investor</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400 mb-2">{stat.value}</div>
                <p className="text-indigo-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your investment strategy?</h2>
            <p className="text-indigo-100 text-lg mb-8">Join thousands of investors who are making smarter decisions with StockSphere</p>
            <Link 
              to="/register" 
              className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 text-lg"
            >
              Get Started For Free
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

// Features data
const features = [
  {
    title: "Company Analysis",
    description: "Dive deep into company financials, performance metrics, and growth potential with our comprehensive analysis tools.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Financial Reports",
    description: "Access annual reports (10-K) and other financial documents from thousands of companies in an easily digestible format.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Community Insights",
    description: "Benefit from the collective intelligence of our community with shared insights, analysis, and discussions about financial markets.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    )
  }
];

// Stats data
const stats = [
  {
    value: "10K+",
    label: "Companies Analyzed"
  },
  {
    value: "45K+",
    label: "Active Users"
  },
  {
    value: "98%",
    label: "Satisfaction Rate"
  },
  {
    value: "24/7",
    label: "Market Updates"
  }
];

export default HomePage;
