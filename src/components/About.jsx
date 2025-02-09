import React from "react";
import { FaArrowUp } from "react-icons/fa";
import Man from '../assets/Logo.jpg'; 
// Update with the correct image path

const About = () => {
  return (
    <>
    <div className="bg-purple-900">
      <h1 className="text-2xl lg:text-4xl bg-purple-600 p-3 text-orange-500 font-bold text-center">About Us</h1>
     
    </div>
    <div className="flex flex-col lg:flex-row items-center justify-center text-white bg-purple-900 py-10 px-6 lg:px-20 min-h-screen">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full space-y-4">
        <p className="text-gray-400 text-lg">Hello & Welcome</p>
        <h1 className="text-xl lg:text-5xl font-bold text-red-800">
        👉 This is  Zufaiz Saneen Store
        </h1>
        <p className="text-gray-300 text-lg">
          <span className="font-semibold">✅ High-Quality Products</span> ・{" "}
          <span className="font-semibold">✅ Affordable Price</span> ・{" "}
          <span className="font-semibold">✅ Customer Support</span>
        </p>
        <p className="text-white text-xs lg:text-lg">
        We are a team of dedicated professionals committed to quality, reliability, and customer satisfaction. Our mission is to provide authentic and trendy products that cater to your needs and enhance your lifestyle.{" "}
          <span className="font-semibold">
            Our Mission is
          To create a seamless shopping experience with a diverse range of products that inspire and enhance your everyday life.
          </span>
          
        </p>

        {/* Skill Progress Bars */}
        
      </div>

      {/* Right Section - Image */}
      <div className="lg:w-1/2 w-full flex justify-center mt-10 lg:mt-0 relative">
        <div className="relative hover:scale-105 p-2">
          <img
            src={Man}
            alt="Profile"
            className="w-80 h-96 object-cover rounded-full"
          />
          
        </div>
      </div>
     
    </div>

   
    </>
  );
};


export default About;
