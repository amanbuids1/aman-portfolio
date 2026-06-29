import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projectList = [
   {
      title: "Library Management App",
      description: "A cross-platform mobile application for library inventory and user management with real-time database synchronization.",
      techStack: ["Flutter", "Firebase", "Dart"],
      githubLink: "https://github.com/amanbuids1/Library-Management-Flutter-Firebase",
      liveLink: "#",
      featured: false,
    },
    {
      title: "AI Computer Vision API (In Progress)",
      description: "Currently building intelligent, AI-driven solutions leveraging foundational machine learning concepts to classify and process image data.",
      techStack: ["Python", "Fast.ai", "React", "API"],
      githubLink: "https://github.com/amanbuids1",
      liveLink: "#",
      featured: false,
    }
  ];

  return (
    <section className="w-full text-white">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tight text-gray-100">
          <span className="text-blue-500">/</span>projects
        </h2>
        <div className="h-[1px] bg-gray-700 flex-grow mt-2"></div>
      </div>

      {/* Grid Layout for Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectList.map((project, index) => (
          <div 
            key={index} 
            className={`group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${project.featured ? 'md:col-span-2' : 'col-span-1'}`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-100 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-xs font-mono px-3 py-1 bg-black/40 text-blue-300 rounded-full border border-blue-900/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 items-center">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              {project.liveLink !== "#" && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <FaExternalLinkAlt size={20} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;