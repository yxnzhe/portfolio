import React from "react";
import mblogo from "../assets/images/mercedes-benz-9-logo-svg-vector.svg";
import mashagLogo from "../assets/images/Fend AI Security Logo.jpeg";
import kambyanLogo from "../assets/images/Arinaa Kambyan.webp";

const experiences = [
  {
    company: "Mercedes-Benz Malaysia",
    logo: mblogo,
    role: "Full Stack Developer",
    period: "Jun 2023 - Present",
    status: "Permanent",
    description: [
      "Develop and maintain web applications using React, Node.js, and cloud services (AWS, Azure).",
      "Collaborate with cross-functional teams to deliver scalable solutions and new features.",
      "Participate in code reviews, system design, and agile ceremonies.",
      "Work with international teams, demonstrating adaptability and a global mindset.",
    ],
  },
  {
    company: "Mashag Technology (Fend AI Security)",
    logo: mashagLogo,
    role: "Full Stack Junior Developer",
    period: "Nov 2022 - Jun 2023",
    status: "Freelance",
    description: [
      "Developed company landing page using WordPress and hosted on AWS.",
      "Built web application frontend from scratch with React, Vue.js, and Supabase.",
      "Deployed trained AI models in the backend using FastAPI.",
    ],
  },
  {
    company: "Kambyan Network Sdn. Bhd.",
    logo: kambyanLogo,
    role: "Full Stack Software Engineer",
    period: "Aug 2022 - Jun 2023",
    status: "Intern",
    description: [
      "Designed and developed complete web applications from scratch.",
      "Managed databases and deployed solutions on Google Cloud Platform (GCP).",
      "Assisted in managing and guiding team members.",
      "Collaborated with different teams to achieve project goals.",
    ],
  },
];

const Experience = () => (
  <section className="container mx-auto px-4 py-16 min-h-[80vh]">
    <h2 className="text-3xl font-bold text-teal-400 mb-8">
      Working Experience
    </h2>
    <div className="space-y-8">
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="bg-gray-900 rounded-lg shadow p-6 flex flex-col md:flex-row md:items-center md:gap-6"
        >
          {exp.logo && (
            <img
              src={exp.logo}
              alt={exp.company + " logo"}
              className="w-16 h-16 object-contain mb-4 md:mb-0"
            />
          )}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div>
                <div className="text-lg font-semibold text-teal-400">
                  {exp.role} @ {exp.company}
                </div>
                {exp.status && (
                  <div className="text-xs text-gray-400 mt-1">{exp.status}</div>
                )}
              </div>
              <div className="text-gray-400 text-sm mt-1 md:mt-0">
                {exp.period}
              </div>
            </div>
            <ul className="text-gray-300 list-disc list-inside space-y-1 mt-2">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
