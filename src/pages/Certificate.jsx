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

      <Image src="/Certificate/Infosys-JAVA-JAGADESH_.webp" alt="Java Programming Fundamentals" name="Java Programming Fundamentals"/>

      {/* Infosys azure */}

      <Image src="/Certificate/Infosys_AZURE AI _ JAGA.webp" alt="Azure Ai" name="Infosys - Azure AI"/>

      {/* Udemy JAVA */}

      <Image src="/Certificate/Udemy-JAVA-JAGADESh .webp" alt="Udemy JAVA" name="Udemy - JAVA Programming Mastery"/>

      {/*Smart Yugam Java*/}

      <Image src="/Certificate/Java - Smart Yugam Academy.webp" alt="Smart Yugam Java" name="Smart Yugam Academy - Java"/>

      {/* Oracle Ai */}

      <Image src="/Certificate/Oracle_Jagadesh.webp" alt="Oracle Ai" name="Oracle - Cloud Infrastruture AI"/>

      {/*SimpleLearn - Java*/}

      <Image src="/Certificate/Simplilearn JAVA_Certificate.webp.webp" alt="Excel" name="SimpleLearn - JAVA"/>

      {/* SoloLearn JAVA */}

      <Image src="/Certificate/introduction to java - sololearn.pdf.webp" alt="SoloLearn JAVA" name="SoloLearn - Introduction to Java"/>
      
      {/* CoddyTeam JS */}

      <Image src="/Certificate/Introduction of JS.webp" alt="CoddyTeam" name="CoddyTeam - Introduction to JS"/>

      {/*  programming Hub - ChatGPT*/}

      <Image src="/Certificate/JAGADESHWARAN_CHATGPT.webp" alt="ChatGpt" name="programming Hub - ChatGPT"/>

      {/*  programming Hub - Html*/}

      <Image src="/Certificate/JAGADESWARAN R_HTML.webp" alt="HTML" name="programming Hub - HTML_Basics"/>

      {/*  programming Hub - Html Advanced*/}

      <Image src="/Certificate/JAGADESWARAN R_HTML Advanced.webp" alt="HTML Advanced" name="programming Hub - HTML_Advanced"/>


      {/*  programming Hub - java Basics*/}

      <Image src="/Certificate/JAVA Basics.webp" alt="HTML" name="programming Hub - JAVA_Basics"/>
      
      {/*Great Learning*/}

      <Image src="/Certificate/JAGADESHWARAN_GREAT LEARNING.webp" alt="Excel" name="Great_Learning - Excel"/>
      
      {/* Accent Intern */}

      <Image src="/Certificate/Jagadeshwaran Intern certificate.webp" alt="React.js Intern" name="Accent Soft - React.js Intern"/>


    </div>
      
    </div>

  )
}


export default Certificate