import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <motion.section
    id="hero"
    className="flex flex-col justify-center items-center h-screen bg-slate-900 dark:bg-slate-100 text-center"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <motion.h1
      className="text-5xl md:text-7xl font-extrabold text-blue-500 mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7 }}
    >
      BARASA JUMA JAMIL
    </motion.h1>
    <motion.h2
      className="text-2xl md:text-3xl font-medium text-gray-100 dark:text-gray-900 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.7 }}
    >
      SOFTWARE DEVELOPER / UI/UX | Building Impactful Solutions
    </motion.h2>
    <motion.a
      href="#projects"
      className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-colors text-lg"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      View My Work
    </motion.a>
  </motion.section>
);

export default Hero;
