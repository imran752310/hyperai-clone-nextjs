import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import OurPartner from './Partner/OurPartner'
import Services from './Services/Services'
import Testimonial from './Testimonial/Testimonial'

const HomePage = () => {
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