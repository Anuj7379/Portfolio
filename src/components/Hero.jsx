import React from "react";
import heroImage from "../assets/hero-dev.png"; // 👈 Use your illustration image here

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 py-24 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-snug mb-4">
          Hi, I’m <span className="text-blue-600 dark:text-blue-400">Anuj Vishwakarma</span>
        </h1>

        <h3 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 font-medium">
          Full Stack Developer | CSE (AI & ML) @ KCCITM
        </h3>

        <p className="max-w-xl text-gray-600 dark:text-gray-400 mb-8 text-base md:text-lg">
          I build scalable, real-world web apps with clean code and modern tools. Let's collaborate to create something amazing together!
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
          >
            Contact Me
          </a>

          <a
            href="/Anuj_Vishwakarma_Resume.pdf"
            download
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className="flex-1 mb-10 md:mb-0">
        <img
          src={heroImage}
          alt="Developer Illustration"
          className="w-full max-w-sm mx-auto animate-fade-in"
        />
      </div>
    </section>
  );
};

export default Hero;
