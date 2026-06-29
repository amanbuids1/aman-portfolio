import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row overflow-hidden font-sans bg-[#1a202c]">
      
      {/* =========================================
          LEFT SIDE: THE CREATIVE DEVELOPER
          ========================================= */}
      <div className="flex-1 bg-gray-50 text-gray-900 flex flex-col justify-center px-8 md:pl-[8%] lg:pl-[12%] pt-20 pb-48 z-10 relative">
        <div className="max-w-md text-left md:pr-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-none text-gray-900">
            creative<br />developer
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            Crafting intuitive, pixel-perfect user interfaces and engaging cross-platform mobile experiences using React and Flutter.
          </p>
        </div>
      </div>

      {/* =========================================
          RIGHT SIDE: THE TECHNICAL ENGINEER
          ========================================= */}
      <div className="flex-1 bg-[#0f172a] text-white flex flex-col justify-center px-8 md:pl-[15%] lg:pl-[20%] pt-20 pb-48 z-10 relative">
        <div className="max-w-md text-left">
          <h1 className="text-5xl md:text-7xl font-mono font-bold tracking-tight mb-4 leading-none text-cyan-50 opacity-90">
            [ technical<br />&nbsp;&nbsp;engineer ]
          </h1>
          <div className="text-sm md:text-base text-gray-400 leading-relaxed font-mono bg-white/5 p-4 rounded-md border border-white/10 shadow-inner">
            <p><span className="text-blue-400">const</span> techStack = [<span className="text-green-300">"MERN"</span>, <span className="text-green-300">"AI"</span>];</p>
            <p className="mt-2 text-gray-300 font-sans">
              Building scalable backend architectures, optimized databases, and integrating intelligent AI-driven workflows.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================
          CENTER: SPLIT-FACE IMAGE 
          ========================================= */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-20 mix-blend-normal hidden md:flex">
         {/* Image temporarily removed. 
           To add it back later, put an image named split-profile.png in your public folder 
           and uncomment the code below:

           <img 
             src="/split-profile.png" 
             alt="Aman Split Profile" 
             className="h-[75vh] object-contain drop-shadow-2xl"
           />
         */}
      </div>

      {/* =========================================
          BOTTOM: BUTTONS 
          ========================================= */}
      <div className="absolute bottom-32 left-0 w-full flex justify-center gap-4 z-30 px-4 flex-wrap">
        
        {/* Projects Button */}
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all hover:-translate-y-1 cursor-pointer border border-blue-400">
          View Projects
        </button>
        
        {/* UPDATED: Download Resume CTA */}
        <a 
          href="/resume.pdf" 
          download="Aman_Resume.pdf"
          className="bg-white hover:bg-gray-200 text-gray-900 font-bold py-3 px-8 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all hover:-translate-y-1 cursor-pointer flex items-center justify-center gap-2 border border-gray-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          Download Resume
        </a>

        {/* GitHub Link */}
        <a 
          href="https://github.com/amanbuids1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all hover:-translate-y-1 cursor-pointer flex items-center justify-center border border-gray-600"
        >
          GitHub
        </a>
      </div>

    </section>
  );
};

export default Hero;