"use client"
import { FaPhoneVolume } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
const Navbar = () => {
const [isMobileMwnuOpen,  setIsMobileMenuOpen] = useState(false)

    return (
      <nav className="w-[90%] mx-auto flex justify-between items-center py-5 bg-white">
        <div className="text-2xl font-bold text-purple-700 flex items-center">
           <Image src="/image/logo.webp" width={200} height={200} alt="AI User" className="rounded-lg" />
        </div>
        <ul className="hidden md:flex space-x-6">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Pages</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <div className="hidden md:flex items-center space-x-4">
          <FaPhoneVolume  className="text-purple-600" />
          <span>+123 (456) 789</span>
          <button className="bg-purple-700 text-white px-6 py-2 flex rounded-sm">Get a Quote 
          <GoArrowUpRight />
          </button>
        </div>
          <HiBars3BottomRight
                onClick={() => setIsMobileMenuOpen(!isMobileMwnuOpen)}
                className="w-8 h-8 cursor-pointer text-gray-900 lg:hidden"
              />

               {isMobileMwnuOpen && (
 <div className="fixed inset-0 transform transition-all duration-500 z-[1002]  w-full h-screen">
                <div className="text-white   justify-center flex flex-col h-[400px] rounded-b-lg transform transition-all duration-500 delay-300 w-[80%] sm:w-[80%] bg-blue-900   space-y-6 z-[1050]">
                   <CgClose
                    onClick={() => setIsMobileMenuOpen(!isMobileMwnuOpen)}
                    className="absolute cursor-pointer top-[0.7rem] right-[1rem] sm:w-8 w-6 h-6 text-white "
  <ul className=" md:flex space-x-6">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Pages</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <div />
        </div>
</div>
               )}
              
      </nav>
    );
  };

  export default Navbar