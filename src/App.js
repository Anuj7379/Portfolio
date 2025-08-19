import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import { Element } from "react-scroll";
import "./index.css"; // Ensure Tailwind is imported

function App() {
  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white scroll-smooth">
      <Navbar />
      <main className=" max-w-screen mx-auto">
        <Element name="home">
          <Hero />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Contact />
      </main>
    </div>
  );
}

export default App;
