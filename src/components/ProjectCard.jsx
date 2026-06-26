import { FaGlobe } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"

const ProjectCard = ({project,card,cardButton}) => {


  return (
    <div className={card}>
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-110 h-60 object-cover object-center rounded-4xl"
        />
      <h1 className="text-start text-2xl font-semibold font-mono text-white mt-4">
        {project.title}
      </h1>

      <p className="text-zinc-400 text-lg font-serif mt-4 max-w-md">
        {project.description}
      </p>

      <div className="flex justify-center gap-4 mt-5 flex-wrap">
        {project.tech.map((item,index) => (
          <span key={index} className={cardButton}>
            {item}
          </span>
        ))}
      </div>

      <div className="flex w-full p-2 mt-4 gap-3">
        <a
          href={project.gitHub}
          target="_blank"
          className="flex justify-center gap-2 text-white font-semibold bg-zinc-800 border-2 border-zinc-300 hover:bg-zinc-800 hover:border-transparent w-45 p-2 rounded-2xl cursor-pointer"
        >
        <FaGithub className="mt-1"/>  Code
        </a>

  {/* Live Button */}
  {project.live ? (
    <a
      href={project.live}
      target="_blank"
      className="flex-1 text-center font-semibold bg-black border-2 border-cyan-400 text-white p-2 rounded-2xl hover:bg-cyan-600 hover:border-transparent transition"
    >
      <span className="flex justify-center gap-3">
      <FaGlobe className="mt-1"/>
      Live
      </span>
    </a>
  ) : (
    <span
      className="flex-1 text-center font-semibold bg-cyan-600 text-white p-2 rounded-2xl cursor-not-allowed"
    >
        <s className="flex justify-center gap-3">
        <FaGlobe className="mt-1"/>
        Live
        </s>
    </span>
  )}
    </div>


    </div>
  )
}

export default ProjectCard