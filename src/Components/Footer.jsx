import React from "react";
import tales from "../assets/Link.png";
import img from '../assets/favsecImages/footer-image.png'

const Footer = () => {
  return (
    <div className="relative w-full h-[60vh] bg-[#683292] flex flex-col gap-2 items-center justify-center">
        <img className="absolute  bottom-0 left-0" src={img} alt="" />
      <div className="w-[70%] h-[70%] border-b-[1px]  place-content-center border-gray-400 grid grid-cols-4">
        <div>
          <img src={tales} alt="" />
        </div>
        <div>
          <h1 className="text-white font-medium text-xl">Navigation</h1>
          <div className="grid grid-cols-2 ">
            <div className="text-[#c4c3c3] ">
              <h2 className="text-md mt-4">Home</h2>
              <h2 className="text-md mt-2">About</h2>
              <h2 className="text-md mt-2">Shop</h2>
            </div>
            <div className="text-[#c4c3c3] ">
              <h2 className="text-md mt-4">Products</h2>
              <h2 className="text-md mt-2">Blog</h2>
              <h2 className="text-md mt-2">Contacts</h2>
            </div>
          </div>
        </div>
        <div className="grid-rows-2">
          <div>
            <h1 className="text-white font-medium text-xl">Address:</h1>
            <p className="mt-2 text-[#c4c3c3]">
              Gokulwada,kalewadi,pune 411017 <br />
              Maharashtra
            </p>
          </div>
          <div className="mt-3">
            <h1 className="text-white font-medium text-xl">Email</h1>
            <h2 className="mt-2 text-[#c4c3c3]">IceDelight@gmail.com</h2>
          </div>
        </div>
        <div className="grid-rows-2">
          <div>
            <h1 className="text-white text-2xl font-bold">+1234567890</h1>
            <p className="mt- text-sm text-[#c4c3c3]">Got questions? Call us 24/7</p>
          </div>
          <div></div>
        </div>
      </div>
      <h1 className="text-[#c4c3c3] text-md">Copyright © 2025 KD Themes Inc All rights reserved.</h1>
      <div className="absolute w-14 h-12 rounded-md right-10 bottom-10 flex items-center justify-center bg-[#F83D8E] "><i class="text-white text-3xl text-center ri-arrow-up-long-line"></i></div>
    </div>
  );
};

export default Footer;
