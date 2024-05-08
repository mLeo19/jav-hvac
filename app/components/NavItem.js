import React from 'react'
import { Popover, Transition, PopoverButton, PopoverPanel, CloseButton, useClose } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs'
import { Fragment, useRef } from 'react'
import Link from 'next/link'
import { forwardRef } from 'react'

const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props
  return (
    <Link href={href} ref={ref} {...rest}>
      {children}    
    </Link>
  )
})

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const NavItem = ({item}) => {
    const buttonRef = useRef(null)
    const timeoutDuration = 150
    let timeout

    let close = useClose()
  
    const closePopover = () => {
      return buttonRef.current?.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "Escape",
          bubbles: true,
          cancelable: true
        })
      )
    }
  
    const onMouseEnter = (open) => {
      clearTimeout(timeout)
      if (open) return
      return buttonRef.current?.click()
    }
  
    const onMouseLeave = (open) => {
      if (!open) return
      timeout = setTimeout(() => closePopover(), timeoutDuration)
    }
  return (
    <div
      className='px-3 py-2 text-sm lg:text-base font-medium'
    >
      {item.submenu ? (
        <>
          <Popover className="relative">
            {({ open }) => (
              <>
                <div onMouseLeave={onMouseLeave.bind(null, open)}>
                  <PopoverButton
                    ref={buttonRef}
                    className={`
                      ${open ? "" : "text-opacity-90"}
                      group inline-flex items-center bg-transparent text-base font-medium py-2 focus:outline-none transition duration-150 ease-in-out hover:text-blue-700`}
                    onMouseEnter={onMouseEnter.bind(null, open)}
                    onMouseLeave={onMouseLeave.bind(null, open)}
                  >
                  <span className=''>{item.name}</span>
                  <BsChevronDown
                    className={`${open ? "" : "text-opacity-70"}
                     ml-1 h-4 w-4 `}
                    aria-hidden="true"
                  />
                </PopoverButton>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-[50ms]"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-[50ms]"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <PopoverPanel className="absolute z-10 w-48 px-4 mt-0 transform -translate-x-1/2 left-1/2 sm:px-0">
                    <div
                      className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5"
                      onMouseEnter={onMouseEnter.bind(null, open)}
                      onMouseLeave={onMouseLeave.bind(null, open)}
                    >
                      <div className="relative grid gap-8 border dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-7 lg:grid-cols-1">
                        {item.submenu.map((subItem) => (
                          <CloseButton
                            onClick={() => close()}
                            as={MyLink}
                            key={subItem.title}
                            href={subItem.href}
                            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring focus-visible:ring-opacity-50"
                          >
                            <div className="mx-4">
                              <p className="text-sm font-medium dark:text-white">
                                {subItem.title}
                              </p>
                            </div>
                          </CloseButton>
                        ))}
                        <CloseButton
                          onClick={() => close()}
                          as={MyLink}
                          href={item.href}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring focus-visible:ring-opacity-50"
                        >
                          <div className='mx-4'>
                            <p className="text-sm font-medium dark:text-white">
                              View All <span aria-hidden='true'>→</span>
                            </p>
                          </div>
                        </CloseButton>
                      </div>
                      {/*
                      <div className="relative border border-slate-500 bg-slate-700 p-7">
                        <a
                          href={item.href}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out hover:bg-slate-800 focus:outline-none focus-visible:ring focus-visible:ring-opacity-50"
                        >
                          <div className='ml-4'>
                            <p className="text-sm font-medium text-white">
                              View All
                            </p>
                          </div>
                        </a>
                      </div>
                      */}
                    </div>
                  </PopoverPanel>
                </Transition>
                </div>
              </>
            )}
          </Popover>
        </>
      ) : (
        <CloseButton
          onClick={() => close()}
          as={MyLink}
          className="inline-flex items-center bg-transparent text-base font-medium py-2 focus:outline-none transition duration-150 ease-in-out hover:text-blue-700" 
          href={item.href}>
            {item.name}
        </CloseButton>
      )}
    </div>
  )
}

export default NavItem