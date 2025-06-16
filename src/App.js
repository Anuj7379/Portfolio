import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";

import "./index.css"; // Ensure Tailwind is imported

function App() {
  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white scroll-smooth">
      <Navbar />
      <main className="px-4 md:px-16 max-w-6xl mx-auto">
        <Hero />
        <Projects />
        <Skills />
        <About />

        <Contact />
      </main>
    </div>
  );
}

export default App;
