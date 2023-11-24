'use client'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Cooling', href: '/cooling', current: false , 
    submenu: [
      {title: 'AC Repair', href: 'ac-repair', current: false},
      {title: 'AC Installation', href: 'ac-installation', current: false},
      {title: 'AC Maintenance', href: 'ac-maintenance', current: false}] 
  },
  { name: 'Heating', href: '/heating', current: false,
    submenu: [
      {title: 'Heat Pump Repair', href: 'heat-pump-repair', current: false},
      {title: 'Heat Pump Installation', href: 'heat-pump-installation', current: false},
    ]
  },
  { name: 'Air Quality', href: '/air-quality', current: false ,
    submenu: [
      {title: 'Dehumidifier', href: 'dehumidifier', current: false},
      {title: 'Air Purification', href: 'air-purification', current: false},
      {title: 'UV Light', href: 'uv-light', current: false}] 
  },
  { name: 'Extras', href: '/services', current: false ,
    submenu: [
      {title: 'Mini Splits', href: 'mini-splits', current: false},
      {title: 'Refrigeration', href: 'refrigeration', current: false},
      {title: 'Smart Thermostats', href: 'smart-thermostats', current: false}]
  },
  { name: 'About', href: '/about', current: false },
  { name: 'Financing', href: '/financing', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 fixed z-50 w-full">
      {({ open }) => (
        <>
          {/*  */}
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-between ">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="h-12 lg:h-16 w-auto brightness-200"
                    src="/jav-contractors-logo.png"
                    alt="JAV Cooling"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="hidden md:ml-3 lg:ml-6 md:flex items-center ">
                  <div className="flex space-x-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm lg:text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                {/* Profile dropdown */}
                <Link href="/contactUs" className='relative ml-3 hidden md:flex bg-transparent hover:bg-blue-500 font-semibold py-2 px-4 border transition ease-in-out text-sm lg:text-md text-center mr-0'>Contact Us</Link>
              </div>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, idx) => (
                <div key={idx} className="mx-auto w-full border-2 border-white p-2 px-6">
                  {item.submenu ? (
                    <>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-base font-medium text-white">
                              <span>{item.name}</span>
                              <ChevronUpIcon
                                className={`${
                                open ? 'rotate-180 transform' : ''
                                } h-5 w-5 text-white`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="border-t-2 border-white px-4 py-1 text-sm text-white">
                              {item.submenu.map((subItem, subIdx) => (
                                <Disclosure.Button
                                key={subIdx}
                                as="a"
                                href={subItem.href}
                                className={classNames(
                                  subItem.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                  'block rounded-md px-3 py-2 text-base font-medium'
                                )}
                                aria-current={subItem.current ? 'page' : undefined}
                              >
                                {subItem.title}
                              </Disclosure.Button>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </>
                  ) : (
                    <Link key={idx} href={item.href} className='flex w-full justify-between px-4 py-2 text-left text-base font-medium text-white'>{item.name}</Link>
                  )}              
                </div>
                /* // TODO: Include Disclosure Within Disclosure
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
                */
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
