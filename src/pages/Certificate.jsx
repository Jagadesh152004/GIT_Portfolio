import React from "react";
import { Element } from "react-scroll";
import Image from "../components/Image"

const Certificate = () => {

  const arrayImage = [
    { src: "/Certificate/imresizer-Infosys-JAVA-JAGADESH_.webp",
      alt: "Java Programming Fundamentals",
      name: "Java Programming Fundamentals"
    },
    { src: "/Certificate/imresizer-Infosys_AZURE AI _ JAGA.webp",
      alt: "Azure Ai",
      name:"Infosys - Azure AI"
    },
    { src: "/Certificate/Udemy-JAVA-JAGADESh .webp",
      alt: "Udemy JAVA",
      name: "Udemy - JAVA Programming Mastery"
    },
    { src: "/Certificate/imresizer-Java - Smart Yugam Academy - Copy.webp",
      alt: "Smart Yugam Java",
      name:"Smart Yugam - JAVA"
    },
    {
      src:"/Certificate/imresizer-Oracle_Jagadesh.webp",
      alt:"Oracle Ai",
      name:"Oracle - Cloud Infrastruture AI",
    },
    {
      src:"/Certificate/Simplilearn JAVA_Certificate.webp.webp",
      alt:"Excel",
      name:"SimpleLearn - JAVA",
    },
    {
      src:"/Certificate/introduction to java - sololearn.pdf.webp",
      alt:"SoloLearn JAVA",
      name:"SoloLearn - Introduction to Java"
    },
    {
      src:"/Certificate/Introduction of JS.webp",
      alt:"CoddyTeam",
      name:"CoddyTeam - Introduction to JS",
    },
    {
      src:"/Certificate/imresizer-JAGADESHWARAN_CHATGPT.webp",
      alt:"ChatGpt",
      name:"programming Hub - ChatGPT"
    },
    {
      src:"/Certificate/imresizer-JAGADESWARAN R_HTML.webp",
      alt:"HTML",
      name:"programming Hub - HTML_Basics"
    },
    {
      src:"/Certificate/imresizer-JAGADESWARAN R_HTML Advanced.webp",
      alt:"HTML Advanced",
      name:"programming Hub - HTML_Advanced"
    },
    {
      src:"/Certificate/JAVA Basics.webp",
      alt:"HTML",
      name:"programming Hub - JAVA_Basics"
    },
    {
      src:"/Certificate/imresizer-JAGADESHWARAN_GREAT LEARNING.webp",
      alt:"Excel",
      name:"Great_Learning - Excel"
    },
    {
      src:"/Certificate/Jagadeshwaran Intern certificate.webp",
      alt:"React.js Intern",
      name:"Accent Soft - React.js Intern"
    }
  ];

  return (

    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-purple-950 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-cyan-300 mt-20 ">Certificates</h1>

      <div className="flex justify-center gap-10 mt-20 flex-wrap">

        {
          arrayImage.map((data,index) => (
            <Image key={index} src={data.src} alt= {data.alt} name={data.name} />
          ))
        }

      </div>
    </div>
  );
};

export default Certificate;
