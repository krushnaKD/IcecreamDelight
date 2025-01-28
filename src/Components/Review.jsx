import React from "react";

const Review = () => {
  return (
    <section className="bg-gradient-to-r from-pink-100 to-orange-100 py-16 px-6 text-center relative">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Hear from Our <span className="text-pink-500">Happy</span>
        <br />
        <span className="text-pink-500">Ice Cream</span> Lovers
      </h2>
      
      <p className="mt-6 max-w-2xl mx-auto text-gray-700 text-lg">
        Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas as pernatur aut odit aut fugit, sed beatae vitae dicta ripiscing elit, sed do eiusmod tempor incididunt.
      </p>
      
      <div className="mt-8 relative">
        <span className="text-9xl text-pink-200 absolute -top-6 left-1/2 transform -translate-x-1/2">“</span>
        <p className="text-gray-800 text-lg font-medium relative z-10">
          "Labore et dolore magna aliqua ut enim ad minim adipiscing elit, sed do eiusmod tempor incididunt aut labore."
        </p>
      </div>
      
      <div className="mt-6">
        <h3 className="text-pink-600 font-semibold">Kevin Andrew</h3>
        <p className="text-gray-600 text-sm">Happy Customer</p>
        <div className="flex justify-center mt-2">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-yellow-500 text-xl">★</span>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-2 mt-4">
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>
      
      {/* Floating Profile Images */}
      <div className="absolute inset-0 flex justify-between items-center">
        <img src="/path-to-image1.jpg" alt="customer" className="w-12 h-12 md:w-16 md:h-16 rounded-full absolute top-10 left-16 shadow-lg" />
        <img src="/path-to-image2.jpg" alt="customer" className="w-12 h-12 md:w-16 md:h-16 rounded-full absolute top-32 left-6 shadow-lg" />
        <img src="/path-to-image3.jpg" alt="customer" className="w-12 h-12 md:w-16 md:h-16 rounded-full absolute bottom-20 left-10 shadow-lg" />
        <img src="/path-to-image4.jpg" alt="customer" className="w-12 h-12 md:w-16 md:h-16 rounded-full absolute bottom-10 right-16 shadow-lg" />
        <img src="/path-to-image5.jpg" alt="customer" className="w-12 h-12 md:w-16 md:h-16 rounded-full absolute top-16 right-10 shadow-lg" />
      </div>
    </section>
  );
};

export default Review;