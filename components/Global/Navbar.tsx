import { FaPhoneVolume } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
const Navbar = () => {
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
      </nav>
    );
  };

  export default Navbar