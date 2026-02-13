import React from 'react';

const Navbar = () => {
  // Smooth scroll and active section highlighting logic will be added here
  return (
    <nav className="fixed w-full z-50 bg-slate-900 dark:bg-slate-100 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-blue-500">BARASA JUMA JAMIL</div>
        <ul className="flex space-x-4 text-base">
          {/* On mobile, replace Education with Contact */}
          <li><a href="#about" className="hover:text-blue-500 transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a></li>
          <li className="md:hidden"><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
          <li className="hidden md:inline"><a href="#education" className="hover:text-blue-500 transition-colors">Education</a></li>
          <li><a href="#testimonials" className="hover:text-blue-500 transition-colors">Testimonials</a></li>
          <li className="hidden md:inline"><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
