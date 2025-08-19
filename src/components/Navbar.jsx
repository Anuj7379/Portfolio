import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", to: "home" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "About", to: "about" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-gray-800 shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight">
          <span className="text-white">Cod</span>
          <span className="text-orange-500">er</span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-300">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={link.name === "Contact" ? -20 : -80}
                spy={true}
                activeClass="text-orange-500"
                className="relative cursor-pointer hover:text-orange-500 transition group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Btn */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-200 text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-6 space-y-4 font-medium text-gray-200 bg-black/95 border-t border-gray-700">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={link.name === "Contact" ? -20 : -80}
                onClick={() => setIsOpen(false)}
                className="block cursor-pointer hover:text-orange-500 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
