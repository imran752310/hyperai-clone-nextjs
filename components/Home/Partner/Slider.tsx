"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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
  "/image/logo1.webp",
  "/image/logo2.webp",
  "/image/logo3.webp",
  "/image/logo4.webp",
  "/image/logo1.webp",
  "/image/logo2.webp",
  "/image/logo3.webp",
  "/image/logo4.webp",
];

const SwiperCarousel = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >
      {slides.map((slide, index) => (
        <div key={index}>
          <div className="flex justify-center">
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              width={100}
              height={100}
              className=""
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default SwiperCarousel;
