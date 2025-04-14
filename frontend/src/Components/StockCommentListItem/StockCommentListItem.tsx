import React from "react";
import { CommentGet } from "../../Models/Comment";
import { motion } from "framer-motion";

type Props = {
  comment: CommentGet;
};

const StockCommentListItem = ({ comment }: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg p-5 mb-4 transition-all duration-300 hover:bg-white/15 hover:shadow-indigo-500/10 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-indigo-600/10 rounded-full filter blur-2xl -mr-10 -mb-10"></div>
      
      <div className="relative">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-lg font-bold text-white">{comment.title}</h4>
        </div>
        
        <p className="text-indigo-100 mb-4 leading-relaxed">{comment.content}</p>
        
        <div className="flex items-center text-indigo-300 text-sm border-t border-white/10 pt-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>@{comment.createdBy}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default StockCommentListItem;
