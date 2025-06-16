import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Footer component with social links
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-2">
          <a
            href="https://github.com/yxnzhe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/philbertheng"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:philberthengyz@gmail.com"
            className="hover:text-teal-400 text-2xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Philbert Heng. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
