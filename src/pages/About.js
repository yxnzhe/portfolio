import React from "react";

const skills = [
  "React",
  "Node.js",
  "Vue.js",
  "Supabase",
  "FastAPI",
  "AWS",
  "Azure",
  "GCP",
  "JavaScript",
  "TypeScript",
  "Python",
  "WordPress",
];

const About = () => (
  <section className="container mx-auto px-4 py-16 min-h-[80vh] flex flex-col items-center">
    <h2 className="text-3xl font-bold text-teal-400 mb-6">About Me</h2>
    <div className="max-w-2xl text-gray-300 text-lg mb-8 text-center">
      <p className="mb-4">
        I am a dedicated Full Stack Developer with experience in designing,
        developing, and deploying scalable web applications and cloud solutions.
        My background includes collaborating with international teams,
        delivering high-quality software, and adapting quickly to new
        technologies and project requirements.
      </p>
      <p className="mb-4">
        My technical expertise covers both frontend and backend development,
        cloud platforms (AWS, Azure, GCP), and AI integration. I am passionate
        about continuous learning, problem-solving, and contributing to
        impactful projects.
      </p>
      <p>
        Outside of work, I enjoy exploring advancements in AI and have a strong interest in finance and business-related fields. I also enjoy connecting with people from diverse backgrounds.
      </p>
    </div>
    <div className="w-full max-w-2xl">
      <h3 className="text-xl font-semibold text-teal-300 mb-2">Key Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-gray-800 text-teal-200 px-3 py-1 rounded-full text-sm font-medium shadow"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default About;
