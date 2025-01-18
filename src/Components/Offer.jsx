import React from "react";
import Srightimg from "../assets/favsecImages/Srightimage.png";
import fifty from "../assets/favsecImages/fifty.png";
import line from "../assets/favsecImages/dotedarrow.png";
import triangle from '../assets/triangle.png'
import doted from '../assets/relive-doted.png'

const Offer = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-[#683292]">
      <img
        className="absolute right-[20vw] top-36 object-cover z-10"
        src={line}
        alt=""
      />
      <img className="absolute top-[24vh] left-48 text-white "  src={triangle} alt="" />
      <img className="absolute top-[54vh] left-48 " src={doted} alt="" />
      <div className="relative w-[50%] h-[40%] ">
        <h1 className="text-white font-title text-8xl">
          Summer <br />
          Special
        </h1>
        <div className="absolute right-32 top-0  rounded-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white font-serif">
            <img src={fifty} alt="" />
          </h1>
        </div>
        <h2 className="text-white mt-4 font-sans text-2xl ">
          Buy One Sundae, Get One 50% off!
        </h2>
        <div className="flex gap-4 items-center ">
          <button className="px-10 py-3 font-sans text-white text-md bg-[#F83D8E] rounded-3xl mt-6">
            Get This Deal
            <i className="ml-2 ri-arrow-right-line"></i>{" "}
          </button>
          <h1 className="text-white mt-5">Use Code : SUMMER50 at checkout</h1>
        </div>
      </div>
      <img className="absolute right-0 top-36" src={Srightimg} alt="" />
    </div>
  );
};

export default Offer;
