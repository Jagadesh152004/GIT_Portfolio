import Footer from "../components/Footer"
import projects from "../DATA/projectData"
import ProjectCard from "../components/ProjectCard"

const Project = () => {

const card = "p-5 flex flex-col justify-center items-center bg-sky-950 transition-all duration-500 ease-in-out border-2 border-cyan-400 rounded-2xl max-w-120 shadow-[0_0_15px_#22d3ee]"   

const cardButton = "px-3 py-2 rounded-3xl bg-white text-black font-semibold"

  return (
  <div className="min-h-screen w-full bg-slate-900 flex flex-col justify-center items-center">
      {/* Background Video Container */}
      <div className="mt-20 mb-10">
      <h1 className="text-5xl text-cyan-400 font-bold">
        <span className="text-white">My</span> 
        {" "}Project</h1>
      </div>  
    <div className="flex flex-wrap justify-center items-center mt-10 mb-20 gap-20">
    
          {projects.map((project,index) => (
        <ProjectCard index={index} project={project} card={card} cardButton={cardButton}/>
    ))}

    </div>
    <div className="w-full mt-15">
      <Footer />
    </div>
  </div>
  )
}

export default Project