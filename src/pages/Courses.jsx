import React from "react";
import { Element } from "react-scroll";

const Courses = () => {

  const content = "w-md bg-black border-2 border-cyan-400 rounded-4xl p-8 text-center shadow-[0_0_25px_#22d3ee] transition-all hover:scale-110 duration-600 ease-in-out cursor-pointer hover:-translate-y-2 hover:shadow-[0_0_50px_#22d3ee]";

  const dot = "absolute left-1/2 top-10 w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee] -translate-x-1/2";

  return (
    <Element name="course">
      {/* Heading */}

      <div className="min-h-screen p-20">
        <h1 className="font-[poppins] font-bold text-5xl text-yellow-400 mb-20 text-center">
          Courses Completed
        </h1>

        {/* Container  */}
        <div className="min-w-5xl w-auto relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-cyan-400 shadow-[0_0_20px_#22d3ee] -translate-x-1/2 rounded-4xl"></div>

          {/* Item 1 */}
          <div className="relative flex justify-start mb-5 p-5">
            {/* Item1-Content */}
            <div
              className={content}
            >
              <h3 className="text-white font-bold text-xl">
                ☕ Java Programming
              </h3>

              <p className="text-amber-300 font-medium">
                Yugam Smart Academy | Duration : 1 Month
              </p>

              <p className="text-gray-400 mt-3">
                Gained a strong foundation in Core Java, Object-Oriented
                Programming (OOP), Collections Framework, Exception Handling,
                Multithreading, and JDBC.
              </p>

            </div>

            {/* Dot */}
            <div
              className={dot}
            ></div>
          </div>

          {/* Item-2 */}
          <div className="relative flex justify-end mt-2 mb-5 p-5">
            {/* Item-2 Content */}
            <div
              className={content}
            >
              <h3 className="text-white font-bold text-xl">
                ⚛️ React.js Development
              </h3>
              <p className="text-amber-300 font-medium">
                Accent Techno Soft | Duration : 1 Month
              </p>

              <p className="text-gray-400 mt-3">
                Learned React fundamentals including Components, Props, State
                Management, React Router, Hooks, Context API, and building
                responsive user interfaces.
              </p>
            </div>

            {/* Dot */}
            <div
              className={dot}
            ></div>
          </div>

          {/* Item-3 */}
          <div className="relative flex justify-start p-5">
            {/* Item-3 Content */}
            <div
              className={content}
            >
              <h3 className="text-white font-bold text-xl">
                🌐 MERN Stack Development
              </h3>

              <p className="text-amber-300 font-medium ">
                Yugam Smart Academy | Duration : 1 Month
              </p>

              <p className="text-gray-400 mt-3">
                Developed full-stack web applications using MongoDB, Express.js,
                React.js, and Node.js, including REST API integration and
                database management.
              </p>

            </div>

            {/* Dot */}
            <div
              className={dot}
            ></div>
          </div>

          {/* Item-4 */}

          <div className="relative flex justify-end p-5">
            {/* Item-4 Content */}
            <div
              className={content}
            >
              <h3 className="text-white font-bold text-xl">
                ☁️ Azure AI Fundamentals
              </h3>
              <p className="text-amber-300 font-medium ">
                ICT Academy under Infosys Foundation | Duration : 20 Days
              </p>
              <p className="text-gray-400 mt-3">
                Explored Artificial Intelligence concepts, Azure AI services,
                Machine Learning fundamentals, and cloud-based AI solutions
                using Microsoft Azure.
              </p>
            </div>

            {/* Dot */}
            <div
              className={dot}
            ></div>

          </div>

        </div>

      </div>
      
    </Element>
  );
};

export default Courses;
