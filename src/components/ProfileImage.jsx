import { useState } from "react"


const ProfileImage = () => {

  const[image,setImage] = useState("/img/profile2.png")


  return (
    <img
    src={image}
    alt="Profile"
    onMouseOver={() => setImage("/img/Profile1.png")}
    onMouseOut={() => setImage("/img/profile2.png")}
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
