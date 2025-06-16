import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 w-full bg-gradient-to-br from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          📬 Let's Get In Touch
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="bg-white/90 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-3">
              🟢 Step 1: Say Hello
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
              Whether it's a project idea, a question, or just a “Hi!”, I’d love to hear from you.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base font-medium">
              📧 Email:{" "}
              <a
                href="mailto:as9737856@gmail.com"
                className="text-blue-600 hover:underline"
              >
                as9737856@gmail.com
              </a>
            </p>
            <p className="text-gray-800 dark:text-gray-200 mt-1">📞 Phone: 9565871983</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white/90 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-purple-700 dark:text-purple-400 mb-3">
              🟪 Step 2: Connect Online
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              Follow or message me on platforms I’m most active on.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/anujvishwakarma7379/"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Anuj7379"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                GitHub
              </a>
              <a
                href="https://leetcode.com/u/AnujSharma9565/"
                target="_blank"
                rel="noreferrer"
                className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-200 dark:hover:bg-orange-800 transition"
              >
                LeetCode
              </a>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white/90 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-3">
              ✅ Step 3: Let’s Build Together
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              I’m always open to new collaborations and freelance opportunities. Let’s build something amazing together!
            </p>
            <a
              href="#projects"
              className="inline-block mt-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium transition"
            >
              View My Projects →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
