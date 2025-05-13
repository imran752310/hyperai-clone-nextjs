import Image from "next/image";
import { FaPhoneVolume } from "react-icons/fa6";
import { RiLineChartFill } from "react-icons/ri";

const About = () => {
  return (
    <section className="w-[90%] mx-auto my-20 flex flex-col md:flex-row items-center py-16 gap-20">
      <div className="relative w-full md:w-1/2">
        <Image
          src="/image/howweare.webp"
          width={500}
          height={500}
          alt="AI Developer"
          className="rounded-lg shadow-lg my-5 lg:block"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        />
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="lg:absolute bottom-10 left-[200px] text-center  bg-gradient-to-t from-blue-800 to-purple-500 text-white  rounded-lg lg:w-[63%]  shadow-lg"
        >
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
      <div className="w-full md:w-1/2">
        <h2 className="text-purple-700 text-md font-bold">WHO WE ARE</h2>
        <h1
          data-aos="fade-up"
          data-aos-offset="200"
          className="text-4xl font-bold mt-2"
        >
          Where Intelligence Meets Acceleration
        </h1>
        <p
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="text-gray-600 mt-4"
        >
          At HyperAI, we are redefining the future of artificial intelligence
          with cutting-edge technology that accelerates innovation. Our mission
          is to develop intelligent, scalable, and high-performance AI solutions
          that empower businesses to work smarter and faster. Whether it’s
          automation, machine learning, or data-driven decision-making, we push
          the boundaries of what AI can achieve. With a team of AI experts and a
          passion for technological excellence, HyperAI delivers next-generation
          solutions that drive real impact.
        </p>
        <ul className="mt-4 font-semibold space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-purple-700">✔</span> High-Speed AI Solutions
          </li>
          <li className="flex items-center gap-2">
            <span className="text-purple-700">✔</span> Innovative & Future-Ready
          </li>
          <li className="flex items-center gap-2">
            <span className="text-purple-700">✔</span> Seamless Integration
          </li>
        </ul>
        <button className="bg-purple-700 text-white px-6 py-3 rounded-md mt-6">
          Our Services →
        </button>
      </div>
    </section>
  );
};

export default About;
