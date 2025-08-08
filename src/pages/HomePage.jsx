import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const HomePage = () => {
  const icon =
    "hover:text-white text-cyan-400 transition-all duration-300 ease-in-out";

  return (
    <div className="flex items-center justify-center w-full min-h-screen mx-auto overflow-x-hidden bg-black bg-cover">

      <div className="border border-zinc-700 rounded-3xl w-auto transition-all duration-700 transform  hover:scale-110 hover:shadow-cyan-500 shadow-md p-4 flex justify-evenly space-x-10" >

        <div className="flex-col items-start p-4 space-y-1">
          <h3 className="text-white text-xl font-[poppins] font-semibold">
            Hello, It's Me
          </h3>
          <h1 className="text-white font-[poppins] font-semibold text-4xl">
            Jagadeshwaran
          </h1>
          <h3 className="text-white text-xl font-[poppins] font-semibold mt-2.5">
            And I'm a{" "}
            <span className="text-cyan-400 font-[poppins] font-bold text-xl">
              Software Developer
            </span>
          </h3>
          <p className="max-w-2xl mt-2 text-gray-300">
            I'm passionate about building real-world applications using Java,
            Spring Boot, and React.js. Currently learning and creating
            full-stack projects to grow as a software developer.
          </p>
          <div className="px-10">
            <div className="flex p-2 mt-5 space-x-10 text-3xl min-w-auto">
              <a
                href="https://github.com/Jagadesh152004"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit my github"
                className={icon}
              >
                <FaGithub className="transition duration-300 border rounded-full border-cyan-400 hover:bg-cyan-400 hover:text-black hover:animate-pulse" />
              </a>
              <a
                href="http://linkedin.com/in/jagadeswaran-r-0389a02a0"
                target="_blank"
                className={icon}
                rel="noopener noreferrer"
                title="visit my linkedin"
              >
                <FaLinkedin className="hover:bg-cyan-400 hover:text-black border rounded-full p-0.5 hover:animate-pulse transition duration-300" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jagadeshwaran152004@gmail.com"
                target="_blank"
                className={icon}
                rel="noopener noreferrer"
                title="Send me an email"
              >
                <SiGmail className="p-1 transition duration-300 border rounded-full hover:bg-cyan-400 hover:text-black hover:animate-pulse" />
              </a>
            </div>
          </div>
          <div className="p-2 mt-5 space-x-4">
            <button className="bg-cyan-400 border rounded-full px-4 py-2 text-xs font-[poppins] font-semibold cursor-pointer hover:bg-cyan-600 active:inset-1 relative">
              <a
                href="https://drive.google.com/file/d/1ncpFCRI3kwqMaxYzyTxJlHJSzCyEaIvs/view?usp=sharing"
                download
                target="_blank "
              >
                Download CV
              </a>
            </button>
            <Link
              to="/about"
              className="bg-cyan-400 border rounded-full px-4 py-2 text-xs font-[poppins] font-semibold cursor-pointer hover:bg-cyan-600"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src="/public/img/myphoto.png" alt="jagadeshwaran" className="w-64 h-72 object-cover rounded-full shadow-[0_0_40px_#22d3ee] border-4 border-cyan-400 overflow-hidden"/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
