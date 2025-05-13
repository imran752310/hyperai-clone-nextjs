import Link from "next/link";
import React from "react";
import Image from "next/image";

import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 w-[95%]  mx-auto   bg-gradient-to-r from-blue-500 to-purple-500 text-white p-10 md:p-20 rounded-3xl">
      <div className="w-[95%] mx-auto items-start grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* colum 1  */}
        <div className="space-y-2">
          <div className="mt-8 w-[80%] mx-auto   text-gray-600  text-sm">
            <Image src="/image/logo.webp" width={200} height={200} alt="AI User" className="rounded-lg pb-5" />
                
            <p className="text-center text-white md:text-left">
             
              Experience the SociaBiz Advantage – Empowering Social Success with
              Data-Driven Solutions.
            </p>
            <div className="flex items-center space-x-4 md:mt-0 pt-5">
              <span className="font-semibold text-purple-700">Social :</span>
              <Link
                href="#"
                className="text-white  hover:text-gray-800 flex gap-2"
              >
                <FaTwitter size={25}/>
                <FaFacebook size={25} />
                <FaYoutube size={25} />
              </Link>
            </div>
          </div>
        </div>
        {/* colum 2  */}
        <div className="space-y-2">
          <h1 className="text-lg font-bold">Support</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 ">
            Contact
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 ">
            Legal Notice
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 ">
            Privacy Policy
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 ">
            Terms & Condition
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 ">
            Magazine
          </p>
        </div>
        {/* colum 3  */}
        <div className="space-y-2">
          <h1 className="text-lg font-bold">Other Services</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 ">
            Car hire
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 ">
            Activity Finder
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 ">
            Tour List
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 ">
            Fligh Agents
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 ">
            Travel{" "}
          </p>
        </div>
        {/* colum 4  */}
        <div>
          <h1 className="text-lg font-bold">Contact us</h1>
          <div className="mt-6">
            <h1 className="text-sm text-gray-200">Our Mobile Number</h1>
            <h1 className="text-base font-bold text-blue-950 mt-1">
              +012 345 6789
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-gray-200">Email</h1>
            <h1 className="text-base font-bold text-blue-950 mt-1">
              Example@gmail.com
            </h1>
          </div>
        </div>
      </div>
      {/* bottom section  */}
    </div>
  );
};

export default Footer;
