import React from 'react'
import { Element } from 'react-scroll'


const Certificate = () => {
  return(

    <div className='min-h-screen bg-gradient-to-r from-slate-900 to-purple-950 flex flex-col items-center'>
      <h1 className="text-5xl font-bold text-cyan-300 mt-20 ">
        Certificates
      </h1>

    <div className='flex justify-center gap-8 border border-white mt-20 flex-wrap'>
      <div className="bg-[#0d1117] border border-cyan-400 rounded-3xl overflow-hidden shadow-[0_0_15px_#22d3ee] hover:shadow-[0_0_35px_#22d3ee] hover:-translate-y-2 transition-all duration-500 flex flex-col gap-y-4">
        <img
          src="/public/Certificate/Infosys-JAVA-JAGADESH_.jpg"
          alt="Java Programming Fundamentals"
          className="w-full h-80 object-cover rounded-4xl p-2"
          />
          <h1 className=" text-cyan-300 text-lg text-center mb-4">
            Java Programming Fundamentals
          </h1> 
      </div>

      {/*  */}
        <div className="bg-[#0d1117] border border-cyan-400 rounded-3xl overflow-hidden shadow-[0_0_15px_#22d3ee] hover:shadow-[0_0_35px_#22d3ee] hover:-translate-y-2 transition-all duration-500 flex flex-col gap-y-4">
        <img
          src="/public/Certificate/Udemy-JAVA-JAGADESh .jpg"
          alt="Udemy JAVA"
          className="w-full h-80 object-cover rounded-4xl p-2"
          />
          <h1 className=" text-cyan-300 text-lg text-center mb-4">
            Udemy - JAVA Programming Mastery 
          </h1> 
      </div>

      {/*  */}
      <div className="bg-[#0d1117] border border-cyan-400 rounded-3xl overflow-hidden shadow-[0_0_15px_#22d3ee] hover:shadow-[0_0_35px_#22d3ee] 
      hover:-translate-y-2 transition-all duration-500 flex flex-col gap-y-4">
        <img
          src="/public/Certificate/introduction to java - sololearn.pdf.jpg"
          alt="Udemy JAVA"
          className="w-full h-80 object-cover rounded-4xl p-2"
          />
          <h1 className=" text-cyan-300 text-lg text-center mb-4">
            SoloLearn - Introduction to Java
          </h1> 
      </div>

      {/*  */}
      <div className="bg-[#0d1117] border border-cyan-400 rounded-3xl overflow-hidden shadow-[0_0_15px_#22d3ee] hover:shadow-[0_0_35px_#22d3ee] 
      hover:-translate-y-2 transition-all duration-500 flex flex-col gap-y-4">
        <img
          src="/public/Certificate/Intern certificate.jpg"
          alt="React.js Intern"
          className="w-full h-80 object-cover rounded-4xl p-2"
          />
          <h1 className=" text-cyan-300 text-lg text-center mb-4">
            Accent Soft - React.js Intern
          </h1> 
      </div>

      {/*  */}
      <div className="bg-[#0d1117] border border-cyan-400 rounded-3xl overflow-hidden shadow-[0_0_15px_#22d3ee] hover:shadow-[0_0_35px_#22d3ee] 
      hover:-translate-y-2 transition-all duration-500 flex flex-col gap-y-4">
        <img
          src="/public/Certificate/Introduction of JS.jpg"
          alt="React.js Intern"
          className="w-full h-80 object-cover rounded-4xl p-2"
          />
          <h1 className=" text-cyan-300 text-lg text-center mb-4">
            CoddyTeam - Introduction to JS
          </h1> 
      </div>

    </div>
      
    </div>

  )
}


export default Certificate