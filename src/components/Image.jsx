import React from 'react'

const Image = (props) => {
  return (
          <div className="bg-black border border-cyan-400 rounded-3xl overflow-hidden shadow-[0_0_15px_#22d3ee] hover:shadow-[0_0_35px_#22d3ee] 
      hover:-translate-y-2 transition-all duration-500 flex flex-col gap-y-4">
        <img
          src={props.src}
          alt={props.alt}
          loading="lazy"
          className="w-100 h-80 object-cover rounded-4xl p-2"
          />
          <h1 className=" text-cyan-300 text-lg text-center mb-4">
            {props.name}
          </h1> 
          
      </div>
  )
}

export default Image