import React from 'react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => (
  <button
    aria-label="Toggle Dark Mode"
    className="fixed top-5 right-5 z-50 bg-blue-500 text-white dark:bg-slate-900 dark:text-blue-500 rounded-full p-2 shadow-lg hover:bg-blue-600 transition-colors"
    onClick={() => setDarkMode(!darkMode)}
  >
    {darkMode ? (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.05l-.71-.71" /></svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" /></svg>
    )}
  </button>
);

export default DarkModeToggle;
