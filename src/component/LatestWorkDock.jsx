import React from 'react';
import { FaGithub } from 'react-icons/fa';

const LatestWorkDock = () => {
  return (
    <div className="w-full py-10 flex flex-col items-center justify-center relative z-10">
      <div className="text-center mb-8">
        <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase letter-spacing-2">
          Some of my latest work
        </h2>
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-4">
        {/* Glassmorphic Dock Container */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl -z-10"></div>
        
        <div className="flex gap-6 md:gap-10 items-end justify-center w-full flex-wrap py-6">
          
          {/* Icon 1: GitHub Profile */}
          <a href="https://github.com/amanbuids1" target="_blank" rel="noopener noreferrer" 
             className="group relative flex flex-col items-center transition-transform hover:-translate-y-4">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-2xl flex justify-center items-center shadow-lg group-hover:shadow-gray-400/50 group-hover:bg-black/40 transition-all duration-300">
              <FaGithub className="text-white text-2xl md:text-3xl transition-transform group-hover:scale-110" />
            </div>
            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-xs text-gray-300 transition-opacity duration-300 whitespace-nowrap">GitHub</span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default LatestWorkDock;