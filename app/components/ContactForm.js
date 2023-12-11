'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { sendEmail } from '../utils/sendEmails'

const ContactForm = () => {

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    // TODO: Finish email sending
    sendEmail(data)
  }

  return (
    <div className='max-w-full mx-auto flex justify-center items-center overflow-hidden bg-white'>
      <section className="flex justify-center items-center">
        <div className="my-8 lg:my-14 px-8 mx-auto max-w-screen-md sm:px-6 lg:max-w-7xl lg:px-8">
          <div className='max-w-screen-md'>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Let's Get in Touch</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Whether you need a quick AC fix or a comprehensive HVAC solution, our skilled technicians are just a message away. Fill out the form below to schedule service, ask a question, or discuss your heating and cooling needs.</p>
          </div>
          <div className='max-w-screen-md'>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@javcontractors.com" 
                {...register('email', { required: true })}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you"
                {...register('subject', { required: true })}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Project Description</label>
              <textarea id="description" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Tell us about your project..."
                {...register('description', { required: true })}
              ></textarea>
            </div>
            <button type="submit" className="bg-transparent hover:bg-blue-500 text-black hover:text-white font-semibold py-2 px-4 border border-black rounded-md shadow-md transition ease-in-out">Send message</button>
          </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactForm 