'use client'

import React, {useState} from 'react'
import ServiceCard from './ServiceCard'
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.07 * index,
    },
  }),
};

const Services = () => {
  let [services] = useState({
    'Cooling': {
      heading: 'Cooling Services',
      description: 'Ensure optimal comfort during warm seasons with our cooling solutions. From air conditioning installations to regular maintenance, we guarantee a cool and refreshing indoor environment.',
      image: '/air-conditioner-system.jpg',
      href: '/cooling'
    },
    'Heating': {
      heading: 'Heating Services',
      description: 'Stay warm and cozy in colder months with our expert heating services. Whether it\'s furnace installations, heat pump repairs, or efficient maintenance, we\'ve got your heating needs covered.',
      image: '/water-heater-system.jpg',
      href: '/heating'
    },
    'Air Quality': {
      heading: 'Air Quality',
      description: 'Breathe easy with our comprehensive air quality services. We offer indoor air solutions including air purifier installations, duct cleaning, and ventilation system improvements.',
      image: '/air-quality-pipes.jpg',
      href: '/air-quality'
    },
    'Extra Services': {
      heading: 'Extra Services',
      description: 'Beyond the basics, explore our additional services tailored to meet specific HVAC requirements such as mini-splits, refrigeration, and smart thermostat installations.',
      image: '/extra-services.jpg',
      href: '/extra-services'
    }
  })
  return (
    <div className='max-w-full bg-gray-50 dark:bg-gray-900'>
    <div className='max-w-2xl mx-auto py-16 px-6 lg:max-w-7xl lg:px-8'>
      <div className='flex items-center justify-center pb-8'>
        <div className='sm:text-center'>
          <h2 className="text-lg lg:text-xl font-semibold leading-7 text-blue-500">
          100% Satisfaction Guaranteed
          </h2>
          <p className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Florida Experts In HVAC Services
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-900 dark:text-white">
          Learn more about our HVAC services, which are catered to both residential and commercial clients
          </p>
        </div>       
      </div>  
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {Object.values(services).map((service, idx) => (
          <motion.li
          className='list-none'
          key={idx}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={idx}
          >
            <ServiceCard service={service} />
          </motion.li>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Services