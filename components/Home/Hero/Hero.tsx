import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosPlay } from "react-icons/io";

const Hero = () => {
    return (
        <section className="w-[90%]  mx-auto  flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-500 to-purple-500 text-white p-10 md:p-20 rounded-3xl">
            <div className="md:w-1/2">
                <span className="bg-purple-700 px-4 py-1 text-sm">Future of Marketing is Here</span>
                <h1 className="text-4xl md:text-5xl font-bold mt-4">
                    Let AI Take Your Business To The Next Level
                </h1>
                <p className="mt-4 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                    tellus, luctus nec ullamcorper mattis.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="cursor-pointer bg-purple-700 text-white px-6 flex items-center rounded-sm hover:bg-purple-800 hover:text-white transition hover:animate-pulse">Get a Started
                        <GoArrowUpRight />
                    </button>
                    <a href="#" className="flex items-center text-red border-2 border-white p-5 rounded-full hover:bg-white hover:text-purple-700 transition hover:animate-pulse hover:shadow-slate-100">
                        <IoIosPlay className=" " />
                    </a>
                </div>
            </div>
            <div className="mt-6 md:mt-0 md:w-1/2 hidden lg:block flex justify-end">
                <Image src="/image/hero.webp" width={500} height={500} alt="AI User" className="rounded-lg" />
            </div>
        </section>
    );
};

export default Hero;