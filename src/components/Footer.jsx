import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-purple-500 text-white p-4 text-center">
      
      <p className="text-sm sm:text-base">
        &copy; 2025 The Zufaiz Saneen Store. All rights reserved.&trade;
      </p>
      <p className="text-xs sm:text-sm mt-2">
        🚀 Your one-stop shop for premium personalized products.<br></br>  
        🌍 We deliver products all over Kashmir with fast shipping!  
      </p>
      <p className="text-xs sm:text-sm">
        📞 Need help? Contact us at{" "}
        <a href="mailto:support@zufaizsaneenstore.com" className="underline">
        zufaizsaneen@gmail.com
        </a>
      </p>
      <div className="flex justify-center space-x-4 mt-10">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:scale-110 transition"
        >
          <FaLinkedin size={24} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/the_zufaiz_saneen_store"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-700 hover:scale-110  transition"
        >
          <FaInstagram size={24} />
        </a>
      </div>

    </footer>
  );
};

export default Footer;
