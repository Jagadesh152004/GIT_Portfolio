import {Link} from "react-router-dom"


const Project = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-r from-slate-900 to-purple-950">
      {/* Background Video Container */}
      Projects
      <Link 
        to="/service"
        className="text-black text-xs font-[poppins] bg-cyan-400 pr-3 pl-3 pt-2 pb-2 font-semibold hover:rounded-full hover:transition-all 
        hover:transform hover:scale-110 hover:duration-500 cursor-pointer bg-gradient-to-r hover:from-cyan-400 hover:to-blue-800 hover:ease-in-out 
        hover:shadow-[0px_0px_10px_#06b6d4] rounded-lg shadow-[0px_0px_10px_#06b6d4]"
        >
          Service
      </Link>
      </div>
  )
}

export default Project