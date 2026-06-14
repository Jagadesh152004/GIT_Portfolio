
import {HiRocketLaunch,HiUserGroup,HiLightBulb} from "react-icons/hi2";
import { FaCode } from "react-icons/fa";
import ProfileImage from "../components/ProfileImage";
import Courses from "./Courses";
import Education from "./Education";
import { Link } from "react-scroll";
import { Element } from "react-scroll";
import { FaBoltLightning } from "react-icons/fa6";

const About = () => {
  return (
    <Element name="about">
        {/* GoBack Button */}
        <Link
          to="about"
          smooth={true}
          duration={800}
          className="fixed bottom-6 right-6 z-50 bg-white/10 backdrop-blur-md border-2 border-cyan-400 text-cyan-400 px-4 py-2 rounded-full shadow-[0_0_15px_#22d3ee] hover:shadow-[0_0_30px_#22d3ee]
                    hover:scale-110 transition-all duration-300 font-medium">
          ← Go Back
        </Link>

      <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-900 w-full flex flex-col overflow-hidden">

        {/* this page is for about */}
        <div className=" flex flex-col justify-center items-center mt-20 gap-y-2">
          {/* Header */}
          <h1 className="font-[poppins] text-5xl font-bold">
            <span className="text-cyan-300">About</span>{" "}
            <span className="text-cyan-300">Me</span>
          </h1>

          {/* main of the about page */}
          <div className="mt-20 flex justify-between items-center gap-x-4">

            <div className="flex flex-col max-w-6xl">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-stone-400 max-w-3xl">
                Building Full Stack with a strong product mindset.
              </h1>

              <div className="text-gray-500 font-[poppins] text-lg p-6 ml-3 flex flex-col gap-y-4 max-w-4xl">
                <span className="">
                  I'm an aspiring Java Full Stack Developer passionate about building modern web applications that solve real-world problems.
                </span>
                <span>
                  I enjoy creating responsive and user-friendly interfaces with React.js, JavaScript, Tailwind CSS, HTML, and CSS, while developing 
                  robust backend systems using Java, Spring Boot, MySQL, and REST APIs.
                </span>
                <span>
                  My journey in software development started with curiosity about how applications work behind the scenes. Since then, I've been 
                  continuously learning, building projects, and strengthening my problem-solving skills through hands-on development.
                </span>
                <span>
                  I believe in writing clean, maintainable code and creating applications that provide both a great user experience and reliable 
                  performance.
                </span>
                <span className="text-center text-white font-mono max-w-2xl bg-cyan-950 p-3 rounded-3xl text-sm mt-4">
                  "Every project I build is an opportunity to learn, improve, and move one step closer to becoming a better software developer."
                </span>
              </div>
              
            </div>

            <div className="flex justify-start items-start h-[600px] w-[700px] p-2 " >

              <div className=" flex flex-wrap gap-x-6 gap-y-4 w-[700px] h-[450px] p-2">
{/* Code */}
              <div className="flex flex-col bg-cyan-950 text-ms text-zinc-400 font-medium p-4 w-80 h-50 space-y-5 rounded-2xl" >

                <FaCode className="text-cyan-400 text-3xl bg-cyan-800 h-10 w-10 rounded-md p-2"/>

                <h1 className="text-white">Clean Code</h1>

                <p>Writing maintainable,scalable code that stands the test of time</p>

              </div>
{/* Performance */}
              <div className="flex flex-col bg-cyan-950 text-ms text-zinc-400 font-medium p-4 w-80 h-50 space-y-5 rounded-2xl" >

                <HiRocketLaunch className="text-cyan-400 text-3xl bg-cyan-800 h-10 w-10 rounded-md p-2"/>

                <h1 className="text-white">Performance</h1>

                <p>Optimizing for speed and delivering lightining fast user experience</p>

              </div>
{/* Colloboration */}
              <div className="flex flex-col bg-cyan-950 text-ms text-zinc-400 font-medium p-4 w-80 h-50 space-y-5 rounded-2xl" >

                <HiUserGroup className="text-cyan-400 text-3xl bg-cyan-800 h-10 w-10 rounded-md p-2"/>

                <h1 className="text-white">Colloboration</h1>

                <p>Working closely with teams to bring ideas to future</p>

              </div>
{/* Innovation */}
              <div className="flex flex-col bg-cyan-950 text-ms text-zinc-400 font-medium p-4 w-80 h-50 space-y-5 rounded-2xl" >

                <HiLightBulb className="text-cyan-400 text-3xl bg-cyan-800 h-10 w-10 rounded-md p-2"/>

                <h1 className="text-white">Innovation</h1>

                <p>Staying ahead with the latest technologies and best practices.</p>

              </div>
              
              </div>
            </div>
          </div>
          {/* Button For Education & Courses */}
            <div className="h-14 flex justify-center items-center">
              <div className="space-x-10 ">
                <Link
                  to="education"
                  smooth={true}
                  duration={800}
                  className="text-black text-xs font-[poppins] bg-cyan-400 p-2 font-semibold hover:rounded-full hover:transition-all hover:transform hover:scale-110 hover:duration-500 cursor-pointer bg-gradient-to-r hover:from-cyan-400 hover:to-blue-800 hover:ease-in-out hover:shadow-[0px_0px_10px_#06b6d4] rounded-md shadow-[0px_0px_10px_#06b6d4]"
                >
                  🎓 Education
                </Link>

                <Link
                  to="course"
                  smooth={true}
                  duration={800}
                  className="text-black text-xs font-[poppins] bg-cyan-400 pr-3 pl-3 pt-2 pb-2 font-semibold hover:rounded-full hover:transition-all hover:transform hover:scale-110 hover:duration-500 cursor-pointer bg-gradient-to-r hover:from-cyan-400 hover:to-blue-800 hover:ease-in-out hover:shadow-[0px_0px_10px_#06b6d4] rounded-md shadow-[0px_0px_10px_#06b6d4]"
                >
                  Courses
                </Link>
                </div>
            </div>
        </div>

        {/*this is eduaction page*/}
        <div className="flex flex-col justify-center items-center min-h-screen w-full mt-20">
          <Education />
        </div>

        {/* Course Page */}
        <div className="flex flex-col justify-center items-center min-h-screen w-full mt-20">
          <Courses />
        </div>
      </div>
    </Element>
  );
};

export default About;
