import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaBrain } from 'react-icons/fa';

const About = () => {
  return (
    <section className="w-full text-white">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tight text-gray-100">
          <span className="text-blue-500">/</span>about
        </h2>
        <div className="h-[1px] bg-gray-700 flex-grow mt-2"></div>
      </div>

      {/* Bento Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Main Bio Card (Spans 2 columns on desktop) */}
        <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 shadow-lg">
          <div className="flex items-center gap-3 mb-4 text-blue-400">
            <FaCode size={24} />
            <h3 className="text-xl font-bold text-gray-100">The Developer</h3>
          </div>
          <p className="text-gray-400 leading-relaxed mb-4">
            I build scalable web applications and cross-platform mobile experiences. My core expertise lies in the MERN stack and Flutter ecosystem, where I have developed everything from comprehensive healthcare management systems to dynamic mobile applications.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Beyond writing clean code, I focus heavily on system architecture, secure backend routing, and creating intuitive, responsive user interfaces that deliver exceptional user experiences.
          </p>
        </div>

        {/* Location & Availability Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 flex flex-col justify-center shadow-lg">
          <div className="flex items-center gap-3 mb-4 text-emerald-400">
            <FaMapMarkerAlt size={24} />
            <h3 className="text-xl font-bold text-gray-100">Location</h3>
          </div>
          <p className="text-gray-400 text-sm mb-1">Based in</p>
          <p className="text-lg font-semibold text-gray-200">Surat, Gujarat</p>
          <div className="mt-6 flex items-center gap-2 bg-black/40 py-2 px-4 rounded-full border border-emerald-900/30 w-fit">
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono text-emerald-100">Available for work</span>
          </div>
        </div>

        {/* Education Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 shadow-lg">
          <div className="flex items-center gap-3 mb-4 text-purple-400">
            <FaGraduationCap size={24} />
            <h3 className="text-xl font-bold text-gray-100">Education</h3>
          </div>
          <p className="text-lg font-semibold text-gray-200 leading-tight mb-2">Bachelor of Computer Applications</p>
          <p className="text-lg font-semibold text-gray-200 leading-tight mb-2">Master of Computer Applications</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Currently pursuing my MCA with a specialized academic focus on Artificial Intelligence and Machine Learning.
          </p>
        </div>

        {/* The Future / AI Card (Spans 2 columns on desktop) */}
        <div className="md:col-span-2 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-cyan-500/20 rounded-3xl p-8 hover:bg-white/5 transition-colors duration-300 relative overflow-hidden shadow-lg group">
          {/* Decorative background icon */}
          <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 text-cyan-400">
            <FaBrain size={180} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 text-cyan-400">
              <FaBrain size={24} />
              <h3 className="text-xl font-bold text-gray-100">The Future: AI-ML Engineering</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              I am actively executing a structured learning roadmap to transition into a "Full-Stack AI-ML Engineer" role.
               My current focus involves integrating foundational machine learning concepts, intelligent workflows, and data-driven solutions into modern web and mobile architectures.
            </p>
          </div>
        </div>

  
 
  </div>

    
    </section>
  );
};

export default About;