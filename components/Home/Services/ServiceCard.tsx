import React from "react";
import Image from "next/image";
import { RiLineChartFill } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa6";

const ServiceCard = () => {
  return (
    <div>
      <div className="mt-10">
        {/* ServiceCard1  */}
        <div className=" w-full md:w-1/2">
          <div className=" text-center  bg-gradient-to-t from-blue-800 to-purple-500 text-white  rounded-lg w-[73%] shadow-lg">
            <div className="p-6">
              <RiLineChartFill size={60} className="mx-auto m-4" />
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
              <p className="font-bold">Ready to Get Started?</p>
              <p className="text-sm flex items-center gap-2">
                <FaPhoneVolume /> +123-456-789
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ServiceCard;
