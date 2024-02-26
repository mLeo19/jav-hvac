'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { sendEmail } from '../utils/sendEmails'
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";
import { useRef } from 'react';
import SubmitBtn from './SubmitBtn';

const ContactForm = () => {

  const formRef = useRef(null)

  return (
    <div className='max-w-full mx-auto flex justify-center items-center overflow-hidden bg-gray-50 dark:bg-gray-900'>
      <motion.section 
      className="flex justify-center items-center"
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
        <div className="my-8 lg:my-14 px-8 mx-auto max-w-screen-md sm:px-6 lg:max-w-7xl lg:px-8">
          <div className='max-w-screen-md'>
            <h2 className="text-3xl font-medium capitalize mb-8 text-center text-gray-900 dark:text-gray-50">Let's Get in Touch</h2>
            <p className="mb-8 lg:mb-16 text-center text-gray-500 dark:text-white/80 sm:text-xl">Whether you need a quick AC fix or a comprehensive HVAC solution, our skilled technicians are just a message away. Fill out the form below to schedule service, ask a question, or discuss your heating and cooling needs.</p>
          </div>
          <div className='max-w-screen-md'>
          <form
            ref={formRef}
            className="mt-10 flex flex-col dark:text-black"
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

  
              if (error) {
                toast.error(error);
                console.log(error)
                return;
              }
  
              console.log(data)
              formRef.current?.reset()
              toast.success("Email sent successfully!");     
          }}
          >
            <input
              className="h-14 mb-3 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
            />
            <input
              className="h-14 mb-3 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="senderName"
              id="senderName"
              type="text"
              required
              maxLength={500}
              placeholder="Your name"
            />
            <textarea
              className="h-52 mb-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="message"
              placeholder="Your message"
              required
              maxLength={5000}
            />
            <SubmitBtn />
            
          </form>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default ContactForm 