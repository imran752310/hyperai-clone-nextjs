import React from "react";
import Image from "next/image";
import { RiLineChartFill } from "react-icons/ri";
import { FaNetworkWired, FaPhoneVolume } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { LiaRobotSolid } from "react-icons/lia";

const ServiceCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {/* ServiceCard1  */}
        <div data-aos="zoom-in" data-aos-offset="200" className="p-2 my-5">
          <div className=" text-center bg-white   rounded-lg shadow-lg">
            <div className="p-6">
              <RiLineChartFill size={60} className="mx-auto text-purple-700 m-4" />
              <h3 className="text-xl text-black font-bold">
                Grow Your Business with AI-Driven Solutions
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                HyperAI delivers intelligent solutions that automate, optimize,
                and accelerate your business. Stay ahead with cutting-edge AI
                designed for efficiency and innovation
              </p>
            </div>
            <div className="  text-white p-6 rounded-lg">
             <button className="cursor-pointer bg-purple-700 text-white py-2 px-6 flex items-center rounded-sm hover:bg-purple-800 hover:text-white transition hover:animate-pulse">Get a Started
                                         <GoArrowUpRight />
                                     </button>
            </div>
          </div>
        </div>


          {/* ServiceCard2  */}
        <div data-aos="zoom-in" data-aos-offset="300" className="p-2 my-5">
          <div className=" text-center  bg-gradient-to-t from-blue-800 to-purple-500 text-white  rounded-lg shadow-lg">
            <div className="p-6">
              <FaNetworkWired size={60} className="mx-auto m-4" />
              <h3 className="text-xl font-bold">
                Grow Your Business with AI-Driven Solutions
              </h3>
              <p className="text-sm mt-2">
                HyperAI delivers intelligent solutions that automate, optimize,
                and accelerate your business. Stay ahead with cutting-edge AI
                designed for efficiency and innovation
              </p>
            </div>
            <div className="  bg-blue-900 text-white p-6 rounded-lg">
              <button className="cursor-pointer text-black bg-white py-2 px-6 flex items-center rounded-sm hover:bg-purple-800 hover:text-white transition hover:animate-pulse">Learn more
                                         <GoArrowUpRight />
                                     </button>
            </div>
          </div>
        </div>

        
          {/* ServiceCard3  */}
       <div data-aos="zoom-in" data-aos-offset="400" className="p-2 my-5">
          <div className=" text-center bg-white    rounded-lg shadow-lg">
            <div className="p-6">
              <RiLineChartFill size={60} className="mx-auto text-purple-700 m-4" />
              <h3 className="text-xl text-black font-bold">
                Grow Your Business with AI-Driven Solutions
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                HyperAI delivers intelligent solutions that automate, optimize,
                and accelerate your business. Stay ahead with cutting-edge AI
                designed for efficiency and innovation
              </p>
            </div>
            <div className="  text-white p-6 rounded-lg">
             <button className="cursor-pointer bg-purple-700 text-white py-2 px-6 flex items-center rounded-sm hover:bg-purple-800 hover:text-white transition hover:animate-pulse">Get a Started
                                         <GoArrowUpRight />
                                     </button>
            </div>
          </div>
        </div>


          {/* ServiceCard1  */}
        <div data-aos="zoom-in" data-aos-offset="450" className="p-2 my-5">
          <div className=" text-center  bg-gradient-to-t from-blue-800 to-purple-500 text-white  rounded-lg shadow-lg">
            <div className="p-6">
             <LiaRobotSolid  size={60} className="mx-auto m-4" />
              <h3 className="text-xl font-bold">
                Grow Your Business with AI-Driven Solutions
              </h3>
              <p className="text-sm mt-2">
                HyperAI delivers intelligent solutions that automate, optimize,
                and accelerate your business. Stay ahead with cutting-edge AI
                designed for efficiency and innovation
              </p>
            </div>
            <div className="  bg-blue-900 text-white p-6 rounded-lg">
              <button className="cursor-pointer text-black bg-white py-2 px-6 flex items-center rounded-sm hover:bg-purple-800 hover:text-white transition hover:animate-pulse">Learn more
                                         <GoArrowUpRight />
                                     </button>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ServiceCard;
