import React from "react";
import figure from "../assets/Figure.png";
import circle from "../assets/relive-circle.png";
import dotted from "../assets/relive-doted.png";
import half from "../assets/half.png";
import triangle from "../assets/triangle.png";

const ExplorSection = () => {
  return (
    <div className="w-full h-screen grid grid-cols-2 overflow-hidden">
      <div className="w-full  relative">
        <img className="w-10 absolute top-[70vh] left-32" src={circle} alt="" />
        <img className="w-14 absolute left-[40vw] top-32" src={dotted} alt="" />
        <img className="w-[66%] absolute top-36 left-40" src={figure} alt="" />
      </div>
      <div className="relative w-full flex flex-col justify-center items-start ml-14 gap-10">
        <h1 className="font-title text-6xl">
          Relive the Sweet <br />
          Memories of Classic <br />
          <span className="text-[#F83D8E]">Ice Creams</span>
        </h1>
        <p className="text-[#646464] text-lg">
          From rich chocolate fudge to creamy vanilla sundaes,
          <br />
          discover our menu of classic ice cream creations.
        </p>
        <button className="px-6 py-3 rounded-3xl text-white bg-[#F83D8E] ">
          Explore Our Menu <i className="ml-1 ri-arrow-right-line"></i>{" "}
        </button>
        <img className="absolute top-32 left-36" src={triangle} alt="" />
        <img className="absolute bottom-0  left-[25vw]" src={half} alt="" />
      </div>
    </div>
  );
};

export default ExplorSection;
