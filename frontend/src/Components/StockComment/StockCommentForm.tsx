import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

type Props = {
  symbol: string;
  handleComment: (e: CommentFormInputs) => void;
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const validation = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
});

const StockCommentForm = ({ symbol, handleComment }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentFormInputs>({ resolver: yupResolver(validation) });
  
  return (
    <motion.form 
      className="w-full mt-6"
      onSubmit={handleSubmit(handleComment)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4">
        <div>
          <input
            type="text"
            id="title"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            placeholder="Comment Title"
            {...register("title")}
          />
          {errors.title && (
            <p className="text-rose-300 text-sm mt-1 animate-pulse">{errors.title.message}</p>
          )}
        </div>
        
        <div>
          <textarea
            id="comment"
            rows={6}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 resize-none"
            placeholder="Share your thoughts about this stock..."
            {...register("content")}
          ></textarea>
          {errors.content && (
            <p className="text-rose-300 text-sm mt-1 animate-pulse">{errors.content.message}</p>
          )}
        </div>
        
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-indigo-600/30"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
          Post Comment
        </motion.button>
      </div>
    </motion.form>
  );
};

export default StockCommentForm;
