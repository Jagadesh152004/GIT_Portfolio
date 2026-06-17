import { FaGithub } from "react-icons/fa6"
import {Link} from "react-router-dom"
import Footer from "../components/Footer"


const Project = () => {

const card = "p-5 flex flex-col justify-center items-center bg-sky-950 transition-all duration-500 ease-in-out border-2 border-cyan-400 rounded-2xl max-w-120 shadow-[0_0_15px_#22d3ee]"   

const cardButton = "px-3 py-2 rounded-3xl bg-zinc-800 text-zinc-300"

  return (
  <div className="min-h-screen w-full bg-slate-900 flex flex-col justify-center items-center">
      {/* Background Video Container */}
      <div className="mt-20 mb-10">
      <h1 className="text-5xl text-cyan-400 font-bold">
        <span className="text-white">My</span> 
        {" "}Project</h1>
      </div>  
    <div className="flex flex-wrap justify-center items-center mt-10 mb-20 gap-20">


      {/* PortFolio project */}

          <div className={card}>
          <img
          src="/Project_Images/PortFolio.webp"
          alt="portfolio"
          loading="lazy"
          className="w-110 h-60 object-cover object-center rounded-4xl"
          />
            <h1 className="text-start text-2xl font-semibold font-mono text-white mt-4">Portfolio Website</h1>
            <p className="text-zinc-400 text-lg font-serif mt-4 max-w-md">A modern and responsive personal 
              portfolio website designed to showcase my skills, projects, and achievements.
            </p>
            <div className="flex justify-center gap-4 mt-5" >
            <span className={cardButton}>
              React.js
            </span>
            <span className={cardButton}>
              JavaScript
            </span>
            <span className={cardButton}>
              Tailwind css
            </span>
            </div>
            <div className="flex w-100 p-2 mt-4 gap-3">
              <a className="flex justify-center gap-2 text-white text-ms bg-zinc-700 w-45 p-2 rounded-2xl"
              href="https://github.com/Jagadesh152004/GIT_Portfolio.git"
              target="_blank" 
              >
                <FaGithub className="mt-1"/> Code
              </a>
              <a
              className="flex justify-center gap-2 text-white text-ms bg-blue-500 w-45 p-2 rounded-2xl" 
              href="https://jaga-portfolio-profile.vercel.app/"
              target="_blank">
                Live Demo
              </a>
            </div>
          </div>

          {/* Final Project */}

          <div className={card}>
          <img
          src="/Project_Images/FINAL_YEAR.webp"
          alt=""
          loading="lazy"
          className="w-110 h-60 object-cover object-center rounded-4xl"
          />
            <h1 className="text-start text-2xl font-semibold font-mono text-white mt-4">
              AI healthcare assistant</h1>
            <p className="text-zinc-400 text-lg font-serif mt-4 max-w-md">Published a research paper on Ai 
              Healthcare assistant that integrates medical image diagnosis, prescription, and sleep
              monitoring into a unified platform.
            </p>
            <div className="flex justify-center gap-4 mt-5" >
            <span className={cardButton}>
              Python
            </span>
            <span className={cardButton}>
              Flask
            </span>
            <span className={cardButton}>
              Rest API
            </span>
            </div>
            <div className="flex w-100 p-2 mt-4 gap-3">
              <a className="flex justify-center gap-2 text-white text-ms bg-zinc-700 w-45 p-2 rounded-2xl"
              href=""
              target="_blank" 
              >
                <FaGithub className="mt-1"/> Code
              </a>
              <a
              className="flex justify-center gap-2 text-white text-ms bg-blue-500 w-45 p-2 rounded-2xl" 
              href="https://multimedicalgpt.netlify.app"
              target="_blank">
                Live Demo
              </a>
            </div>
          </div>

          {/* JIO FAQ */}

          <div className={card}>
              <img
              src="/Project_Images/JIO_FAQ.png"
              alt=""
              loading="lazy"
              className="w-110 h-60 object-cover object-center rounded-4xl"
              />
            <h1 className="text-start text-2xl font-semibold font-mono text-white mt-4">
             Azure JIO FAQ 
            </h1>
            <p className="text-zinc-400 text-lg font-serif mt-4 max-w-md">
              Jio Assistant is a lightweight desktop chatbot
              It sends user questions to an Azure Question Answering project
              and displays responses
            </p>
            <div className="flex justify-center gap-4 mt-5" >
            <span className={cardButton}>
              Python
            </span>
            <span className={cardButton}>
              PyQt6
            </span>
            <span className={cardButton}>
              Azure
            </span>
            </div>
            <div className="flex w-100 p-2 mt-4 gap-3">
              <a className="flex justify-center gap-2 text-white text-ms bg-zinc-700 w-45 p-2 rounded-2xl"
              href="https://github.com/Jagadesh152004/Git_JIO-FAQ.git"
              target="_blank" 
              >
                <FaGithub className="mt-1"/> Code
              </a>
              <s
              className="flex justify-center gap-2 text-white text-ms bg-blue-500 w-45 p-2 rounded-2xl"
              >
                Live Demo
              </s>
            </div>
          </div>


          {/* ChatGpt Otimiztion */}

          <div className={card}>
              <img
              src="/Project_Images/Azure_token.png"
              alt=""
              loading="lazy"
              className="w-110 h-60 object-cover object-center rounded-4xl"
              />
            <h1 className="text-start text-2xl font-semibold font-mono text-white mt-4">
             AZURE TOKEN OPTIMIZATION
            </h1>
            <p className="text-zinc-400 text-lg font-serif mt-4 max-w-md">
              The project innovation is to design on token 
              optimization – reducing unnecessary token usage when interacting 
              with GPT models. 
            </p>
            <div className="flex justify-center gap-4 mt-5" >
            <span className={cardButton}>
              React.js
            </span>
            <span className={cardButton}>
              Node.js
            </span>
            <span className={cardButton}>
              Express
            </span>
            <span className={cardButton}>
              ChatGpt API
            </span>
            </div>
            <div className="flex w-100 p-2 mt-4 gap-3">
              <a className="flex justify-center gap-2 text-white text-ms bg-zinc-700 w-45 p-2 rounded-2xl"
              href="https://github.com/Jagadesh152004/GIT_Chat-GPT.git"
              target="_blank" 
              >
                <FaGithub className="mt-1"/> Code
              </a>
              <s
              className="flex justify-center gap-2 text-white text-ms bg-blue-500 w-45 p-2 rounded-2xl">
                Live Demo
              </s>
            </div>
          </div>

          {/* Course Registration */}

          <div className={card}>
              <img
              src="/Project_Images/Course Register.png"
              alt="Course"
              loading="lazy"
              className="w-110 h-60 object-cover object-center rounded-4xl"
              />
            <h1 className="text-start text-2xl font-semibold font-mono text-white mt-4">
             Course Registration System 
            </h1>
            <p className="text-zinc-400 text-lg font-serif mt-4 max-w-md">
              A full-stack Course Registration System that allows students to 
              view available courses , enrolled courses and register for courses .
            </p>
            <div className="flex justify-center gap-4 mt-5" >
            <span className={cardButton}>
              React.js
            </span>
            <span className={cardButton}>
              SpringBoot
            </span>
            <span className={cardButton}>
              MySQL
            </span>
            </div>
            <div className="flex w-100 p-2 mt-4 gap-3">
              <a className="flex justify-center gap-2 text-white text-ms bg-zinc-700 w-45 p-2 rounded-2xl"
              href="https://github.com/Jagadesh152004/Course-Register-System.git"
              target="_blank" 
              >
                <FaGithub className="mt-1"/> Code
              </a>
              <a
              href="https://course-register-system.vercel.app/"
              target="_blank"
              className="flex justify-center gap-2 text-white text-ms bg-blue-500 w-45 p-2 rounded-2xl"
              >
                Live Demo
              </a>
            </div>
          </div>
          
          {/* recipe Finder */}

          <div className={card}>
              <img
              src="/Project_Images/Recipe_Finder.webp"
              alt=""
              loading="lazy"
              className="w-110 h-60 object-cover object-center rounded-4xl"
              />
            <h1 className="text-start text-2xl font-semibold font-mono text-white mt-4">
             Recipe Finder
            </h1>
            <p className="text-zinc-400 text-lg font-serif mt-4 max-w-md">
              A modern, responsive React web application that helps you 
              discover and explore recipes from around the world. 
            </p>
            <div className="flex justify-center gap-4 mt-5" >
            <span className={cardButton}>
              React.js
            </span>
            <span className={cardButton}>
              Tailwind CSS
            </span>
            <span className={cardButton}>
              JavaScript
            </span>
            <span className={cardButton}>
              MealAPI
            </span>
            </div>
            <div className="flex w-100 p-2 mt-4 gap-3">
              <a className="flex justify-center gap-2 text-white text-ms bg-zinc-700 w-45 p-2 rounded-2xl"
              href="https://github.com/Jagadesh152004/Food-Recipe-App.git"
              target="_blank" 
              >
                <FaGithub className="mt-1"/> Code
              </a>
              <a
              className="flex justify-center gap-2 text-white text-ms bg-blue-500 w-45 p-2 rounded-2xl" 
              href="https://food-recipe-app-one-topaz.vercel.app/"
              target="_blank">
                Live Demo
              </a>
            </div>
          </div>

          {/* TODO APP */}

          <div className={card}>
              <img
              src="/Project_Images/TODO.webp"
              alt=""
              loading="lazy"
              className="w-110 h-60 object-cover object-center rounded-4xl"
              />
            <h1 className="text-start text-2xl font-semibold font-mono text-white mt-4">
             TODO APP
            </h1>
            <p className="text-zinc-400 text-lg font-serif mt-4 max-w-md">
              A dynamic Todo application developed with React.js that allows users to 
              add, update, and delete tasks efficiently. Built using reusable components.
            </p>
            <div className="flex justify-center gap-4 mt-5" >
            <span className={cardButton}>
              React.js
            </span>
            <span className={cardButton}>
              Tailwind CSS
            </span>
            <span className={cardButton}>
              JavaScript
            </span>
            </div>
            <div className="flex w-100 p-2 mt-4 gap-3">
              <a className="flex justify-center gap-2 text-white text-ms bg-zinc-700 w-45 p-2 rounded-2xl"
              href="https://github.com/Jagadesh152004/TODO_REACT.git"
              target="_blank" 
              >
                <FaGithub className="mt-1"/> Code
              </a>
              <a
              className="flex justify-center gap-2 text-white text-ms bg-blue-500 w-45 p-2 rounded-2xl" 
              href="https://todo-react-dhlvikyg4-jagadeshwaran-s-projects.vercel.app/"
              target="_blank">
                Live Demo
              </a>
            </div>
          </div>

          {/* Calculatoe */}

          <div className={card}>
              <img
              src="/Project_Images/Caculator.webp"
              alt=""
              loading="lazy"
              className="w-110 h-60 object-cover object-center rounded-4xl"
              />
            <h1 className="text-start text-2xl font-semibold font-mono text-white mt-4">
             Calculator App
            </h1>
            <p className="text-zinc-400 text-lg font-serif mt-4 max-w-md">
              A responsive calculator application ,it performs basic arithmetic operations with a 
              clean and user-friendly, DOM manipulation 
              and event handling skills.
            </p>
            <div className="flex justify-center gap-4 mt-5" >
            <span className={cardButton}>
              HTML
            </span>
            <span className={cardButton}>
              CSS
            </span>
            <span className={cardButton}>
              JavaScript
            </span>
            </div>
            <div className="flex w-100 p-2 mt-4 gap-3">
              <a className="flex justify-center gap-2 text-white text-ms bg-zinc-700 w-45 p-2 rounded-2xl"
              href="https://github.com/Jagadesh152004/Calculator.git"
              target="_blank" 
              >
                <FaGithub className="mt-1"/> Code
              </a>
              <a
              className="flex justify-center gap-2 text-white text-ms bg-blue-500 w-45 p-2 rounded-2xl" 
              href="https://jagadesh152004.github.io/Calculator/"
              target="_blank">
                Live Demo
              </a>
            </div>
          </div>          

    </div>
    <div className="w-full mt-15">
      <Footer />
    </div>
  </div>
  )
}

export default Project