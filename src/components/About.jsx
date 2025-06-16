import React from "react";
import profileImage from "../assets/profile.jpg"; // Use a square image for best results

const About = () => {
  return (
    <section
      id="about"
      className="py-24 min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl w-full px-6 grid md:grid-cols-2 items-center gap-12">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="Anuj Vishwakarma"
            className="w-56 h-56 object-cover rounded-full border-4 border-white dark:border-gray-700 shadow-lg hover:scale-105 transition"
          />
        </div>

        {/* About Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-center md:text-left text-gray-800 dark:text-white">
            👋 About Me
          </h2>

          <div className="bg-white/90 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            <p className="mb-5">
              I'm <strong>Anuj Vishwakarma</strong>, a Full Stack Developer and
              B.Tech CSE (AI & ML) student at <strong>KCCITM, Greater Noida</strong>.
            </p>
            <p className="mb-5">
              I enjoy building scalable web apps with modern tools like React,
              Node.js, Firebase, and MongoDB. I also love experimenting with IoT projects.
            </p>
            <p className="mb-5">
              Some of my top projects include a real-time Chat App, a Complaint Management System, and a Smart Parking System.
            </p>
            <p>
              I'm passionate about clean code, solving LeetCode challenges, and constantly improving through learning and building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
