import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/heroG.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Background gradient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-red-600 rounded-full blur-[220px] opacity-30"></div>
        <div className="absolute bottom-[-150px] left-[-100px] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[220px] opacity-30"></div>
      </div>

      {/* Left content with square strip */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 z-10 text-center md:text-left flex gap-6"
      >
        {/* Square Strip */}
        <div className="hidden md:flex flex-col items-center">
          <div className="w-2 h-16 bg-gradient-to-b from-red-500 to-blue-500 rounded-md"></div>
          <div className="w-2 flex-1 bg-gradient-to-b from-blue-500 to-red-500 rounded-md"></div>
        </div>

        {/* Text Content */}
        <div>
          <p className="uppercase text-red-500 tracking-[5px] font-semibold mb-2">
            Full Stack Developer
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Hi, I’m <span className="text-red-500">Anuj Vishwakarma</span>
          </h1>

          <p className="text-gray-400 max-w-lg mb-8">
            Crafting futuristic, clean & scalable web solutions using modern
            technologies. Passionate about design systems, AI & full stack
            development.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="/Anuj_Vishwakarma_Resume.pdf"
              download
              className="bg-red-500 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="border border-red-500 px-6 py-3 rounded-lg hover:bg-red-500 hover:text-black transition"
            >
              My Work
            </a>
          </div>

          {/* Final Year Badge */}
          <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg max-w-xs mx-auto md:mx-0 border border-red-500">
            <h3 className="text-2xl font-bold text-red-500">Final Year Student</h3>
            <p className="text-gray-400">B.Tech CSE </p>
          </div>
        </div>
      </motion.div>

      {/* Right content - Image with futuristic shapes */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 relative z-10 mt-10 md:mt-0 flex justify-center"
      >
        <div className="relative w-[300px] md:w-[380px]">
          {/* Neon UI lines */}
          <div className="absolute top-0 left-0 w-full h-full border-2 border-red-500 rounded-xl -rotate-6 opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-full border-2 border-blue-500 rounded-xl rotate-6 opacity-50"></div>

          {/* Circles and UI shapes */}
          <div className="absolute -top-6 -left-6 w-16 h-16 border-4 border-red-500 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 -right-10 w-20 h-20 border-2 border-blue-500 rounded-full opacity-70"></div>
          <div className="absolute -bottom-6 left-1/2 w-12 h-12 border-2 border-red-500 rotate-45"></div>

          {/* Profile image */}
          <img
            src={heroImage}
            alt="Developer"
            className="relative z-10 rounded-xl shadow-[0_0_25px_rgba(255,0,0,0.6)]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
