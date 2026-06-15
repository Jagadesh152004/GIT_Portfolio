import { Link } from "react-scroll";
import { TiArrowDown } from "react-icons/ti";
import PubCertificate from "../components/PubCertificate";
import Footer from "../components/Footer";



const Publication = () => {

  //map method for list rendering

const dataArray = ["EfficientNet-B0","Transfer Learning","AdamW Optimizer","CNN","LLM","RAG","NER","CDSS"]
const dataDevelop = ["Python","Flask","PyTorch","JSON","REST API"]

  return (
    <div className="min-h-screen bg-gradient-to-r  from-slate-900 to-slate-900  flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-cyan-300 mt-10">
        📄 Publication
      </h1>

      <p className="text-3xl font-bold text-amber-300 mt-20">
        Published Research Project – 2026
      </p>
      <div className="flex flex-col">

        {/* Container for cards */}
        <div className="flex justify-center items-center p-5 mt-10 gap-8">
          <div className="flex flex-col border-3 border-cyan-400 p-3 bg-linear-to-r from-indigo-900 to-indigo-900 rounded-2xl shadow-[0_0_20px_#22d3ee]">
            <h1 className="text-center text-3xl font-bold text-white border-b-5 border-y-amber-300 rounded-b-xs p-2 ">
              Publication Details
            </h1>
            <h1 className="mt-4 text-2xl font-semibold text-amber-400">
              Title:
              <span className="ml-2 text-2xl text-white font-[poppins]">
                AI-Powered Multimodal Healthcare Assistant
              </span>
            </h1>
            <span className="text-2xl text-amber-50 ml-35 font-semibold font-[poppins] mt-1">
              for Diagnosing and Monitoring
            </span>

            <h1 className="text-center text-2xl font-bold text-yellow-400 mt-5">
              Team Members :
            </h1>
            <p className="text-center mt-2 text-stone-300 text-xl font-semibold"> 
              Jagadeshwaran R
            </p>
            <p className="text-center mt-2 text-stone-300 text-xl font-semibold"> 
              Vignesh S
            </p>
            <p className="text-center mt-2 text-stone-300 text-xl font-semibold"> 
              Suthirvelan P
            </p>
            <p className="text-center mt-2 text-stone-300 text-xl font-semibold"> 
              Vetriselvan T
            </p>

            <h1 className="mt-4 text-2xl font-semibold text-yellow-400">
              Institution:{" "}
              <span className="text-white">Kathir College of Engineering</span>
            </h1>
            <h1 className="mt-4 text-2xl font-semibold text-yellow-400">
              Department:{" "}
              <span className="text-white">
                Artificial Intelligence and Data Science
              </span>
            </h1>

          <div className="flex justify-center">
            <div className="bg-zinc-800 mt-5 max-w-md rounded-2xl p-4 border-2 border-cyan-400 flex flex-col gap-y-2">
              <div className="flex justify-center">
                <h1 className="text-center text-white text-2xl font-semibold mb-4 border-b-4 border-b-yellow-400 rounded-b-xs w-60 pb-3">
                  Conference Details
                </h1>
              </div>
              <h1 className="text-xl font-semibold text-yellow-400">
                Conference:{" "}
                <span className="text-white text-xl">ICA6NT 2026</span>
              </h1>
              <h1 className="text-xl font-semibold text-yellow-400">
                Institution:{" "}
                <span className="text-white text-xl">
                  Velammal Institute of Technology
                </span>
              </h1>
              <h1 className="text-xl font-semibold text-yellow-400">
                Date: <span className="text-white text-xl">March 2026</span>
              </h1>
            </div>
          </div>
        </div>

          <div className="h-[680px] ml-4">
            <div className="flex flex-col gap-y-10">
              <div className="flex flex-col border-3 border-cyan-400 p-3 bg-linear-to-r from-indigo-900 to-indigo-900 rounded-2xl max-w-xl shadow-[0_0_20px_#22d3ee]">
                <h1 className="text-yellow-300 text-2xl font-bold font-serif mb-3 border-b-4 max-w-55 rounded-b-xs pb-3">
                  📝 Description
                </h1>
                <span className="text-xl text-stone-300 font-semibold font-sans ">
                  Published a research paper on an AI-powered healthcare
                </span>
                <span className="text-xl text-stone-300 font-semibold font-sans ">
                  assistant that integrates medical image diagnosis,
                </span>
                <span className="text-xl text-stone-300 font-semibold font-sans ">
                  symptom analysis, prescription generation, and sleep
                </span>
                <span className="text-xl text-stone-300 font-semibold font-sans ">
                  monitoring into a unified platform. The system Artificial
                </span>
                <span className="text-xl text-stone-300 font-semibold font-sans ">
                  Intelligence, Machine Learning,and Generative AI
                </span>
                <span className="text-xl text-stone-300 font-semibold font-sans ">
                  technologies to support accurate healthcare decision-making
                </span>
                <span className="text-xl text-stone-300 font-semibold font-sans ">
                </span>
              </div>

              <div className="flex flex-col border-3 border-cyan-400 p-3 bg-linear-to-r from-indigo-900 to-indigo-900 rounded-2xl max-w-xl text-2xl shadow-[0_0_20px_#22d3ee]">
                <h1 className="text-yellow-300 text-2xl font-bold font-serif mb-3 border-b-4 max-w-70 rounded-b-xs pb-3 ">
                  🎯 Research Objective
                </h1>

                <span className="text-xl text-stone-300 font-semibold font-sans  ">
                  To develop an intelligent healthcare assistant capable of
                </span>
                <span className="text-xl text-stone-300 font-semibold font-sans  ">
                  analyzing medical images, understanding patient 
                </span>
                <span className="text-xl text-stone-300 font-semibold font-sans  ">
                  symptoms, generating healthcare recommendations.The 
                </span>
                <span className="text-xl text-stone-300 font-semibold font-sans  ">
                  objective is to combine multiple AI-driven healthcare 
                </span>
                <span className="text-xl text-stone-300 font-semibold font-sans  ">
                  services into a single platform that improves diagnostic efficiency.
                </span>
              </div>

              <div className="flex justify-center gap-4">
                <a
                  href="/public/reports/PROJECT REPORT.pdf"
                  target="_blank"
                  target="_blank"
                  className="bg-gradient-to-r from-blue-700 to-cyan-500 px-3 py-4 
              rounded-lg text-sm font-semibold
              hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out 
              shadow-[0_0_15px_#22d3ee] border-cyan-300 border"
                >
                  View Project Report
                </a>

                <a
                  href="https://multimedicalgpt.netlify.app"
                  target="_blank"
                  className=" py-4 pr-3 pl-2 text-black bg-green-600 text-sm rounded-lg font-semibold
              hover:scale-105 transition-all duration-300 shadow-[0_0_15px_#4ade80] border border-green-400 "
                >
                  🚀 Live Project
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Teck Stack Section */}
        <div className="flex flex-col justify-center mt-10 mb-20 p-2 gap-y-6">
          {/* Technology */}
          <div className="border-2 border-yellow-400 rounded-xl p-4 flex bg-gradient-to-r from-stone-text-stone-300 to-zinc-800 w-[1100px] shadow-[0_0_15px_#facc15]">
            <h1 className="text-2xl font-semibold text-white mt-1.5">
              Technologies Used :
            </h1>

            <div className="flex justify-center gap-4 ml-4">

              {dataArray.map((item,index) => (
              
              <section key={index} className="border-2 border-cyan-400 rounded-3xl px-2 py-2 text-center bg-stone-text-stone-300 text-cyan-400">
                {item}
              </section>
              )
              
              )};

            </div>
          </div>

          {/* Development */}
          <div className="border-2 border-yellow-400 rounded-xl p-4 flex bg-gradient-to-r from-stone-text-stone-300 to-zinc-800 max-w-[800px] shadow-[0_0_15px_#facc15]">
            <h1 className="text-2xl font-semibold text-white mt-1.5">
              Development Used : 
            </h1>

            <div className="flex justify-center gap-7 ml-4">
            {dataDevelop.map( (list,index) => 
            (
              <section key={index} className="border-2 border-cyan-400 rounded-3xl px-3 py-2 text-center bg-stone-text-stone-300 text-cyan-400">
                {list}
              </section>
            )
            )};  
            
            </div>
          
          </div>
        
        </div>

        {/* Navigation Button certificate */}
        <div className="flex justify-center p-2">
          <Link
            to="certificate"
            smooth={true}
            duration={800}
            className="px-5 py-3 bg-yellow-400 text-black rounded-xl font-semibold
                    cursor-pointer transition-all duration-700 transform animate-bounce 
                    flex gap-2 hover:rounded-3xl hover:duration-100 shadow-[0_0_20px_#f59e0b]"
          >
            🏆 View Certificate 
            <span className="text-2xl font-bold">
              <TiArrowDown />
            </span>
          </Link>
        </div>

      </div>

      {/*this is Certificae page*/}
      <div className="flex flex-col justify-center items-center min-h-screen w-full mt-50">

        <PubCertificate/>
        
        <div className="w-full mt-20">
        <Footer />
        </div>

      </div>

    </div>
  );
};

export default Publication;
