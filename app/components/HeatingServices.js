'use client'

import React, {useState} from 'react'
import ServiceCard from './ServiceCard'

const HeatingServices = () => {
  let [services] = useState({
    'Heat Pump Repair': {
      heading: 'Heat Pump Repair',
      description: 'This is our description for heat pump repairs.',
      image: '/air-conditioner-system.jpg',
      href: 'heat-pump-repair'
    },
    'Heat Pump Installation': {
      heading: 'Heat Pump Installation',
      description: 'This is our description for heat pump installation.',
      image: '/water-heater-system.jpg',
      href: 'heat-pump-installation'
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
          Seasoned Experts in Air Conditioning Solutions
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-900">
          Ranging from AC unit intallations to replacement and maintenance, our skills prioritize your satisfaction
          </p>
        </div>       
      </div>  
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 xl:gap-x-8 lg:px-20 xl:px-36 pt-4">
        {Object.values(services).map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default HeatingServices