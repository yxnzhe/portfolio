import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import profileImg from "../assets/images/profile.AVIF";

const Home = () => (
  <section className="flex flex-col md:flex-row justify-center items-center min-h-[80vh] px-4">
    <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 order-1">
      <img
        src={profileImg}
        alt="Philbert Heng profile"
        className="w-64 h-64 object-cover object-top rounded-full shadow-2xl border-8 border-teal-400"
      />
    </div>
    <div className="flex-1 flex flex-col justify-center items-start order-2">
      <p className="text-teal-400 mb-2 text-lg">Hi, my name is</p>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-2">
        <Typewriter
          words={["Philbert Heng"]}
          loop={0} // 0 means infinite loop
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={75}
          delaySpeed={1000}
        />
      </h1>
      <h2 className="text-3xl md:text-5xl text-gray-400 mb-6">
        I'm a Full-Stack Developer
      </h2>
      <p className="text-gray-400 max-w-xl mb-8">
        Welcome to my portfolio! I build modern web applications and AI-powered
        solutions. Explore my projects and get in touch.
      </p>
      <Link
        to="/projects"
        className="btn bg-teal-400 text-gray-900 px-6 py-3 rounded font-semibold shadow hover:bg-teal-300 transition"
      >
        View Projects
      </Link>
    </div>
  </section>
);

export default Home;
