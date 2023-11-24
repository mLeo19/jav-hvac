'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import { InView } from 'react-intersection-observer'
import ServiceCard from './ServiceCard'

const Services = () => {
  let [services] = useState({
    'Cooling': {
      heading: 'Cooling Services',
      description: 'This is our description for cooling services.',
      image: '/air-conditioner-system.jpg',
      href: '/cooling'
    },
    'Heating': {
      heading: 'Heating Services',
      description: 'This is our description for heating services.',
      image: '/water-heater-system.jpg',
      href: '/heating'
    },
    'Air Quality': {
      heading: 'Air Quality',
      description: 'This is the description for air quality',
      image: '/air-quality-pipes.jpg',
      href: '/air-quality'
    },
    'Extra Services': {
      heading: 'Extra Services',
      description: 'This is the description for extra services',
      image: '/extra-services.jpg',
      href: '/extra-services'
    }
  })
  return (
    <div className='max-w-full bg-white'>
    <div className='max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className='flex items-center justify-center pb-8'>
        <div className='sm:text-center'>
          <h2 className="text-lg lg:text-xl font-semibold leading-7 text-blue-500">
          100% Satisfaction Guaranteed
          </h2>
          <p className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
          Florida Experts In HVAC Services
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-900">
          Learn more about our HVAC services, which are catered to both residential and commercial clients
          </p>
        </div>       
      </div>  
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {Object.values(services).map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Services