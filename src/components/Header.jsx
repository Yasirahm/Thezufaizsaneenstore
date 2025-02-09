import React from "react";
import Logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
const Header = () => {
  return (
    <header className="w-screen bg-purple-900 text-white text-center">
      {/* Logo & Store Info */}
      <div className="p-4 flex flex-col items-center">
        <img
          src={Logo}
          alt="The Zufaiz Saneen Store Logo"
          className="w-28 sm:w-36 md:w-40 h-auto rounded-full transition-transform duration-500 hover:rotate-180 hover:scale-105"
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2">
          The Zufaiz Saneen Store
        </h1>
        <p className="text-sm sm:text-base md:text-lg">
          Your one-stop shop for customized gifts
        </p>
        
      </div>
      <div className="font-bold bg-purple-900  text-center lg:text-2xl md:text-2xl text-xs text-orange-500 hover:text-blue-400">
          <TypeAnimation
          
            sequence={[
              "Welcome to The Zufaiz Saneen Store!",2000,
        "Discover Quality Products at Affordable Prices.",2000,
        "Shop Now and Experience Excellence.",2000,
        "Fast & Reliable Delivery – Just a Click Away!",2000,
        "Your Satisfaction, Our Priority.",2000,
        "Get in Touch for Custom Orders!",2000,
            ]}
            wrapper="span"
            speed={90}
            repeat={Infinity}
            
          />
        </div>

      {/* Navigation Bar */}
      <nav className="bg-purple-800 py-3">
        <ul className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-sm sm:text-base md:text-lg font-semibold">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-yellow-400 transition duration-300">
              Products
            </Link>
          </li>
          <li>
            <Link to="/order" className="hover:text-yellow-400 transition duration-300">
              Order Now
            </Link>
          </li>
          <Link to="/contact">
                <button className="bg-red-600 text-white py-1 px-4 w-full rounded-lg hover:bg-red-700">
                  Request a Callback
                </button>
              </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
