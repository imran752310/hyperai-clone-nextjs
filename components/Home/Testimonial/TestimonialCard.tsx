"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  "/image/user1.webp",
  "/image/user2.webp",
  "/image/user3.webp",
  "/image/user4.webp",
];

const TestimonialCarousel = () => {
  return (
    <div className="w-[90%] mx-auto my-20">
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay]}
        breakpoints={{
            640: { slidesPerView: 2 }, // Show 2 logos on tablets
            1024: { slidesPerView: 4 }, // Show 4 logos on desktop
        }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-start hover:bg-purple-700 p-5 rounded-lg hover:text-white ">
                <p className="py-5">HyperAI revolutionized our operations with AI-driven automation. Our efficiency skyrocketed, & operational costs significantly decreased!</p>

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
                <p className="text-[8px]">Customer Experience Manage</p>
              </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
