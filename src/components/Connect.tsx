import { Disclosure } from '@headlessui/react'
import { arrowdownicon } from '../entryFiles/filepath'

import { questions } from "../data/mockdata"
import { team } from "../entryFiles/filepath"

const Connect = () => {
  return (
    <div className="my-16 px-6 max-w-7xl mx-auto">
        <img src={team} alt="" className='w-full' />
        <div className="mt-8 lg:flex items-center gap-16">
            <h3 className="flex-1 text-2xl md:text-4xl leading-normal">We connect our customers with the best, and help them keep up-and stay open.</h3>
            <div className="flex-1">
                <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {questions.map(({id, text}) => (
                    <Disclosure as="div" key={id} className="pt-6">
                        {({ open }) => (
                        <>
                            <dt>
                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                <span className="text-base font-semibold leading-7">{text}</span>
                                <span className="ml-6 flex h-7 items-center">
                                {open ? (
                                    <img src={arrowdownicon} className="h-6 w-6 rotate-180" aria-hidden="true" />
                                ) : (
                                    <img src={arrowdownicon} className="h-6 w-6 " aria-hidden="true" />
                                )}
                                </span>
                            </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                            <p className="text-base leading-7 text-gray-600">{text}</p>
                            </Disclosure.Panel>
                        </>
                        )}
                    </Disclosure>
                    ))}
                </dl>
            </div>
        </div>
    </div>
  )
}

export default Connect