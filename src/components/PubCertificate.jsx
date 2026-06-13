import React from "react";
import { Element } from "react-scroll";
import Footer from "./Footer";

const PubCertificate = () => {
  return (
    <Element name="certificate">
      <div className="mt-20 text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          🏆 Publication Certificate
        </h2>

        <img
          src="/publication/ConferenceCertificate.jpg"
          alt="Publication Certificate"
          className="
                    w-[900px]
                    mt-20
                    rounded-2xl
                    border-2
                    border-cyan-400
                    shadow-[0_0_25px_#22d3ee]
                    hover:scale-110
                    transition-all
                    duration-500
                    "
        />
      
      </div>

    </Element>
  );
};

export default PubCertificate;
