'use client'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import NavItem from './NavItem'

const navigation = [
  { name: 'Cooling', href: '/cooling', current: false , 
    submenu: [
      {title: 'AC Repair', href: '/cooling', current: false},
      {title: 'AC Installation', href: 'ac-installation', current: false},
      {title: 'AC Maintenance', href: 'ac-maintenance', current: false}] 
  },
  { name: 'Heating', href: '/heating', current: false,
    submenu: [
      {title: 'Heat Pump Repair', href: '/heating', current: false},
      {title: 'Heat Pump Installation', href: 'heat-pump-installation', current: false},
    ]
  },
  { name: 'Air Quality', href: '/air-quality', current: false ,
    submenu: [
      {title: 'Dehumidifiers', href: '/air-quality', current: false},
      {title: 'Air Purification', href: 'air-purification', current: false},
      {title: 'UV Light', href: 'uv-light', current: false}] 
  },
  { name: 'Extras', href: '/extras', current: false ,
    submenu: [
      {title: 'Mini Splits', href: '/extras', current: false},
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
    <Disclosure as="nav" className="bg-slate-900 fixed z-50 w-full border-b border-slate-700">
      {({ open }) => (
        <>
          {/*  */}
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-between ">
                {open ? (
                  <Disclosure.Button
                  as="a"
                  href='/'
                  className={classNames(
                  'flex flex-shrink-0 items-center transition-all ease-in-out'
                  )}
                >
                  <Image
                    className="h-16 w-auto brightness-200"
                    src="/jav-contractors-logo.png"
                    alt="JAV Cooling"
                    width={1000}
                    height={1000}
                  />
                </Disclosure.Button>
                ) : (
                  <Link href='/' className="flex flex-shrink-0 items-center transition-all ease-in-out">
                  <Image
                    className="h-16 w-auto brightness-200"
                    src="/jav-contractors-logo.png"
                    alt="JAV Cooling"
                    width={1000}
                    height={1000}
                  />
                </Link>
                )}
                
                <div className="hidden lg:ml-6 lg:flex items-center ">
                  <div className="flex space-x-1">
                    {navigation.map((item) => (
                      <NavItem item={item} key={item.name}/>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                {/* Contact Us Button */}
                <Link href="/contact" className='relative ml-3 hidden lg:flex bg-transparent hover:bg-blue-500 font-semibold py-2 px-4 border transition ease-in-out text-md text-center mr-0'>Contact Us</Link>
              </div>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-3 py-2">
              {navigation.map((item, idx) => (
                <div key={idx} className="mx-auto w-full border-2 border-white py-1 px-4">
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
                    
                    <Disclosure.Button
                      key={idx}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-white',
                        'flex w-full justify-between px-4 py-2 text-left text-base font-medium text-white'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
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
              <div className='flex justify-center items-center'>
              <Disclosure.Button
                as="a"
                href='/contact'
                className={classNames(
                'my-2 relative flex bg-transparent hover:bg-blue-500 font-semibold py-2 px-4 border-2 transition ease-in-out text-md text-center mr-0'
                )}
              >
                Contact Us
              </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
