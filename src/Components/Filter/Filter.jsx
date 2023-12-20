import { Disclosure } from '@headlessui/react'
import { IoIosArrowUp } from "react-icons/io";
const Filter = () => {
    return (
            <div className="w-full">
                <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-0">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-base-200 px-4 py-2 text-left text-sm font-medium hover:bg-base-300 focus:outline-none focus-visible:ring focus-visible/75">
                                    <span>What is your refund policy?</span>
                                    <IoIosArrowUp
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-base-200 px-4 py-2 text-left text-sm font-medium hover:bg-base-300 focus:outline-none focus-visible:ring focus-visible/75">
                                    <span>Do you offer technical support?</span>
                                    <IoIosArrowUp
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                    No.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
    );
};

export default Filter;