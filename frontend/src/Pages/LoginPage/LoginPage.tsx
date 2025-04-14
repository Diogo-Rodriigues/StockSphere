import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Context/useAuth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../../Components/Footer/Footer";

type Props = {};

type LoginFormsInputs = {
  userName: string;
  password: string;
};

const validation = Yup.object().shape({
  userName: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = (props: Props) => {
  const { loginUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormsInputs>({ resolver: yupResolver(validation) });

  const handleLogin = (form: LoginFormsInputs) => {
    loginUser(form.userName, form.password);
  };
  
  return (
    <div className="min-h-screen w-full overflow-hidden flex flex-col bg-gradient-to-br from-gray-900 to-indigo-900 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10%] opacity-50">
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="rgba(138, 43, 226, 0.1)" d="M45.4,-51.6C58.3,-39.8,68.5,-24.1,71.8,-6.7C75.1,10.7,71.5,29.9,61,42.7C50.5,55.5,33.1,62,14.6,67.3C-3.8,72.5,-23.4,76.5,-39.1,70.1C-54.8,63.7,-66.7,46.9,-73.5,27.8C-80.2,8.8,-81.9,-12.5,-74.3,-28.5C-66.7,-44.5,-49.9,-55.2,-33.6,-65.9C-17.3,-76.6,-1.6,-87.3,11.8,-87.5C25.2,-87.7,35.6,-77.4,45.4,-51.6Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute inset-0 opacity-30 animate-pulse" style={{animationDuration: '15s'}}>
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="rgba(123, 104, 238, 0.2)" d="M42.8,-65.2C54.9,-56.3,63.6,-42.8,69.7,-28.1C75.8,-13.4,79.2,2.6,76.3,17.8C73.4,33,64.1,47.4,51.2,56.9C38.3,66.5,21.7,71.2,4.6,73.1C-12.5,75,-30.1,74.2,-43.7,65.9C-57.4,57.7,-67.1,42.1,-72.6,25.2C-78.1,8.3,-79.3,-9.9,-73.3,-24.4C-67.2,-38.9,-53.8,-49.7,-39.9,-57.7C-26,-65.7,-11.5,-70.9,2.7,-71.3C16.9,-71.7,33.8,-67.4,42.8,-65.2Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>
      
      <div className="flex-grow flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full max-w-md px-6 py-10"
        >
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-indigo-500/20 hover:border-white/30">
            <div className="p-8">
              <h1 className="text-2xl font-bold text-white mb-6 text-center">Welcome Back</h1>
              
              <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
                <div className="space-y-2">
                  <label htmlFor="username" className="text-sm font-medium text-indigo-100 block">
                    Username
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="username"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                      placeholder="Enter your username"
                      {...register("userName")}
                    />
                  </div>
                  {errors.userName && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-rose-300 text-sm mt-1 animate-pulse"
                    >
                      {errors.userName.message}
                    </motion.p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-indigo-100 block">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                      placeholder="••••••••"
                      {...register("password")}
                    />
                  </div>
                  {errors.password && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-rose-300 text-sm mt-1 animate-pulse"
                    >
                      {errors.password.message}
                    </motion.p>
                  )}
                </div>
                
                <div className="flex items-center justify-end">
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-300 hover:text-white transition-colors duration-300"
                  >
                    Forgot password?
                  </a>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white font-medium shadow-lg shadow-indigo-600/30 transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : null}
                  Sign in
                </motion.button>
                
                <div className="text-center mt-6">
                  <p className="text-sm text-indigo-200">
                    Don't have an account yet?{" "}
                    <Link
                      to="/register"
                      className="font-medium text-indigo-400 hover:text-white transition-colors duration-300"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LoginPage;
