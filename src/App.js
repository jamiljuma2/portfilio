import React, { useState } from 'react';
import MiniChatGPTPortfolio from './components/MiniChatGPTPortfolio';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-900 dark:bg-slate-100 text-gray-100 dark:text-gray-900 transition-colors duration-300">
        <Navbar />
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Testimonials />
        <Contact />
        <MiniChatGPTPortfolio />
      </div>
    </div>
  );
}

export default App;
