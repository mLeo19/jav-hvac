'use client'
import React from 'react'
import DropDowns from './DropDowns'
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <div className='flex items-center justify-center bg-slate-50 dark:bg-slate-900'>
      <motion.div 
      className='w-full grid grid-cols-1 md:grid-cols-2'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      >
        <div className='w-full h-full flex items-center justify-center p-9 lg:px-28 '>
          <div className=''>
            <h2 className='text-lg font-semibold leading-7 text-blue-500'>Financing Available</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">For Clients of All Economic Backgrounds</p>
            <p className="mt-4 text-lg leading-8 text-gray-900 dark:text-gray-300">
              With a commitment to excellence and decades of combined experience, our partnership with the <a href="/financing" className='text-blue-500'>PACE Program</a> offers financing strategies that leverage the value of your home. Call us to learn more!
            </p>
            <div className="flex justify-center my-3">
              <a 
                className="group bg-gray-900 text-white px-5 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 border border-white/10 hover:bg-gray-950 active:scale-105 transition dark:bg-white dark:bg-opacity-10"
                href="tel:+15615368433"
              >
                +1 (561) 536 - 8433 {" "}
                <FaPhoneAlt className="opacity-70 group-hover:translate-x-1 transition" />
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
      </motion.div>
    </div>
  )    
}

export default WhyChooseUs