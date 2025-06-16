import React from "react";
import chatAppImg from "../assets/chat-app.png";
import complainImg from "../assets/complain-system.png";
import parkingImg from "../assets/parking-system.png";

const projects = [
  {
    title: "Chat App",
    description:
      "Real-time chat app with user presence, messaging, Zustand, and a ShadCN-powered modern UI.",
    image: chatAppImg,
    link: "https://github.com/Anuj7379/src",
  },
  {
    title: "College Complaint System",
    description:
      "Complaint submission/tracking app using React and Firebase with real-time admin updates.",
    image: complainImg,
    link: "https://campuscare-85a37.web.app/",
  },
  {
    title: "Smart Parking System",
    description:
      "IoT-powered parking system using Arduino and Firebase to monitor live slot status via web dashboard.",
    image: parkingImg,
    link: "https://github.com/shalluy/Parking-Management-System", // Add actual project link if available
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
        🚀 Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 max-w-7xl mx-auto px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between flex-grow p-6">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center text-sm font-medium px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
