import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Dropdown = () => {
  
  const [open, setOpen] = useState(false);
  const dropButton = "block px-4 py-3 text-white text-center hover:bg-cyan-400 hover:text-black rounded-2xl"

  return (
    <div
      className="relative">

      <button className=" flex items-center gap-4" 
      onMouseEnter={() => setOpen(true)}
      >
        Others
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {open && (
        <div className="absolute -right-15 top-full mt-6 w-48 p-2 bg-black border-2 border-cyan-400 rounded-2xl shadow-[0_0_15px_#22d3ee]" 
           onMouseLeave={() => setOpen(false)}
          >
           <Link
            to="/publications"
            className={dropButton}
          >
            Publications
          </Link>

          <Link
            to="/service"
            className={dropButton}
          >
            Services
          </Link>

          <Link
            to="/certificates"
            className={dropButton}
          >
            Certificates
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;