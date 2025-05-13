import React from "react";
import TestimonialCarousel from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="my-14">
      <div className="text-center">
        <h2 className="text-purple-700 text-md font-bold">Tesimonials</h2>
        <h1 className="text-4xl font-bold mt-2">
          What Our Clients Say <br /> About HyperAI
        </h1>
        <div>
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
