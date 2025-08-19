import React from "react";
import { motion } from "framer-motion";
import { Code2, Users, Wrench, Trophy } from "lucide-react";

const skills = [
  {
    title: "Technical Skills",
    icon: <Code2 className="w-6 h-6 text-blue-500" />,
    items: [
      "HTML", "CSS", "JavaScript", "C", "Java", "React.js",
      "Node.js", "Express.js", "MongoDB", "SQL",
      "Firebase",  "Tailwind CSS", "ShadCN",
    ],
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-6 h-6 text-purple-500" />,
    items: [
      "Problem Solving", "Critical Thinking", "Teamwork",
      "Leadership", "Work Ethic", "Time Management", "Adaptability",
    ],
  },
  {
    title: "Tools",
    icon: <Wrench className="w-6 h-6 text-pink-500" />,
    items: ["Git & GitHub", "VS Code", "Postman", "Firebase Console"],
  },
  {
    title: "Problem-Solving Platforms",
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    items: [
      { name: "LeetCode", link: "https://leetcode.com/u/AnujSharma9565/" },
      { name: "GitHub", link: "https://github.com/Anuj7379" },
      { name: "TUF", link: "https://takeuforward.org/profile/DARL_SOUL" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500"
        >
          ⚡ Skills Dashboard
        </motion.h2>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-6 shadow-sm hover:shadow-lg transition"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) =>
                  typeof skill === "string" ? (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-md bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:scale-105 transition"
                    >
                      {skill}
                    </span>
                  ) : (
                    <a
                      key={i}
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 text-xs rounded-md bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400 hover:scale-105 transition"
                    >
                      {skill.name} ↗
                    </a>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
