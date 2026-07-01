import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import LatestWorkDock from "./component/LatestWorkDock";
import About from "./component/About";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Contact from './component/Contact';

function App() {
  return (
    <div className="bg-[#1a202c] text-white min-h-screen selection:bg-blue-500 selection:text-white">
      <Navbar />
      
      {/* FULL-WIDTH SECTIONS */}
      <div id="hero" className="w-full">
        <Hero />
      </div>
      
      <div className="w-full">
        <LatestWorkDock />
      </div>

      {/* CONSTRAINED SECTIONS */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 pt-24">
        <div id="about">
          <About />
        </div>
        <div id="projects" className="mt-20">
          <Projects />
        </div>
        <div id="skills" className="mt-20">
          <Skills />
        </div>
        
        {/* ADDED CONTACT SECTION HERE */}
        <div id="contact" className="mt-20 pb-20">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;