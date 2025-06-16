import React from "react";

const skills = {
  "Technical Skills": {
    description:
      "Languages, frameworks, databases, and cloud platforms I use to build scalable apps.",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "C",
      "Java",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "Firebase",
      "AWS (IAM, EC2, EBS)",
      "Tailwind CSS",
      "ShadCN",
    ],
  },
  "Soft Skills": {
    description:
      "Traits that help me work effectively in teams, solve problems, and grow as a developer.",
    items: [
      "Problem Solving",
      "Critical Thinking",
      "Teamwork",
      "Leadership",
      "Work Ethic",
      "Time Management",
      "Adaptability",
    ],
  },
  Tools: {
    description:
      "Supporting tools and technologies that enhance my development workflow.",
    items: ["Git & GitHub", "VS Code", "Postman", "Firebase Console"],
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          🛠️ My Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {Object.entries(skills).map(([category, data], idx) => (
            <div
              key={idx}
              className="bg-white/90 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-700 dark:text-blue-400">
                {category}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                {data.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {data.items.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
