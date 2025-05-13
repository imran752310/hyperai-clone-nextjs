"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import OurPartner from './Partner/OurPartner'
import Services from './Services/Services'
import Testimonial from './Testimonial/Testimonial'

import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div>
        <Hero />
        <About />
        <OurPartner />
        <Services />
        <Testimonial />
    </div>
  )
}

export default HomePage;