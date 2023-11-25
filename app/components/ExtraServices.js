'use client'

import React, {useState} from 'react'
import ServiceCard from './ServiceCard'

const ExtraServices = () => {
  let [services] = useState({
    'Mini Splits': {
      heading: 'Mini Splits',
      description: 'This is our description for mini splits.',
      image: '/air-conditioner-system.jpg',
      href: 'mini-splits'
    },
    'Refrigeration': {
      heading: 'Refrigeration',
      description: 'This is our description for refrigeration.',
      image: '/water-heater-system.jpg',
      href: 'refrigeration'
    },
    'Smart Thermostats': {
        heading: 'Smart Thermostats',
        description: 'This is our description for heat smart thermostats.',
        image: '/water-heater-system.jpg',
        href: 'smart-thermostats'
      },
  })
  return (
    <div className='max-w-full bg-white'>
    <div className='max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className='flex items-center justify-center'>
        <div className='sm:text-center'>
          <h2 className="text-lg lg:text-xl font-semibold leading-7 text-blue-500">
          100% Satisfaction Guaranteed
          </h2>
          <p className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
          Explore Our Extra Services!
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-900">
          Ranging from mini-splits to smart thermostats, our skills prioritize your satisfaction
          </p>
        </div>       
      </div>  
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 xl:gap-x-8 lg:grid-cols-3 pt-4">
        {Object.values(services).map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default ExtraServices