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

const ExtraServices = () => {
  let [services] = useState({
    'Mini Splits': {
      heading: 'Mini Splits',
      description: 'Explore the flexibility of mini-split systems for personalized comfort in specific areas of your home or office. Our mini-split services include installation and maintenance, offering efficient heating and cooling solutions with minimal impact on your space.',
      image: '/mini-splits.jpg',
      href: 'mini-splits'
    },
    'Refrigeration': {
      heading: 'Refrigeration',
      description: 'Ensure the proper functioning of your refrigeration systems with our expert services. From installation of commercial refrigeration units to regular maintenance, we keep your systems running smoothly for optimal cooling and preservation.',
      image: '/refrigeration.jpg',
      href: 'refrigeration'
    },
    'Smart Thermostats': {
        heading: 'Smart Thermostats',
        description: 'Embrace energy efficiency and convenience with our smart thermostat installations. Take control of your HVAC system remotely, optimize temperature settings, and reduce energy costs with cutting-edge smart thermostat technology.',
        image: '/smart-thermostats.jpg',
        href: 'smart-thermostats'
      },
  })
  return (
    <div className='max-w-full bg-gray-50 dark:bg-gray-900'>
    <div className='max-w-2xl mx-auto py-16 px-6 lg:max-w-7xl lg:px-8'>
      <div className='flex items-center justify-center'>
        <div className='sm:text-center'>
          <h2 className="text-lg lg:text-xl font-semibold leading-7 text-blue-500">
          100% Satisfaction Guaranteed
          </h2>
          <p className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Explore Our Extra Services!
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-900 dark:text-gray-300">
          Ranging from mini-splits to smart thermostats, our skills prioritize your satisfaction
          </p>
        </div>       
      </div>  
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 xl:gap-x-8 lg:grid-cols-3 pt-4">
        {Object.values(services).map((service, idx) => (
          <motion.div
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
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default ExtraServices