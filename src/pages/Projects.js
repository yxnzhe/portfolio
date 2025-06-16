import React from "react";
import { FaGithub, FaExternalLinkAlt, FaRobot, FaBolt, FaUser, FaCalendarAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "This personal portfolio website, built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "GitHub Pages"],
    github: "https://github.com/yxnzhe/portfolio",
    demo: "#",
    icon: <FaGithub className="text-teal-400 text-2xl" />,
  },
  {
    title: "Resume AI",
    description:
      "AI-powered system for resume parsing, candidate matching, and real-time HR chatbot queries using Python and GPT-4o.",
    tech: ["Python", "Nexus GPT-4o"],
    icon: <FaRobot className="text-teal-400 text-2xl" />,
  },
  {
    title: "Event Check-In Tool",
    description:
      "PowerApps app for fast event check-ins with QR code scanning and automated compliance reporting.",
    tech: ["Microsoft Power Apps", "Power Automate"],
    icon: <FaCalendarAlt className="text-teal-400 text-2xl" />,
  },
  {
    title: "Staff Profiling Tool",
    description:
      "Self-service PowerApps and Power BI tool for staff to manage profiles, skills, and projects with analytics for management.",
    tech: ["Microsoft Power Apps", "Power Automate", "Power BI"],
    icon: <FaUser className="text-teal-400 text-2xl" />,
  },
  {
    title: "Elec Tricks",
    description: "A web system to help owners and tenants calculate monthly electric usage and bills. Built with PHP, Ajax, JavaScript, Bootstrap, CSS, and HTML.",
    tech: ["PHP", "Ajax", "JavaScript", "Bootstrap", "CSS", "HTML"],
    github: "https://github.com/yxnzhe/electric-bill-calculator",
    demo: "https://yxnzhe.github.io/electric-bill-calculator/#/calculator",
    icon: <FaBolt className="text-teal-400 text-2xl" />
  }
];

const Projects = () => (
  <section className="container mx-auto px-4 py-16 min-h-[80vh]" id="projects">
    <h2 className="text-3xl font-bold text-teal-400 mb-8">Projects</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="bg-gray-900 rounded-lg shadow p-6 flex flex-col"
        >
          <div className="mb-4 flex items-center gap-2">
            {project.icon}
            <h3 className="text-xl font-semibold text-gray-100">
              {project.title}
            </h3>
          </div>
          <p className="text-gray-400 flex-grow mb-4">{project.description}</p>
          <ul className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <li
                key={t}
                className="bg-gray-800 text-teal-300 px-2 py-1 rounded text-xs"
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="flex space-x-4 mt-auto">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400"
                aria-label="Demo"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
