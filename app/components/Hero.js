'use client'
import React from "react"
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

export default function Hero({bg, heading, subheading}) {
  // TODO: Fix parallax
  let {scrollY} = useScroll();
  let y = useTransform(scrollY, [0, 1000], ["0%", "100%"]);
  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-black">
      <motion.div /*style={{y}}*/ className='absolute top-0 left-0 right-0 bottom-0' >
        <Image
          src={bg}
          alt="Hero Image"
          fill
          className='opacity-40 object-cover duration-700 ease-in-out'   
        />
      </motion.div>
      <div className="relative flex flex-col justify-center items-center px-3 z-10">
        <h1 className="text-center text-5xl md:text-6xl text-white font-bold drop-shadow-lg">
          {heading}
        </h1>
        <p className='mt-6 px-10 text-xl md:text-2xl font-bold drop-shadow-lg flex justify-center text-center leading-8 text-blue-500 opacity-90'>{subheading}</p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link className='bg-transparent leading-8 hover:bg-blue-500 text-white hover:text-white font-semibold py-2 px-4 border border-white shadow-xl transition ease-in-out text-lg md:text-xl'
            href="tel:+15615368433"
          >
            +1 (561) 536 - 8433
          </Link>
          <Link className='font-semibold leading-6 text-white text-lg md:text-xl hover:text-2xl transition-all ease-in-out' href='/contact'>
            Contact Us <span aria-hidden='true'>→</span>
          </Link>
        </div>              
      </div>
    </div>
  )
}
  