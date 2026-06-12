import React from "react";
import { Link } from "react-router-dom";

const ServiceFooter = () => {
  return (
    <div className="mt-20 py-16 text-center border-t border-cyan-400 bg-indigo-950">
      <h2 className="text-4xl font-bold text-cyan-400 mb-4">
        Let's Build Something Amazing Together 🚀
      </h2>

      <p className="text-gray-300 max-w-2xl mx-auto mb-8">
        Passionate about creating responsive web applications, REST APIs, and
        full-stack solutions using React.js, Spring Boot, Java, and MySQL.
      </p>

      <div className="flex justify-center gap-5">
        <Link
          to="/contact"
          className="
      px-6 py-3
      bg-cyan-400
      text-black
      font-semibold
      rounded-xl
      hover:scale-105
      transition-all
      duration-300
      shadow-[0_0_20px_#06b6d4]
      "
        >
          Contact Me
        </Link>

        <Link
          to="/resume"
          className="
      px-6 py-3
      border
      border-cyan-400
      text-cyan-400
      font-semibold
      rounded-xl
      hover:bg-cyan-400
      hover:text-black
      transition-all
      duration-300
      "
        >
          View Resume
        </Link>
      </div>
    </div>
  );
};

export default ServiceFooter;
