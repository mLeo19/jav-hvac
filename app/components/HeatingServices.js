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


const HeatingServices = () => {
  let [services] = useState({
    'Heat Pump Repair': {
      heading: 'Heat Pump Repair',
      description: 'Count on us for efficient and prompt heat pump repair services. Our skilled technicians are adept at diagnosing and resolving issues to ensure your heat pump operates effectively, providing both heating and cooling as needed.',
      image: '/heat-pump-repair.jpeg',
      href: 'heat-pump-repair'
    },
    'Heat Pump Installation': {
      heading: 'Heat Pump Installation',
      description: 'Optimize your home\'s heating and cooling efficiency with our professional heat pump installation services. Our experts will assess your needs and seamlessly install a heat pump system, offering year-round comfort and energy efficiency.',
      image: '/heat-pump-installation.JPG',
      href: 'heat-pump-installation'
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
          Seasoned Experts in Heating Solutions
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-900 dark:text-gray-300">
          Ranging from heat pump repair to installations, our skills prioritize your satisfaction
          </p>
        </div>       
      </div>  
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 xl:gap-x-8 lg:px-20 xl:px-36 pt-4">
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

export default HeatingServices