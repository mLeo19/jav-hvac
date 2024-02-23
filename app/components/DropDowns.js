import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function DropDowns() {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-transparent py-2 px-0">
        <Disclosure defaultOpen={true} >
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between my-2 rounded-lg bg-blue-100 px-4 py-2 text-left text-lg font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>Quality Service & Support</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4  pb-2 text-md sm:text-lg text-gray-900 dark:text-gray-50">
              Immerse yourself in unparalleled service excellence. We prioritize your satisfaction, delivering top-tier solutions with meticulous attention to detail.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between my-2 rounded-lg bg-blue-100 px-4 py-2 text-left text-lg font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>Transparent Pricing Assurance</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4  pb-2 text-md sm:text-lg text-gray-900 dark:text-gray-50">
              We believe in openness and honesty, ensuring you understand and appreciate the value of our services from the initial quote to the completion of every project.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between my-2 rounded-lg bg-blue-100 px-4 py-2 text-left text-lg font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>Innovation Unleashed</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4  pb-2 text-md sm:text-lg text-gray-900 dark:text-gray-50">
              We bring innovation to your doorstep, ensuring your spaces are not just comfortable but also equipped with cutting-edge solutions that embrace the future of climate control.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
