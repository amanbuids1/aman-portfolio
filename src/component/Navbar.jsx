import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 text-white mix-blend-difference">
      
      {/* Logo Area */}
      <div className="text-2xl font-bold font-mono tracking-wider cursor-pointer">
          Aman<span className="text-blue-500">.</span>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex gap-8 font-medium text-sm tracking-wide items-center">
        <li>
          <a href="#hero" className="hover:text-blue-400 transition-colors">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
        </li>
        <li>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
        </li>
        {/* ADDED: Contact Link */}
        <li>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </li>
        
        {/* Resume Download Link */}
        <li>
          <a 
            href="/resume.pdf" 
            download="Aman_Resume.pdf" 
            className="hover:text-blue-400 transition-colors font-bold border border-white/20 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Mobile Menu Icon (Hamburger) */}
      <button className="md:hidden text-white focus:outline-none">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

    </nav>
  );
};

export default Navbar;