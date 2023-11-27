'use client'

import React, {useState} from 'react'
import ServiceCard from './ServiceCard'

const AirQualityServices = () => {
  let [services] = useState({
    'Dehumidifiers': {
      heading: 'Dehumidifiers',
      description: 'Create a healthier indoor environment by controlling excess humidity with our dehumidifier solutions. We offer installation and maintenance services to keep humidity levels in check, promoting comfort and preventing mold and mildew growth.',
      image: '/dehumidifier.webp',
      href: 'dehumidifiers'
    },
    'Air Purification': {
      heading: 'Air Purification',
      description: 'Breathe cleaner air with our air purification services. We provide installation of advanced air purifiers to remove contaminants, allergens, and pollutants, ensuring your indoor air is fresh and safe for everyone.',
      image: '/air-purification.jpg',
      href: 'air-purification'
    },
    'UV Light': {
      heading: 'UV Light',
      description: 'Enhance your indoor air quality with UV light installations. Our UV light solutions help eliminate airborne bacteria and viruses, providing an extra layer of protection for a healthier living or working space.',
      image: '/uv-light.jpg',
      href: 'uv-light'
    },
  })
  return (
    <div className='max-w-full bg-white'>
    <div className='max-w-2xl mx-auto py-16 px-6 lg:max-w-7xl lg:px-8'>
      <div className='flex items-center justify-center pb-8'>
        <div className='sm:text-center'>
          <h2 className="text-lg lg:text-xl font-semibold leading-7 text-blue-500">
          100% Satisfaction Guaranteed
          </h2>
          <p className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
          Our Quality Work Leads to Quality Air
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-900">
          Ranging from air purification to HVAC UV lights, our skills prioritize your satisfaction
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