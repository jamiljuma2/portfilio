import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <nav className="fixed w-full z-50 bg-slate-900 dark:bg-slate-100 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-blue-500">BARASA JUMA JAMIL</div>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {navLinks.map(link => (
            <li key={link.label}><a href={link.href} className="hover:text-blue-500 transition-colors">{link.label}</a></li>
          ))}
        </ul>
        {/* Mobile menu button */}
        <button className="md:hidden text-blue-500 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile menu dropdown */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 bg-slate-900 dark:bg-slate-100 px-6 py-4 text-lg shadow-lg">
          {navLinks.map(link => (
            <li key={link.label}><a href={link.href} className="hover:text-blue-500 transition-colors" onClick={() => setMenuOpen(false)}>{link.label}</a></li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
