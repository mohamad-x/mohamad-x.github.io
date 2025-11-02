import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import BackgroundFX from "./components/BackgroundFX";



export default function App(){
  return (
    <>
      <BackgroundFX theme="constellation" mouseGlow={true} />
      <div className="site">
        {/* existing content below */}
        <Navbar/>
        <Hero/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Education/>
        <Certifications/>
        <Contact/>
        <footer><div className="wrap">© {new Date().getFullYear()} Mohamad Abdulazim · Portfolio</div></footer>
      </div>
    </>
  )
}
