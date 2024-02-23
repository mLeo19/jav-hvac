import React from 'react'
import Image from 'next/image'

const Info = ({ heading, title, desc, features, img }) => {
  return (
    <div className='overflow-hidden bg-gray-50 dark:bg-gray-900 py-9'>
      <div className='mx-auto max-w-7xl px-9 sm:px-20 md:px-32 lg:px-16 flex items-center'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 place-items-center justify-center'>
          <div className="lg:max-w-lg">
            <div className="lg:pr-8">
              <h2 className="text-base font-semibold leading-7 text-blue-500">{heading}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">{title}</p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {desc}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-gray-50">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className='lg:py-24'>
            <Image
              src={img}
              alt="Product screenshot"
              className="w-[24rem] shadow-xl ring-1 ring-gray-400/10 sm:w-[38rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info