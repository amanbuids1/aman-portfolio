import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import LatestWorkDock from "./component/LatestWorkDock"; // IMPORTED NEW DOCK
import About from "./component/About";
import Projects from "./component/Projects";
import Skills from "./component/Skills";

function App() {
  return (
    <div className="bg-[#1a202c] text-white min-h-screen selection:bg-blue-500 selection:text-white">
      <Navbar />
      
      {/* 
        FULL-WIDTH SECTIONS 
        Hero and Dock are kept outside the max-w-5xl wrapper so they span the whole screen.
      */}
      <div id="hero" className="w-full">
        <Hero />
      </div>
      
      <div className="w-full">
        <LatestWorkDock />
      </div>

      {/* 
        CONSTRAINED SECTIONS 
        About, Projects, and Skills remain inside the max-width wrapper so they don't stretch too far.
      */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 pt-24">
        <div id="about">
          <About />
        </div>
        <div id="projects" className="mt-20">
          <Projects />
        </div>
        <div id="skills" className="mt-20 pb-20">
          <Skills />
        </div>
      </main>
      
    </div>
  );
}

export default App;