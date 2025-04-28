"use client";
import React, { useState } from "react";
import { IoIosNotifications, IoMdArrowDropdown } from "react-icons/io";
import { SiGoogletranslate  } from "react-icons/si";
import  {FaGlobe} from "react-icons/fa";
import  "../../CSS/Navbar/NavbarHome.scss";
import logoH from "../../Images/LogoHome.jpg";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [clicked, setClicked] = useState(false)
  

  return (
    <>
      <nav className="bg-white shadow-md border-b border-gray-200 ">
        <div className="flex  justify-between px-6 py-3  ml-auto">
          {/* Logo */}
          <a href="/">
            <img src={logoH} alt="logo" className="h-14" />
          </a>
          
          <ul id="con" className={clicked ? "#con active" : "#con"} >
            {/* Features Dropdown */}
            <li className="relative ">
              <button
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                className="flex items-center text-gray-700 hover:text-black px-4 py-2 active"
              >
                Features <IoMdArrowDropdown className="ml-1" />
              </button>

            
            </li>

            <li><a href="/" className="text-gray-700 hover:text-black active">Pricing</a></li>
            <li><a href="/EditProfile" className="text-gray-700 hover:text-black active">About</a></li>

            {/* Language Dropdown */}
            <li className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center text-gray-700 hover:text-black px-4 py-2 active"
              >
                <FaGlobe className="mr-2 " /> English <IoMdArrowDropdown className="ml-1" />
              </button>

              {isLanguageOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                  <ul className="py-2 text-sm text-gray-700">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">English</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">عربي</a></li>
                  </ul>
                </div>
              )}
            </li>

          
               
                <li><a href="/" className="text-gray-700 hover:text-black">Login</a></li>
                <li><a href="/" className=" px-4 py-2 rounded-md nav_btn">Get Started</a></li>
 
          
          </ul>
        </div>
      </nav>
    </>
  );
}
