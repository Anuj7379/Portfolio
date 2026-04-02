import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import chatAppImg from "../assets/chat-app.png";
import complainImg from "../assets/complain-system.png";
import healthcareImg from "../assets/health.png";
import AILearning from "../assets/AILearning.png";
import ScracthSketch from "../assets/ScracthSketch.png";

const projects = [
  {
    title: "Health Care Management System",
    description:
      "A full-stack hospital management system with patient registration, appointments, and admin dashboard. Built with React, Node.js, Express, and MongoDB.",
    image: healthcareImg,
    link: "https://hbms-hbms.netlify.app/",
    github: "https://admin-hms-hms.netlify.app/",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "College Complaint System",
    description:
      "A platform for students to submit and track complaints with real-time updates and admin monitoring using Firebase.",
    image: complainImg,
    link: "https://campuscare-85a37.web.app/",
    tech: ["React", "Firebase"],
  },
  {
    title: "AI Powered Learning",
    description:
      "AI-based learning platform with personalized recommendations and adaptive tests.",
    image: AILearning,
    link: "https://learnwithaii.netlify.app/",
    tech: ["React", "Node.js", "AI"],
  },
  {
    title: "Scratch Sketch",
    description:
      "Canvas-based drawing and document editor using Next.js, Excalidraw, and HTML5 Canvas.",
    image: ScracthSketch,
    link: "https://newsktst.vercel.app/",
    tech: ["Next.js", "Excalidraw"],
  },
  {
    title: "Chat App",
    description:
      "Real-time chat app with rooms, presence, and instant messaging using Socket.IO.",
    image: chatAppImg,
    link: "https://github.com/Anuj7379/src",
    github: "https://github.com/Anuj7379",
    tech: ["React", "Socket.IO"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#020617] py-24 px-6">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          My Projects
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          A selection of projects showcasing my skills in full-stack development
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group bg-[#0f172a] border border-white/10 rounded-xl overflow-hidden 
                       hover:border-blue-500/40 transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-auto flex gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 px-4 py-2 
                             bg-blue-600 hover:bg-blue-500 text-white text-sm 
                             rounded-md transition"
                >
                  <ExternalLink size={16} />
                  Live
                </a>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 px-4 py-2 
                               border border-white/20 hover:border-white/40 
                               text-gray-300 text-sm rounded-md transition"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;