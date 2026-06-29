import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiFirebase, SiFlutter, SiDart } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact className="text-[#61DAFB] text-3xl" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] text-3xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC] text-3xl" /> },
        { name: "HTML/CSS", icon: <FaReact className="text-gray-400 text-3xl" /> }, // Placeholder for standard web
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933] text-3xl" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-100 text-3xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] text-3xl" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28] text-3xl" /> },
      ]
    },
    {
      title: "Mobile & AI",
      skills: [
        { name: "Flutter", icon: <SiFlutter className="text-[#02569B] text-3xl" /> },
        { name: "Dart", icon: <SiDart className="text-[#0175C2] text-3xl" /> },
        { name: "Python", icon: <FaPython className="text-[#3776AB] text-3xl" /> },
        { name: "Git", icon: <FaGitAlt className="text-[#F05032] text-3xl" /> },
      ]
    }
  ];

  return (
    <section className="w-full text-white">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tight text-gray-100">
          <span className="text-blue-500">/</span>skills
        </h2>
        <div className="h-[1px] bg-gray-700 flex-grow mt-2"></div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-100 mb-8 font-mono border-b border-gray-700 pb-4 inline-block">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              {category.skills.map((skill, i) => (
                <div key={i} className="flex flex-col items-center justify-center gap-3 group">
                  <div className="p-4 bg-black/40 rounded-2xl border border-white/5 group-hover:border-white/20 group-hover:scale-110 transition-all duration-300 shadow-inner">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-gray-200 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;