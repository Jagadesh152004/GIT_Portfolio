import { Link } from "react-router-dom";
import ServiceFooter from "../components/ServiceFooter";
import Footer from "../components/Footer";
const Service = () => {

const card = "p-5 flex flex-col bg-gradient-to-r from-purple-950 to-slate-900 transition-all duration-500 ease-in-out hover:-translate-y-5 hover:scale-105 border-2 border-cyan-400 rounded-2xl max-w-90 shadow-[0_0_10px_#22d3ee] hover:shadow-[0_0_50px_#22d3ee]"   

const cardButton = "px-3 py-2 rounded-3xl bg-cyan-500/20 border border-cyan-400 text-cyan-300"

  return (
<div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-900">
      
      {/* Heading */}
      <h1 className="text-cyan-200 text-5xl text-center font-bold p-10">My Services</h1>

{/* Container*/}
    <div className="flex flex-col justify-center items-center mt-2 p-5">

        <h1 className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-orange-500 to-red-600 text-3xl font-bold">
          What Can I Do
        </h1>
        
        <p className="text-stone-400 text-xl text-center font-medium p-3 max-w-3xl mt-2 ">I build modern, responsive, and user-friendly web applications 
          while continuously learning and 
          applying the latest technologies in full-stack development.
        </p>

{/* Card Container */}
        <div className="p-5 flex justify-center flex-wrap gap-10 mt-15">
        {/* Frontend Card */}
          <div className={card}>
            <h1 className="text-4xl text-center">🌐</h1>
            <h1 className="text-start text-2xl font-semibold text-yellow-400 mt-4">Frontend Development</h1>
            <p className="text-zinc-400 text-lg font-serif mt-4 max-w-md">Create responsive, interactive, and modern user interfaces with 
              clean designs and smooth user experiences.
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

          </div>

          {/* BackEnd  */}
          <div className={card}>

            <h1 className="text-4xl text-center">⚙️</h1>
            <h1 className="text-start text-2xl font-semibold text-yellow-400 mt-4">Backend Development</h1>
            <p className="text-zinc-400 text-lg font-serif mt-4 max-w-md">Develop secure and scalable backend applications with RESTful APIs,
              business logic, and database integration.
            </p>

            <div className="flex justify-center gap-4 mt-5">
            <span className={cardButton}>
              Java
            </span>
            <span className={cardButton}>
              Spring Boot
            </span>
            <span className={cardButton}>
              REST APIs
            </span>
            </div>

          </div>

          {/* Database Design */}
            <div className={card}>

              <h1 className="text-4xl text-center">🗄️</h1>
              <h1 className="text-start text-2xl font-semibold text-yellow-400 mt-4">Database Design</h1>
              <p className="text-zinc-400 text-lg font-serif mt-4 max-w-md">Design and manage efficient databases, create optimized queries, and
                implement reliable data storage solutions.
              </p>

              <div className="flex justify-center flex-wrap gap-4 mt-5">
              <span className={cardButton}>
                MySQL
              </span>
              <span className={cardButton}>
                PostgreSQl
              </span>
              <span className={cardButton}>
                MongoDB
              </span>
              </div>

          </div>

          {/* Full Stack Web Development */}
            <div className={card}>

              <h1 className="text-4xl text-center">🚀</h1>
              <h1 className="text-start text-2xl font-semibold text-yellow-400 mt-4">Full Stack Web Development</h1>
              <p className="text-zinc-400 text-lg font-serif mt-4 max-w-md">Build complete web applications from frontend to backend, 
                integrating APIs,databases, and authentication systems.</p>

              <div className="flex justify-center flex-wrap gap-4 mt-5">
              <span className={cardButton}>
                React.js
              </span>
              <span className={cardButton}>
                Java
              </span>
              <span className={cardButton}>
                SpringBoot
              </span>
              <span className={cardButton}>
                MySQL
              </span>
              </div>

          </div>

          {/* Responsive Web Design */}
            <div className={card}>

              <h1 className="text-4xl text-center">📱</h1>
              <h1 className="text-start text-2xl font-semibold text-yellow-400 mt-4">Responsive Web Design</h1>
              <p className="text-zinc-400 text-lg font-serif mt-4 max-w-md">Develop websites that work seamlessly across desktops, tablets, 
                and mobile devices.</p>

              <div className="flex justify-center flex-wrap gap-4 mt-5">
              <span className={cardButton}>
                HTML
              </span>
              <span className={cardButton}>
                JavaScript
              </span>
              <span className={cardButton}>
                CSS
              </span>
              </div>

          </div>

        </div>
    </div>

<ServiceFooter />
<Footer />
</div>
  );
};

export default Service;
