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


const CoolingServices = () => {
  let [services] = useState({
    'AC Repair': {
      heading: 'AC Repair',
      description: 'Experience swift and reliable air conditioning repair services to address any cooling issues. Our skilled technicians are equipped to diagnose and fix AC problems efficiently, ensuring your system runs smoothly and efficiently.',
      image: '/ac-repair.jpg',
      href: 'ac-repair'
    },
    'AC Installation': {
      heading: 'AC Installation',
      description: 'Trust our experts for seamless air conditioning installations tailored to your space. Whether it\'s a new construction project or an upgrade, we deliver precise and professional AC installations to keep your indoor environment comfortably cool.',
      image: '/ac-installation.jpg',
      href: 'ac-installation'
    },
    'AC Maintenance': {
      heading: 'AC Maintenance',
      description: 'Extend the life and efficiency of your air conditioning system with our thorough maintenance services. From routine check-ups to proactive adjustments, our maintenance programs are designed to prevent issues and keep your AC unit performing at its best.',
      image: '/ac-maintenance.jpg',
      href: 'ac-maintenance'
    },
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
          Seasoned Experts in Air Conditioning Solutions
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-900 dark:text-gray-300">
          Ranging from AC unit intallations to replacement and maintenance, our skills prioritize your satisfaction
          </p>
        </div>       
      </div>  
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
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

export default CoolingServices