"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  "/image/logo1.webp",
  "/image/logo2.webp",
  "/image/logo3.webp",
  "/image/logo4.webp",
];

const SwiperCarousel = () => {
  return (
    <div className="w-[90%] mx-auto my-20">
      <Swiper
        spaceBetween={20}
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
            <div className="flex justify-center">
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                width={100}
                height={100}
                className=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
