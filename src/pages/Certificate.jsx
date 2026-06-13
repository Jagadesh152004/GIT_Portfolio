import React from 'react'
import { Element } from 'react-scroll'
import Image from '../components/Image'


const Certificate = () => {
  return(

    <div className='min-h-screen bg-gradient-to-r from-slate-900 to-purple-950 flex flex-col items-center'>
      <h1 className="text-5xl font-bold text-cyan-300 mt-20 ">
        Certificates
      </h1>

    <div className='flex justify-center gap-10 border border-white mt-20 flex-wrap'>

      {/* Infosys */}

      <Image src="/public/Certificate/Infosys-JAVA-JAGADESH_.jpg" alt="Java Programming Fundamentals" name="Java Programming Fundamentals"/>

      {/* Infosys azure */}

      <Image src="/public/Certificate/Infosys_AZURE AI _ JAGA.jpg" alt="Azure Ai" name="Infosys - Azure AI"/>

      {/* Udemy JAVA */}

      <Image src="/public/Certificate/Udemy-JAVA-JAGADESh .jpg" alt="Udemy JAVA" name="Udemy - JAVA Programming Mastery"/>

      {/*Smart Yugam Java*/}

      <Image src="/public/Certificate/Java - Smart Yugam Academy.jpg" alt="Smart Yugam Java" name="Smart Yugam Academy - Java"/>

      {/* Oracle Ai */}

      <Image src="/public/Certificate/orcale Jagadeshwaran.jpg" alt="Oracle Ai" name="Oracle - Cloud Infrastruture AI"/>

      {/*SimpleLearn - Java*/}

      <Image src="/public/Certificate/Simplilearn JAVA_Certificate.jpg" alt="Excel" name="SimpleLearn - JAVA"/>

      {/* SoloLearn JAVA */}

      <Image src="/public/Certificate/introduction to java - sololearn.pdf.jpg" alt="SoloLearn JAVA" name="SoloLearn - Introduction to Java"/>
      
      {/* CoddyTeam JS */}

      <Image src="/public/Certificate/Introduction of JS.jpg" alt="CoddyTeam" name="CoddyTeam - Introduction to JS"/>

      {/*  programming Hub - ChatGPT*/}

      <Image src="/public/Certificate/JAGADESHWARAN_CHATGPT.jpg" alt="ChatGpt" name="programming Hub - ChatGPT"/>

      {/*  programming Hub - Html*/}

      <Image src="/public/Certificate/JAGADESWARAN R_HTML.jpg" alt="HTML" name="programming Hub - HTML_Basics"/>

      {/*  programming Hub - Html Advanced*/}

      <Image src="/public/Certificate/JAGADESWARAN R_HTML Advanced.jpg" alt="HTML Advanced" name="programming Hub - HTML_Advanced"/>


      {/*  programming Hub - java Basics*/}

      <Image src="/public/Certificate/JAVA Basics.jpg" alt="HTML" name="programming Hub - JAVA_Basics"/>
      
      {/*Great Learning*/}

      <Image src="/public/Certificate/JAGADESHWARAN_GREAT LEARNING.jpg" alt="Excel" name="Great_Learning - Excel"/>
      
      {/* Accent Intern */}

      <Image src="/public/Certificate/Intern certificate.jpg" alt="React.js Intern" name="Accent Soft - React.js Intern"/>


    </div>
      
    </div>

  )
}


export default Certificate