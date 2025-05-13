"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const slides = [
  "/image/user1.webp",
  "/image/user2.webp",
  "/image/user3.webp",
  "/image/user4.webp",
  "/image/user1.webp",
  "/image/user2.webp",
  "/image/user3.webp",
  "/image/user4.webp",
];

const TestimonialCarousel = () => {
  return (
    <div className="w-[90%] mx-auto my-20">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex flex-col justify-start hover:bg-purple-700 p-5 rounded-lg hover:text-white  ">
            <p className="py-5">
              HyperAI revolutionized our operations with AI-driven automation.
              Our efficiency skyrocketed, & operational costs significantly
              decreased!
            </p>

            <div className="">
              <div className="flex items-center gap-3">
                <Image
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  width={60}
                  height={60}
                  className=" rounded-full"
                />
                <div>
                  <h4>— Christopher Hayes</h4>
                  <p className="text-[8px] text-purple-700 hover:text-white">
                    Customer Experience Manage
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
