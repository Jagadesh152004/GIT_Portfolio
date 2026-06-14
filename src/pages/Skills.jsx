import { FaJava, FaReact } from "react-icons/fa";
import { SiCss3, SiFirebase, SiGit, SiGithub, SiGithubpages, SiHtml5, SiIntellijidea, SiJavascript, SiMongodb, SiMysql, SiNetflix, SiNetlify, SiNodedotjs, SiPostgresql, SiPostman, SiRailway, SiRender, SiSpringboot, SiTailwindcss, SiVercel, SiVsco, SiVscodium } from "react-icons/si";
import Footer from "../components/Footer"

const Skills = () => {
  return (
  <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-900 flex flex-col justify-center items-center">

      <h1 className="text-5xl font-bold text-cyan-300 mt-10">
        My Skills
      </h1>

    <div className="flex flex-col items-center mt-15 text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-stone-400 font-bold font-mono gap-y-4">
      <h1 className="px-2">Technologies and tools I use to build modern,</h1>
      <h1 className="w-[700px] rounded-2xl px-2">scalable, and user-friendly applications.</h1>
    </div>

    <div className="flex justify-center items-center flex-wrap mt-15 p-3 gap-x-10 gap-y-10">

{/* Front End */}
      <div className="flex flex-col items-center border-2 border-cyan-300 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-800 p-3 shadow-[0_0_15px_#22d3ee] 
       duration-700 hover:scale-105 hover:-translate-y-5 transition-all ease-in-out">

        <h1 className="text-3xl text-center text-white font-medium font-mono">
          Frontend
        </h1>
        <p className="text-center text-slate-400 text-lg mt-3 mb-5 max-w-lg">
          Building responsive, interactive, and modern user interfaces using React, JavaScript, and Tailwind CSS.
        </p>
{/* front Icons */}
        <div className="flex justify-center flex-wrap w-110 p-2 gap-3">
          <div className="flex text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl px-3 py-2 ">
            <FaReact className="text-cyan-500 mr-2 mt-1"/> React.js
          </div>
          <div className="flex text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl px-3 py-2 ">
            <SiJavascript className="text-amber-300 mr-2 mt-1"/> JavaScript
          </div>
          <div className="flex text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl px-3 py-2 ">
            <SiHtml5 className="text-amber-600 mr-2 mt-1"/> HTML
          </div>
          <div className="flex text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl px-3 py-2 ">
            <SiCss3 className="text-purple-800 mr-2 mt-1"/> CSS
          </div>
          <div className="flex text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl px-3 py-2 ">
            <SiTailwindcss className="text-cyan-600 mr-2 mt-1"/> Tailwind CSS
          </div>                                    
        </div>
        
      </div>

{/* Back End */}
      <div className="flex flex-col items-center border-2 border-cyan-300 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-800 p-3 shadow-[0_0_15px_#22d3ee]
      duration-700 hover:scale-105 hover:-translate-y-5 transition-all ease-in-out">

        <h1 className="text-3xl text-center text-white font-medium font-mono">
          Backend
        </h1>
        <p className="text-center text-slate-400 text-lg mt-3 max-w-lg">
          Developing scalable server-side applications and REST APIs using Java, Spring Boot, and Node.js.
        </p>
{/* back Icons */}
        <div className="flex justify-center flex-wrap w-110 p-2 mt-5 gap-3">
        
          <div className="flex text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl px-3 py-2 ">
            <FaJava className="text-orange-600 mr-2 mt-1"/> JAVA
          </div>
          <div className="flex text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl px-3 py-2 ">
            <SiSpringboot className="text-green-500 mr-2 mt-1"/> SpringBoot
          </div>
          <div className="flex text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl px-3 py-2 ">
            <SiNodedotjs className="text-green-500 mr-2 mt-1"/> Node.js
          </div>
          <div className="flex text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl px-3 py-2 ">
            Rest APIs
          </div>                                    
        
        </div>
        
      </div>

{/* Database*/}
      <div className=" flex flex-col items-center border-2 border-cyan-300 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-800 p-3 shadow-[0_0_15px_#22d3ee]
      duration-700 hover:scale-105 hover:-translate-y-5 transition-all ease-in-out">

        <h1 className="text-3xl text-center text-white font-medium font-mono">
          Database
        </h1>
        <p className="text-center text-slate-400 text-lg mt-3 max-w-lg">
          Managing structured and NoSQL databases for efficient data storage, retrieval, and application performance.
        </p>
{/* Data Icons */}
        <div className="flex justify-center flex-wrap w-110 p-2 mt-5 gap-3">
        
          <div className="flex items-center text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl px-3 gap-2">
            <SiMysql className="text-4xl text-blue-600"/> MySQL
          </div>
          <div className="flex items-center text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl gap-2 px-3 py-2">
            <SiPostgresql className="text-green-500"/> PostgreSQl
          </div>
          <div className="flex items-center text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl gap-2 px-3 py-2">
            <SiMongodb className="text-green-500"/> MongoDB
          </div>                                 
        </div>
        
      </div>

{/* Development Tools */}
      <div className=" flex flex-col items-center border-2 border-cyan-300 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-800 p-3 shadow-[0_0_15px_#22d3ee]
      duration-700 hover:scale-105 hover:-translate-y-5 transition-all ease-in-out">

        <h1 className="text-3xl text-center text-white font-medium font-mono">
          Development Tools
        </h1>
        <p className="text-center text-slate-400 text-lg mt-3 max-w-lg">
          Using industry-standard tools for version control, API testing, debugging, and efficient software development workflows.
        </p>
{/* Tools Icons */}
        <div className="flex justify-center flex-wrap w-110 p-2 mt-5 gap-3">
        
          <div className="flex items-center text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl px-3 gap-2">
            <SiGit className="text-4xl text-orange-500"/> Git
          </div>
          <div className="flex items-center text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl gap-2 px-3 py-2">
            <SiGithub className="text-white"/> GitHub
          </div>
          <div className="flex items-center text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl gap-2 px-3 py-2">
            <SiPostman className="text-orange-500"/> Postman
          </div>                                 
          <div className="flex items-center text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl gap-2 px-3 py-2">
            <SiVsco className="text-orange-500"/> VS Code
          </div>                                 
          <div className="flex items-center text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl gap-2 px-3 py-2">
            <SiIntellijidea className="text-blue-500"/> IntelliJ IDEA
          </div>                                 
          <div className="flex items-center text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl gap-2 px-3 py-2">
            <SiMysql className="text-blue-500"/> MySQL Workbench
          </div>                                 
        </div>
        
      </div>

{/*Deployment & Hosting*/}
      <div className=" flex flex-col items-center border-2 border-cyan-300 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-800 p-3 shadow-[0_0_15px_#22d3ee]
      duration-700 hover:scale-105 hover:-translate-y-5 transition-all ease-in-out">

        <h1 className="text-3xl text-center text-white font-medium font-mono">
          Deployment & Hosting
        </h1>
        <p className="text-center text-slate-400 text-lg mt-3 max-w-lg">
          Deploying and managing web applications on modern cloud platforms with scalable hosting solutions.
        </p>
{/* Hosting Icons */}
        <div className="flex justify-center flex-wrap w-110 p-2 mt-5 gap-3">
        
          <div className="flex items-center text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl px-3 gap-2">
            <SiVercel className="text-2xl text-white"/> Vercel
          </div>
          <div className="flex items-center text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl gap-2 px-3">
            <SiGithubpages className="text-5xl text-orange-500"/> GitHub Pages
          </div>
          <div className="flex items-center text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl gap-2 px-3 py-2">
            <SiRender className="text-white"/> Render
          </div>                                 
          <div className="flex items-center text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl gap-2 px-3 py-2">
            <SiRailway className="text-white"/> Railway
          </div>                                 
          <div className="flex items-center text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl gap-2 px-3 py-2">
            <SiFirebase className="text-yellow-400"/> Firebase
          </div>                                 
          <div className="flex items-center text-slate-400 text-xl font-medium border border-slate-400 rounded-3xl gap-2 px-3 py-2">
            <SiNetlify className="text-blue-400"/> Netlify
          </div>                                 
        
        </div>
        
      </div>            

    </div>
<div className="w-full mt-10">
    <Footer />
</div>
  </div>
  );
};

export default Skills;
