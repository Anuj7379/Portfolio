import React from "react";
import { motion } from "framer-motion";
import chatAppImg from "../assets/chat-app.png";
import complainImg from "../assets/complain-system.png";
import healthcareImg from "../assets/health.png";

const projects = [
  {
    title: "Health Care Management System",
    description:
      "A full-stack hospital management system for patients and admins. Features include patient registration, appointment booking, complaint tracking, and record management. Built using React, Node.js, Express, and MongoDB. shadCN for UI components.",
    image: healthcareImg,
    link: "https://hbms-hbms.netlify.app/",
    github: "https://admin-hms-hms.netlify.app/", // 🔗 add your repo link here
  },
  {
    title: "College Complaint System",
    description:
      "A full-stack platform enabling students to submit, track, and manage complaints seamlessly, with real-time status updates and admin monitoring. Built with React and Firebase for a smooth, scalable workflow.",
    image: complainImg,
    link: "https://campuscare-85a37.web.app/",
  },
  {
    title: "Chat App",
    description:
      "A real-time chat application with dynamic user presence, room-based messaging, and a modern, responsive interface. Built with React, Node.js, Express, and Socket.IO for instant communication.",
    image: chatAppImg,
    link: "https://github.com/Anuj7379/src",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-32 bg-gradient-to-b from-[#05010a] via-[#0a0018] to-[#05010a] overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-10 w-72 h-72 bg-pink-500/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-[150px] animate-pulse delay-300" />
      </div>

      {/* Flowing Neon Line Across Section */}
      <motion.div
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
      />

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#00f0ff] drop-shadow-[0_0_25px_rgba(0,240,255,0.6)]"
      >
        ⚡ My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="relative z-10 mt-20 max-w-7xl mx-auto grid md:grid-cols-3 gap-20 px-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl 
                       border border-white/10 hover:border-cyan-400/40 transition-all 
                       shadow-[0_0_30px_rgba(0,240,255,0.2)] 
                       hover:shadow-[0_0_60px_rgba(255,0,128,0.4)] 
                       flex flex-col"
          >
            {/* Floating Neon Accent Shapes */}
            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full border border-pink-500/40 animate-spin-slow" />
            <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full border border-cyan-500/40 animate-pulse" />

            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
            </div>

            {/* Content */}
            <div className="p-6 text-center flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-6 flex-grow">
                {project.description}
              </p>

              {/* Buttons */}
              {i === 0 ? (
                // First project has two buttons
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full text-white font-medium 
                               bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 
                               shadow-lg hover:shadow-[0_0_25px_rgba(0,240,255,0.8)] 
                               hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    For user
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full text-white font-medium 
                               bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 
                               shadow-lg hover:shadow-[0_0_25px_rgba(255,0,128,0.8)] 
                               hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                  For Admin
                  </a>
                </div>
              ) : (
                // Other projects only one button
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 rounded-full text-white font-medium 
                             bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 
                             shadow-lg hover:shadow-[0_0_25px_rgba(0,240,255,0.8)] 
                             hover:scale-105 transition-all duration-300 ease-in-out mt-auto"
                >
                  🚀 View Project
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
