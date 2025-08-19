import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg"; // replace with your image

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-white flex flex-col lg:flex-row items-center justify-center px-10 py-28 gap-16"
    >
      {/* Left Vertical Strip */}
      <div className="absolute left-0 top-0 h-full w-[6px] bg-gradient-to-b from-orange-500 via-orange-400 to-transparent rounded-r-lg" />

      {/* Right Vertical Strip */}
      <div className="absolute right-0 top-0 h-full w-[6px] bg-gradient-to-b from-orange-500 via-orange-400 to-transparent rounded-l-lg" />

      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <div className="absolute -top-6 -left-6 w-40 h-40 border-4 border-orange-500 rounded-full blur-xl opacity-40" />
        <img
          src={profileImage}
          alt="profile"
          className="w-[350px] rounded-lg shadow-lg border-4 border-gray-800"
        />
      </motion.div>

      {/* Right Side - Content */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-lg"
      >
        <h3 className="text-orange-500 text-5xl italic uppercase font-bold mb-3">
          About Me
        </h3>
        <h2 className="text-4xl font-bold mb-6">
          A Passionate Computer Science Engineer 
        </h2>

        {/* Intro */}
        <p className="text-gray-400 leading-relaxed mb-4">
          Hi, I’m <span className="text-white font-semibold">Anuj Vishwakarma</span>, 
          currently pursuing my B.Tech in Computer Science Engineering  
          at KCC Institute of Technology and Management. I’m passionate about 
          blending creativity with technology to design solutions that have 
          real-world impact.
        </p>

        {/* Professional Summary */}
        <p className="text-gray-400 leading-relaxed mb-4">
          With skills in <span className="text-orange-400">Full-Stack Development</span>, 
  , and 
          <span className="text-orange-400"> Data Structures & Algorithms</span>, 
          I enjoy building scalable applications and tackling complex challenges. 
          My projects, including a <span className="text-white font-medium">Real-Time Chat App</span> 
          and a <span className="text-white font-medium">College Complaint Management System</span>, 
          reflect my commitment to practical problem-solving.
        </p>

        {/* Achievements */}
        <p className="text-gray-400 leading-relaxed mb-4">
          I have completed certifications in 
          <span className="text-orange-400"> Full Stack Development</span>, 
           and 
          <span className="text-orange-400"> JavaScript Algorithms</span>, 
          constantly upgrading my skill set to keep pace with evolving technologies.  
        </p>

      
      </motion.div>
    </section>
  );
};

export default About;
