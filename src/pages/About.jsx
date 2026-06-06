import ProfileImage from "../components/ProfileImage";
import Courses from "./Courses";
import Education from "./Education";
import { Link } from "react-scroll";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      <div className="bg-gradient-to-r from-slate-900 to-purple-950 w-full flex flex-col overflow-hidden">
        {/* this page is for about */}
        <div className="min-h-screen flex flex-col justify-center items-center ">
          {/* Header */}
          <h1 className="font-[poppins] text-5xl font-bold mb-10">
            <span className="text-yellow-300">About</span>{" "}
            <span className="text-white">Me</span>
          </h1>

          {/* main of the about page */}
          <div className="max-w-9/12 p-10 flex justify-between items-center gap-7">
            <div className="flex items-center justify-center w-full lg:w-auto p-4">
              <ProfileImage />
            </div>

            <div className="max-w-6xl p-5">
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-800">
                Building Full Stack with a strong product mindset.
              </h1>

              <p className="text-gray-400 font-[poppins] text-2xl p-6 ml-2">
                Full Stack Developer passionate about building modern, scalable,
                and user-friendly web applications. Skilled in Java, Spring
                Boot, React.js, JavaScript, HTML, CSS, Tailwind CSS, MySQL, and
                REST API development. Experienced in creating full-stack
                projects that combine responsive frontend interfaces with
                efficient backend systems. Continuously learning new
                technologies and improving problem-solving skills to deliver
                high-quality software solutions.
              </p>

              <div className="mt-5 h-14 flex justify-evenly items-center w-60">
                <Link
                  to="course"
                  smooth={true}
                  duration={800}
                  className="text-black text-xs font-[poppins] bg-cyan-400 pr-3 pl-3 pt-2 pb-2 font-semibold hover:rounded-full hover:transition-all hover:transform hover:scale-110 hover:duration-500 cursor-pointer bg-gradient-to-r hover:from-cyan-400 hover:to-blue-800 hover:ease-in-out hover:shadow-[0px_0px_10px_#06b6d4] rounded-md shadow-[0px_0px_10px_#06b6d4]"
                >
                  Courses
                </Link>

                <Link
                  to="education"
                  smooth={true}
                  duration={800}
                  className="text-black text-xs font-[poppins] bg-cyan-400 p-2 font-semibold hover:rounded-full hover:transition-all hover:transform hover:scale-110 hover:duration-500 cursor-pointer bg-gradient-to-r hover:from-cyan-400 hover:to-blue-800 hover:ease-in-out hover:shadow-[0px_0px_10px_#06b6d4] rounded-md shadow-[0px_0px_10px_#06b6d4]"
                >
                  🎓 Education
                </Link>
              </div>
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
