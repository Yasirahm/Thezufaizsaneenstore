import React, { useState, useEffect } from "react";
import image1 from "../assets/Aes.png";
import image2 from "../assets/Bottle.png";
import image3 from "../assets/Cpen.png";
import image4 from "../assets/Chai.png";
import image5 from "../assets/Calli.png";
import image6 from "../assets/Pics.png";
import image7 from "../assets/Photo.png";
import image8 from "../assets/Namep.png";
import image9 from "../assets/Beautiful.png";
import image10 from "../assets/Pen.jpg";
import image11 from "../assets/Frame.jpg";
import image12 from "../assets/Lock.jpg";
import image13 from "../assets/Cup.jpg";
import image14 from "../assets/Aes.png";
import image15 from "../assets/Chai.png";
import chai2 from "../assets/chai2.png";
import beautiful2 from "../assets/beautiful2.png";
import cpen3 from "../assets/cpen3.png";
import aes3 from "../assets/aes3.png";
import lock3 from "../assets/lock3.png";
import frame7 from "../assets/frame7.png";
import photo3 from "../assets/photo3.png";
import namep3 from "../assets/namep3.png";
import pic3 from "../assets/pics3.png";



const ImageSlider = () => {
  const images = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15,chai2, beautiful2, cpen3, aes3, lock3, frame7, photo3, namep3, pic3
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-cover bg-purple-900 flex flex-col items-center px-4 md:px-10 lg:px-20">
      
   

      {/* Image Slider */}
      <div className="relative w-screen  max-w-5xl mt-10 overflow-hidden rounded shadow-lg border border-purple-700">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full flex justify-center">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full md:h-[550px]  object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Dots for Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                currentIndex === index ? "bg-orange-500 scale-125" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
