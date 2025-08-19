import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  return (
    <footer id="contact" className="bg-black text-white py-16 relative">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-4xl font-extrabold text-orange-500 mb-6">
            CONTACT ME
          </h2>
          <form
            action="https://formspree.io/f/xzzvqvey"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-zinc-900 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-zinc-900 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 bg-zinc-900 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-lg">📍 Greater Noida, Uttar Pradesh, India</p>
          <p className="mb-4 text-lg">📞 +91 95658 71983</p>
          <p className="mb-6 text-lg">✉️ as9737856@gmail.com</p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-4">
            <a
              href="https://github.com/Anuj7379"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-orange-500 text-black hover:bg-orange-600 transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/in/anujvishwakarma7379"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-orange-500 text-black hover:bg-orange-600 transition"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://leetcode.com/u/AnujSharma9565/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-orange-500 text-black hover:bg-orange-600 transition"
            >
              <SiLeetcode size={22} />
            </a>
            <a
              href="mailto:as9737856@gmail.com"
              className="p-3 rounded-full bg-orange-500 text-black hover:bg-orange-600 transition"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Left & Right Strips */}
      <div className="absolute top-0 left-0 h-full w-3 bg-orange-500"></div>
      <div className="absolute top-0 right-0 h-full w-3 bg-orange-500"></div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-zinc-400 text-sm">
        © {new Date().getFullYear()} Anuj Vishwakarma | All Rights Reserved
      </div>
    </footer>
  );
}
