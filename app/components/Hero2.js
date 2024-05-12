'use client'
import React, {useEffect, useState} from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import { FaPhoneAlt } from "react-icons/fa";

export default function Hero2({heading, subheading}) {
  return (
    <div className='relative h-screen bg-black/60'>
      <ImgWrapper>
        <Image
          src="/bg-image.jpg"
          className="object-cover -z-10 "
          fill
          alt="Peacock with tail fanned out."
        />
      </ImgWrapper>
      <div className=' absolute h-full w-full flex justify-center items-center z-10'>
        <div className=" relative flex flex-col justify-center items-center px-3 z-10">
          <motion.h1
            className="text-center text-5xl md:text-6xl text-white font-bold drop-shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {heading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className='mt-6 px-10 text-xl md:text-2xl font-bold drop-shadow-lg flex justify-center text-center leading-8 text-blue-500 opacity-90'
          >
          {subheading}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
            className='mt-10 flex flex-col sm:flex-row gap-y-4 items-center justify-center gap-x-6'
          >
            <Link 
              className="group  bg-gray-900 text-white px-5 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 border border-white/10 hover:bg-gray-950 active:scale-105 transition"
              href="tel:+15615368433"
            >
              +1 (561) 536 - 8433 {" "}
              <FaPhoneAlt className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>
            <Link className='font-semibold leading-6 text-white text-xl hover:text-2xl transition-all ease-in-out' href='/contact'>
              Contact Us <span aria-hidden='true'>→</span>
            </Link>
          </motion.div>              
        </div>
      </div>
    </div>
  )
}

const ImgWrapper = ({ children }) => {
  
  return (
    <>
      <div style={{ position: "fixed", width: "100%", height: "100vh", top: "0", }} className='-z-10'>
        <div className='relative h-screen w-full -z-10'>
          {children}       
        </div>
      </div>
    </>
  )
}