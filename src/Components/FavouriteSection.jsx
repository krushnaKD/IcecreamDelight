import React from "react";
import left from '../assets/favsecImages/classic-leftimage.png'
import right from '../assets/favsecImages/classic-rightimage.png'
import img1 from '../assets/favsecImages/image2.png'
import link from '../assets/favsecImages/Link.png'

const FavouriteSection = () => {

    const data = [
     {
        name:"Choclate Brownie Sundae",
        img:"C:\Users\Krushna\OneDrive\Desktop\IcecreamDelight\src\assets\favsecImages\image2.png",
        price:"$5.49",
        rating:"4.5/5",
        desc:"Rich choclate ice cream with chuncks of brownie"
     },
     {
        name:"",
        img:"",
        price:"",
        rating:"",
        desc:""
     },
     {
        name:"",
        img:"",
        price:"",
        rating:"",
        desc:""
     }
     ,
     {
        name:"",
        img:"",
        price:"",
        rating:"",
        desc:""
     }
    ]

  return (
    <div
      className=" relative flex items-center justify-center w-full h-screen bg-gradient-to-br from-[rgba(239,215,239,1)] via-[rgba(245,249,252,1)] via-[rgba(248,234,225,1)] to-[rgba(234,248,249,1)]"
    >
           <img  className="absolute w-[14vw] left-0 top-[10vh]" src={left} alt="" />
 <div className="w-[65%] h-[72%] ">
     <h1 className="text-5xl font-title text-center">Our <span className="text-[#F83D8E]">Classic</span> Flavour</h1>
     <p className="text-[#646464] text-md mt-3 text-center">Check out our top products that our customers love</p>
     <div className="w-60 h-[70%] p-3 bg-white shadow-lg rounded-lg flex flex-col mt-10">
       <div className="h-[55%] bg-[#F7F2F7] flex items-center justify-center rounded-md">
        <img className="w-32 object-contain" src={img1} alt="" />
        
       </div>
       <div className="relative mt-2 flex flex-col">
        <h1 className="flex gap-12 font-bold font-sans ">Choclate <br /> Brownie Sundae <h3 className="font-normal">4.5/5</h3></h1> 
        <p className="text-[#646464] text-md leading-5 mt-2">Rich choclate ice cream with <br /> chuncks of brownie</p>
        <h1 className="text-[#F83D8E] text-2xl font-bold mt-3">$5.49</h1>
        <img className="w-10 absolute right-3 top-28" src={link} alt="" />
       </div>
     </div>
 </div>
           <img className="w-[15vw] absolute right-0 top-[24vh]" src={right} alt="" />
    </div>
  );
};

export default FavouriteSection;
