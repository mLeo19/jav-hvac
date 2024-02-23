'use client'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import NavItem from './NavItem'
import { BsArrowRight} from "react-icons/bs";
import { motion } from "framer-motion";

const navigation = [
  { name: 'Cooling', href: '/cooling', current: false , 
    submenu: [
      {title: 'AC Repair', href: '/cooling/ac-repair', current: false},
      {title: 'AC Installation', href: '/cooling/ac-installation', current: false},
      {title: 'AC Maintenance', href: '/cooling/ac-maintenance', current: false}] 
  },
  { name: 'Heating', href: '/heating', current: false,
    submenu: [
      {title: 'Heat Pump Repair', href: '/heating/heat-pump-repair', current: false},
      {title: 'Heat Pump Installation', href: '/heating/heat-pump-installation', current: false},
    ]
  },
  { name: 'Air Quality', href: '/air-quality', current: false ,
    submenu: [
      {title: 'Dehumidifiers', href: '/air-quality/dehumidifiers', current: false},
      {title: 'Air Purification', href: '/air-quality/air-purification', current: false},
      {title: 'UV Light', href: '/air-quality/uv-light', current: false}] 
  },
  { name: 'Extras', href: '/extras', current: false ,
    submenu: [
      {title: 'Mini Splits', href: '/extras/mini-splits', current: false},
      {title: 'Refrigeration', href: '/extras/refrigeration', current: false},
      {title: 'Smart Thermostats', href: '/extras/smart-thermostats', current: false}]
  },
  { name: 'About', href: '/about', current: false },
  { name: 'Financing', href: '/financing', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <motion.div
    className='left-1/2 bg-gray-50 dark:bg-gray-900 fixed z-50 w-full border-b dark:border-gray-700 border-gray-200'
    initial={{ y: -100, x: "-50%", opacity: 0 }}
    animate={{ y: 0, x: "-50%", opacity: 1 }}
    >
    <Disclosure as="nav" className=" ">
      {({ open }) => (
        <>
          {/* TODO: Fix overflow scroll when opening all panels on mobile menu; DONE with a fixed height of 420px */}
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex py-3 items-center justify-between">
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
                <a href='/' className="flex flex-shrink-0 items-center transition-all ease-in-out ">
                  <Image
                    className="h-16 w-auto dark:brightness-200 brightness-125 "
                    src="/jav-contractors-logo.png"
                    alt="JAV Cooling"
                    width={1000}
                    height={1000}
                  />
                </a>         
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
                <Link
                  className="group bg-gray-900 text-white px-5 py-3 hidden lg:flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 border border-white/10 hover:bg-gray-950 active:scale-105 transition dark:bg-white dark:bg-opacity-10"
                  href="/contact"
                >
                  Contact Us{" "}
                  <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-3 py-2 h-[420px] max-h-full overflow-auto">
              {navigation.map((item, idx) => (
                <div key={idx} className="mx-auto w-full border-2 border-gray-900 dark:border-gray-300 py-1 px-4 text-gray-900 dark:text-gray-300">
                  {item.submenu ? (
                    <>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-base font-medium">
                              <span>{item.name}</span>
                              <ChevronUpIcon
                                className={`${
                                open ? 'rotate-180 transform' : ''
                                } h-5 w-5 `}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="border-t-2 border-gray-600 dark:border-gray-300 px-4 py-1 text-sm">
                              {item.submenu.map((subItem, subIdx) => (
                                <Disclosure.Button
                                  key={subIdx}
                                  as="a"
                                  href={subItem.href}
                                  className=
                                    'text-gray-900 dark:text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                                  
                                >
                                  {subItem.title}
                                </Disclosure.Button>
                                ))}
                                <Disclosure.Button
                                  as='a'
                                  href={item.href}
                                  className='text-gray-900 dark:text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                                >
                                  View All <span aria-hidden='true'>→</span>
                                </Disclosure.Button>
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
                      className='flex w-full justify-between px-4 py-2 text-left text-base font-medium'
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
                className='group bg-gray-900 text-white px-5 py-3 my-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 border border-white/10 hover:bg-gray-950 active:scale-105 transition dark:bg-white dark:bg-opacity-10'
              >
                Contact Us
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </motion.div>
  )
}
