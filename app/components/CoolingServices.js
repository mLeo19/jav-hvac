'use client'

import React, {useState} from 'react'
import ServiceCard from './ServiceCard'

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
    <div className='max-w-full bg-white'>
    <div className='max-w-2xl mx-auto py-16 px-6 lg:max-w-7xl lg:px-8'>
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