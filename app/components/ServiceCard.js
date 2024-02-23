'use client'

import React from 'react'
import Image from 'next/image';
import { useState } from 'react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ServiceCard = ({ service }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <a href={service.href} className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
        <Image
          alt=""
          src={service.image}
          fill
          style={{objectFit:"cover"}}
          className={cn(
            'group-hover:opacity-75 duration-700 ease-in-out',
            isLoading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
          onLoad={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-base text-gray-700 dark:text-white font-bold text-center">{service.heading}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900 dark:text-gray-200">{service.description}</p>
    </a>
  )
}

export default ServiceCard
