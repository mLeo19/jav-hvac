'use client'

import React, {useState} from 'react'
import ServiceCard from './ServiceCard'

const AirQualityServices = () => {
  let [services] = useState({
    'Dehumidifiers': {
      heading: 'Dehumidifiers',
      description: 'This is our description for dehumidifiers.',
      image: '/air-conditioner-system.jpg',
      href: 'dehumidifiers'
    },
    'Air Purification': {
      heading: 'Air Purification',
      description: 'This is our description for air purification.',
      image: '/water-heater-system.jpg',
      href: 'air-purification'
    },
    'UV Light': {
      heading: 'UV Light',
      description: 'This is the description for UV light services.',
      image: '/air-quality-pipes.jpg',
      href: 'uv-light'
    },
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
          Our Quality Work Leads to Quality Air
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-900">
          Ranging from AC unit intallations to replacement and maintenance, our skills prioritize your satisfaction
          </p>
        </div>       
      </div>  
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        {Object.values(services).map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default AirQualityServices