import { NavLink } from "react-router-dom";
import "/src/App.css";
import DropDown from "../pages/DropDown";

const NavBar = () => {

    const navLinkStyle = ({ isActive }) =>
    `p-2 transition-all duration-500 ease-linear ${
      isActive
        ? "text-sky-600"
        : "text-white hover:text-sky-600"
        }`;

  return (
    <div className="sticky top-0 z-40 flex items-center justify-between w-full px-5 py-3 m-auto bg-black border-b-2 border-sky-600 overflow-x-hidden" >
      <h1 className="neon-text text-2xl font-['poppins'] font-medium text-white neon-text">Portfolio.</h1>
      <ul className="flex items-center justify-center gap-4 font-semibold text-white cursor-pointer">
        <li>
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={navLinkStyle}>About</NavLink>
        </li> 
        <li>
          <NavLink to="/skills" className={navLinkStyle}>Skills</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={navLinkStyle}>Projects</NavLink>
        </li>
        <li>
          <DropDown className={navLinkStyle}/>
        </li>
        <li>
          <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
        </li>
      </ul>
      
    </div>
  );
};

export default NavBar;
