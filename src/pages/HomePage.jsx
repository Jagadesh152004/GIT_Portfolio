import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import { BiLogoLinkedin } from "react-icons/bi";
import { PiGithubLogoFill } from "react-icons/pi";
import ProfileImage from "../components/ProfileImage";

const HomePage = () => {

  const icon =
    "p-0.5 text-cyan-400 border-2 border-cyan-400 rounded-full transition-all duration-500 transform hover:bg-cyan-400 hover:text-black hover:animate-pulse hover:scale-125 shadow-[0_0_10px_#06b6d4]";

  return (
    <div className="flex items-center justify-center w-full min-h-screen overflow-x-hidden bg-gradient-to-r from-slate-900 to-slate-900 bg-cover bg-center bg-no-repeat">

      {/* Main Container */}
      <div className="flex items-center justify-around overflow-x-hidden p-10 w-auto min-w-5xl">

        {/* Content and Link */}
        <div className="flex-col p-4 space-y-2 text-left items-center w-auto min-w-3xl">
          <h3 className="text-white lg:text-4xl text-3xl font-[poppins]">
            Hello <span className="font-semibold text-white">,</span>
          </h3>
          <h1 className="text-white font-[poppins] font-semibold lg:text-5xl text-4xl mt-3 ml-6">
            <span className=" lg:text-4xl text-3xl font-normal">I'm</span> Jagadeshwaran
          </h1>
          <h1 className="text-cyan-400 font-[poppins] font-semibold lg:text-4xl text-3xl mt-4">
            Full Stack Developer
          </h1>
          <p className="text-neutral-400 font-[poppins] text-xl max-w-2xl w-auto ml-4 p-4 ">
            I'm passionate about building real-world web applications using Java, SpringBoot and 
             React.js. Currently Learning and creating FullStack projects to grow as a 
             Software Developer
          </p>
          <div className="flex justify-center lg:justify-start">
            <div className="flex w-56 gap-10 p-4 text-4xl justify-evenly">
              <a
                href="https://github.com/Jagadesh152004"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit my github"
              >
                <PiGithubLogoFill className={icon}/>
              </a>
              <a
                href="https://www.linkedin.com/in/jaga15/"
                target="_blank"
                rel="noopener noreferrer"
                title="visit my linkedin"
              >
                <BiLogoLinkedin className={icon} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jagadeshwaran152004@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Send me an email"
              >
                <SiGmail className={icon} />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center h-16 lg:justify-start mt-5">
            <div className="flex items-center justify-center w-64 gap-7">
              <Link
              to="/resume"
                className="bg-cyan-400 px-4 py-2 text-xs font-[poppins] font-semibold cursor-pointer bg-gradient-to-r hover:from-cyan-400  hover:to-blue-600 gap-1 flex items-center justify-center hover:transform hover:transition-all hover:scale-110 hover:rounded-full hover:duration-700 shadow-[0_0_10px_#06b6d4]"
              >
                My Resume
              </Link>
              <Link
                to="/about"
                className="text-cyan-400 hover:text-black border-1 hover:rounded-full px-4 py-2 text-xs font-[poppins] font-semibold cursor-pointer bg-gradient-to-r hover:from-cyan-400 hover:to-blue-600 hover:transform hover:transition-all hover:scale-110 hover:duration-700 hover:shadow-[0_0_10px_#06b6d4] hover:border-none">
                Read More
              </Link>
            </div>
          </div>
        </div>
        {/* Image profile */}
        <div className="flex items-center justify-center w-auto p-4 max-w-3xl">
            <ProfileImage />
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;