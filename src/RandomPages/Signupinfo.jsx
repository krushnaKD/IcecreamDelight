import React from "react";
import img1 from "../assets/relive-circle.png"
import img2 from "../assets/triangle.png"

const Signupinfo = () => {
  return (
    <div className=" w-full h-screen bg-[#F5F5F5] flex items-center justify-center">
        
      <div className=" relative w-[70%] h-[50%] ">
      <img className="absolute left-0 bottom-20 w-10 "  src={img1} />
      <img className="absolute right-0 top-20 w-14 "  src={img2} />

        <h1 className="text-4xl font-title text-center">
          Sign up For <span className="text-[#F83D8E]">Exclusive Deals</span>{" "}
          <br />
          and Updates
        </h1>
        <p className="text-sm text-gray-500 text-center font-medium mt-5">
          Get 10% off your next order and stay updated with our latest offers.
        </p>
        <div className="flex items-center justify-center mt-14 gap-4">
          <input
            type="text"
            className="w-96 h-5 px-10 py-6 shadow-white  rounded-3xl outline-none"
            placeholder="Enter Your Email Address"
          />
           <button className="px-4 py-2  rounded-3xl text-white bg-[#F83D8E] ">
        Sign Up <i className="ml-1 ri-arrow-right-line"></i>
      </button>
       
        </div>
        <h2 className="text-center mt-10 ">I agree to the <span className="text-[#F83D8E] cursor-pointer">Privacy Police</span></h2>
      </div>
    </div>
  );
};

export default Signupinfo;
