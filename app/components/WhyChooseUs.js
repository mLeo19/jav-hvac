'use client'
import React from 'react'
import DropDowns from './DropDowns'

const WhyChooseUs = () => {
  return (
    <div className='flex items-center justify-center bg-white'>
      <div className='w-full grid grid-cols-1 md:grid-cols-2'>
        <div className='w-full h-full flex items-center justify-center p-9 lg:px-28 bg-slate-900'>
          <div className=''>
            <h2 className='text-lg font-semibold leading-7 text-blue-500'>Financing Available</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white">For Clients of All Economic Backgrounds</p>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              With a commitment to excellence and decades of combined experience, our partnership with the <a href="/financing" className='text-blue-500'>PACE Program</a> offers financing strategies that leverage the value of your home. Call us to learn more!
            </p>
            <div className="flex justify-center my-3">
              <a 
                className='text-white bg-transparent leading-8 hover:bg-blue-500 font-bold py-2 px-4 border-2 border-whitetransition ease-in-out text-sm lg:text-md text-center mr-3 md:mr-0'
                href="tel:+15615368433"
              >
                +1 (561) 536 - 8433
              </a>
            </div>
          </div>
        </div>
        <div className='w-full h-full flex items-center justify-center p-9 lg:px-28'>
          <div className='w-full '>
            <p className='text-4xl text-blue-500 font-semibold'>Why Should You Choose JAV Cooling?</p>
            <DropDowns />
          </div>
        </div>
      </div>
    </div>
  )    
}

export default WhyChooseUs