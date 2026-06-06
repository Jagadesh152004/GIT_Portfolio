import { Element } from "react-scroll";
import {Link} from "react-scroll"
//


const Education = () => {

  const content = 
  "w-md bg-black border-2 border-cyan-400 rounded-4xl p-8 text-center shadow-[0_0_25px_#22d3ee] transition-all hover:scale-110 duration-600 ease-in-out cursor-pointer hover:-translate-y-2 hover:shadow-[0_0_50px_#22d3ee]";

  const dot = "absolute left-1/2 top-10 w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee] -translate-x-1/2";

  return (
    <Element name="education">
    
        {/* Heading */}

<div className="min-h-screen p-20">

        <h1 className="font-[poppins] font-bold text-5xl text-yellow-300 mb-20 text-center">
          Education
        </h1>
{/* Container  */}
        <div className="min-w-5xl w-auto relative">

{/* Center Line */}
    <div className="absolute left-1/2 top-0 h-full w-1 bg-cyan-400 shadow-[0_0_20px_#22d3ee] -translate-x-1/2 rounded-4xl"></div> 

{/* Item 1 */}
    <div className="relative flex justify-start mb-5 p-5">

{/* Item1-Content */}
      <div className={content}>

        <h3 className="text-white font-bold text-xl">
          🎓 B.Tech – AI & DS
        </h3>

        <p className="text-amber-300 font-medium">
          Kathir College of Engineering, Coimbatore 2022 – 2026 | CGPA: 7.51
        </p>

        <p className="text-gray-400 mt-3">
          Pursuing a degree in Artificial Intelligence and Data Science while developing skills in 
          software development, web technologies, and problem-solving.
        </p>

      </div>

            {/* Dot */}
      <div className={dot}>
      </div>

      </div>

      {/* Item-2 */}
      <div className="relative flex justify-end mt-2 mb-5 p-5">
        {/* Item-2 Content */}
      <div className={content}>

        <h3 className="text-white font-bold text-xl">
         🏫 HSC
        </h3>

        <p className="text-amber-300 font-medium">
          Adwaith GNS Matric Higher Secondary School 
          2022 | 76%
        </p>

        <p className="text-gray-400 mt-3">
          Completed my higher secondary education with a strong
          foundation in science and mathematics.
        </p>

      </div>

            {/* Dot */}
      <div className={dot}>
      </div>

      </div>

      {/* Item-3 */}
      <div className="relative flex justify-start p-5">
      {/* Item-3 Content */}
      <div className={content}>

        <h3 className="text-white font-bold text-xl">
        📚 SSLC
        </h3>

        <p className="text-amber-300 font-medium ">
          Adwaith GNS Matric Higher Secondary School 2020 | 77%
        </p>

        <p className="text-gray-400 mt-3">
          Successfully completed secondary education, building strong academic and analytical skills.
        </p>

      </div>

      {/* Dot */}
      <div className={dot}>
      </div>

      </div>
        
        </div>

        {/* Down Button */}

        <div className="flex justify-center items-center mt-5 ">
          
          {/* Course Button */}
          <Link 
          to="course"
          smooth={true}
          duration={800}
          className="text-black text-xs font-[poppins] bg-cyan-400 p-3 font-semibold hover:rounded-full hover:transition-all hover:transform hover:scale-110 hover:duration-500 cursor-pointer bg-gradient-to-r hover:from-cyan-400 hover:to-blue-800 hover:ease-in-out hover:shadow-[0px_0px_10px_#06b6d4] rounded-md[0px_0px_10px_#06b6d4] rounded-xl duration-1000 transition-all animate-bounce">
          Explore Courses 
          
          <span className="pl-2">
            ↓
          </span>
          </Link>
          </div>
</div>


    </Element>
  )
};

export default Education;
