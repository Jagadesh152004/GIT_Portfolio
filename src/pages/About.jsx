import ProfileImage from "../components/ProfileImage";
import Education from "./Education";
import { Link } from "react-scroll";
const About = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-purple-950 w-full flex flex-col overflow-hidden">
      {/* this page is for about */}
      <div className="min-h-screen flex flex-col justify-center items-center ">
        {/* Header */}
          <h1 className="font-[poppins] text-5xl font-bold mb-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-sky-500">
            About
          </span>{" "}
          <span className="text-white">Me</span>
          </h1>

        {/* main of the about page */}
        <div className="max-w-9/12 p-10 flex justify-between items-center gap-7 border border-white" >
          
          <div className="flex items-center justify-center w-full lg:w-auto p-4">
            <ProfileImage />
          </div>

          <div className="max-w-4xl p-5 border border-white" >

            <p className="text-gray-400 font-[poppins] text-2xl p-6">
              Full Stack Developer passionate about building modern, scalable, and user-friendly web applications. Skilled in Java, Spring Boot, React.js, JavaScript, HTML, CSS, Tailwind CSS, MySQL, and REST API development. Experienced in creating full-stack projects that combine responsive frontend interfaces with efficient backend systems. Continuously learning new technologies and improving problem-solving skills to deliver high-quality software solutions.
            </p>
            
            <div className="mt-5 h-14 flex justify-start items-center gap-7 w-64">
              <a
                href="https://drive.google.com/file/d/1ncpFCRI3kwqMaxYzyTxJlHJSzCyEaIvs/view?usp=sharing"
                download
                target="_blank"
                className="border-1 border-cyan-400 text-cyan-400 text-xs font-[poppins] font-semibold p-2 hover:transition-all hover:transform hover:duration-500 hover:scale-110 hover:rounded-full hover:border-none bg-gradient-to-r hover:from-cyan-400 hover:to-blue-800 hover:ease-in-out hover:text-black hover:shadow-[0px_0px_10px_#06b6d4] cursor-pointer "
              >
                Download CV
              </a>
              <Link
                to="education"
                smooth={true}
                duration={800}
                className="text-black text-xs font-[poppins] bg-cyan-400 p-2 font-semibold hover:rounded-full hover:transition-all hover:transform hover:scale-110 hover:duration-500 cursor-pointer bg-gradient-to-r hover:from-cyan-400 hover:to-blue-800 hover:ease-in-out hover:shadow-[0px_0px_10px_#06b6d4]"
              >
                🎓 Education
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/*this is eduaction page*/}
      <div className="flex flex-col justify-center items-center min-h-screen w-full border border-white" >
        <Education />
      </div>
    </div>
  );
};

export default About;
