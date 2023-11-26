'use client'

import React, {useState} from 'react'
import ServiceCard from './ServiceCard'

const CoolingServices = () => {
  let [services] = useState({
    'AC Repair': {
      heading: 'AC Repair',
      description: 'This is our description for ac repairs.',
      image: '/ac-repair.jpg',
      href: 'ac-repair'
    },
    'AC Installation': {
      heading: 'AC Installation',
      description: 'This is our description for AC installation.',
      image: '/ac-installation.jpg',
      href: 'ac-installation'
    },
    'AC Maintenance': {
      heading: 'AC Maintenance',
      description: 'This is the description for AC maintenance.',
      image: '/ac-maintenance.jpg',
      href: 'ac-maintenance'
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
          Seasoned Experts in Air Conditioning Solutions
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

export default CoolingServices