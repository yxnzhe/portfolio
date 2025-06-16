import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

// Navbar component with responsive menu and smooth scrolling
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setNavOpen(false);
  }, [location]);

  // Add shadow to navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Experience", to: "/experience" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-opacity-80 ${
        scrolled ? "shadow-lg bg-gray-900" : "bg-gray-900"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-2xl font-bold text-teal-400">
          Philbert Heng
        </Link>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-gray-200 hover:text-teal-400 transition-colors duration-200 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Mobile menu icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-gray-200 focus:outline-none text-2xl"
            aria-label="Toggle menu"
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {navOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95 px-4 pt-2 pb-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-gray-200 hover:text-teal-400 text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
