import { useState } from "react"


const ProfileImage = () => {

  const[image,setImage] = useState("/img/JAGA1_GPT.webp")


  return (
    <img
    src={image}
    alt="Profile"
    onMouseOver={() => setImage("/img/JAGA1_GPT.webp")}
    onMouseOut={() => setImage("/img/JAGA2_GPT.webp")}
    className="w-80 h-80 object-cover object-top
border-4 border-cyan-400 rounded-full
transition-all duration-500 ease-in-out
hover:scale-110
hover:rotate-3
hover:shadow-[0_0_60px_#06b6d4] animate-float shadow-[0_0_10px_#06b6d4] max-w-xl"
    />
  );
};

export default ProfileImage
