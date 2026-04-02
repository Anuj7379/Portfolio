import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    items: [
      "HTML", "CSS", "JavaScript", "TypeScript",
      "React.js", "Next.js",
      "Tailwind CSS", "ShadCN",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js", "Express.js",
      "REST APIs", "JWT Authentication",
    ],
  },
  {
    title: "Database",
    items: [
      "MongoDB", "SQL", "Firebase",
    ],
  },
{
  title: "DevOps & Tools",
  items: [
    "Docker",
    "Kubernetes",
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
    "AWS (EC2, IAM, EBS)",
  ],
},
  {
    title: "Core CS",
    items: [
      "Data Structures", "Algorithms",
      "OOPs", "DBMS", "Operating Systems",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Problem Solving", "Teamwork",
      "Leadership", "Time Management",
    ],
  },
  {
    title: "Coding Profiles",
    items: [
      { name: "LeetCode", link: "https://leetcode.com/u/AnujSharma9565/" },
      { name: "GitHub", link: "https://github.com/Anuj7379" },
      { name: "TUF", link: "https://takeuforward.org/profile/DARL_SOUL" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#020617] py-24 px-6">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Skills
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Technologies and tools I work with
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#0f172a] border border-white/10 rounded-xl p-5 
                       hover:border-blue-500/40 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              {category.icon}
              <h3 className="text-lg font-semibold text-white">
                {category.title}
              </h3>
            </div>

            {/* Items */}
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, i) =>
                typeof skill === "string" ? (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-md 
                               bg-white/5 border border-white/10 
                               text-gray-300 hover:bg-white/10 transition"
                  >
                    {skill}
                  </span>
                ) : (
                  <a
                    key={i}
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2 py-1 rounded-md 
                               bg-blue-600/10 border border-blue-500/30 
                               text-blue-400 hover:bg-blue-600/20 transition"
                  >
                    {skill.name} ↗
                  </a>
                )
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;