import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='w-[95%]  mx-auto bg-gradient-to-r from-gray-100 to-gray-200 text-white  p-5 rounded-3xl'>
       <div className="flex flex-col md:flex-row items-center justify-between mt-5 ">
                <div data-aos="zoom-in-up" className="md:w-1/2 p-10 lg:p-5">
                    <span className="text-purple-700 text-md font-bold">Our Services</span>
                    <h1 className="text-4xl md:text-5xl text-black font-bold mt-4 ">
                        Let AI Take Your Business To The Next Level
                    </h1>
                  
                </div>
                <div data-aos="zoom-in-up" className="mt-6 md:mt-0 md:w-1/2 p-5 ">
                    <p className="mt-4 text-lg text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                        tellus, luctus nec ullamcorper mattis.
                    </p>
    
                    <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="cursor-pointer bg-purple-700 text-white py-2 px-6 flex items-center rounded-sm hover:bg-purple-800 hover:text-white transition hover:animate-pulse">Get a Started
                            <GoArrowUpRight />
                        </button>
                      
                    </div>
                </div>
            </div>
            <div className='p-5'>
              <ServiceCard />
            </div>
    </div>
  )
}

export default Services