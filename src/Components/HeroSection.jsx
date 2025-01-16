import React from "react";
import ledticecream from "../assets/icecreameleft.png";
import Figure from "../assets/icecream.png";
import waves from "../assets/floating.png";
import 'remixicon/fonts/remixicon.css'
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <>
    <div className="w-full h-screen relative bg-gradient-to-br from-[rgba(239,215,239,1)] via-[rgba(245,249,252,1)] via-[rgba(248,234,225,1)] to-[rgba(234,248,249,1)]">
     <div className="w-full h-[70px] px-20">
     <Navbar/>
     </div>
      <img
        className="w-36 opacity-30 absolute top-40"
        src={ledticecream}
        alt=""
      />
      <div className="w-[40%] absolute font-title  top-[13vw] left-[10vw]">
        <h1 className="text-xl l">--- Welcome to the</h1>
        <h1 className="leading-[90px]  text-[6vw]">
          Classic <span className="text-[#F83D8E]">Ice</span> <br />{" "}
          <span className="text-[#F83D8E]">Cream</span> Parlor
        </h1>
        <p className="font-sans font-medium mt-2">
          Savor the taste of traditional ice cream made with love and <br />{" "}
          quality ingredients.
        </p>
        <button className="px-4 py-2 font-sans text-white text-lg bg-[#683292] rounded-3xl mt-6">Browse our Clissic Flavour 
        <i className="ml-2 ri-arrow-right-line"></i> </button>
      </div>
      <div className="w-[40%] absolute left-[58%] top-40">
        <img className="w-[30vw]" src={Figure} alt="" />
      </div>
      <img className="absolute bottom-0" src={waves} alt="" />
    </div>
    </>
  );
};

export default HeroSection;
