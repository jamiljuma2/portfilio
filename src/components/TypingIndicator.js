import React from 'react';
import { motion } from 'framer-motion';

const TypingIndicator = () => (
  <motion.div
    className="flex items-center gap-2 mt-2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" />
    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-75" />
    <span className="w-2 h-2 bg-purple-300 rounded-full animate-bounce delay-150" />
    <span className="text-xs text-gray-400 ml-2">AI is typing...</span>
  </motion.div>
);

export default TypingIndicator;
