import React from 'react'
import Image from 'next/image'

const LogoCloud = () => {
  return (
    <div>
      <div className="bg-white  pt-12 px-4 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="my-0 text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the most innovative teams in the field!
        </h2>
        <div className="relative mx-auto grid max-w-lg grid-cols-3 items-center gap-x-8 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
          <Image
            className="max-h-32 w-full object-contain lg:col-span-1"
            src="/bbb-logo.svg"
            alt="BBB"
            width={158}
            height={158}
          />
          <Image
            className="max-h-16 w-full object-contain lg:col-span-1"
            src="/fortifi-logo.svg"
            alt="Fortifi"
            width={158}
            height={158}
          />
          <Image
            className="max-h-24 w-full object-contain lg:col-span-1"
            src="/frsa-logo.jpg"
            alt="FRSA"
            width={158}
            height={158}
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default LogoCloud