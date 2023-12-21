import { Disclosure } from '@headlessui/react'
import { IoIosArrowUp } from "react-icons/io";
import { useCustomHook } from '../../Provider/Provider';
const Filter = () => {
    const { setSelected, Selected } = useCustomHook();
    const handleSelectedOption = (value) => {
        setSelected(value);
    }

    return (
        <div className="w-full">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-base-100 p-0">
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-base-200 px-4 py-2 text-left text-lg font-medium hover:bg-base-300 focus:outline-none focus-visible:ring focus-visible/75">
                                <span>Brand</span>
                                <IoIosArrowUp
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-lg text-gray-500">
                                <div className="form-control">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input
                                            onChange={() => handleSelectedOption('Apple')}
                                            checked={Selected === 'Apple'}
                                            type="checkbox" className="checkbox" />
                                        <span className="font-medium text-xl">Apple</span>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input
                                            onChange={() => handleSelectedOption('Samsung')}
                                            checked={Selected === 'Samsung'}
                                            type="checkbox" className="checkbox" />
                                        <span className="font-medium text-xl">Samsung</span>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input
                                            onChange={() => handleSelectedOption('Oppo')}
                                            checked={Selected === 'Oppo'}
                                            type="checkbox" className="checkbox" />
                                        <span className="font-medium text-xl">Oppo</span>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input
                                            onChange={() => handleSelectedOption('Huawei')}
                                            checked={Selected === 'Huawei'}
                                            type="checkbox" className="checkbox" />
                                        <span className="font-medium text-xl">Huawei</span>
                                    </label>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-base-200 px-4 py-2 text-left text-lg font-medium hover:bg-base-300 focus:outline-none focus-visible:ring focus-visible/75">
                                <span>Price</span>
                                <IoIosArrowUp
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-lg text-gray-500">
                                <input type="range" min={0} max="100" className="range" step="25" />
                                <div className="w-full flex justify-between text-xs px-2">
                                    <span>40k</span>
                                    <span>80k</span>
                                    <span>120k</span>
                                    <span>160k</span>
                                    <span>200k</span>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-base-200 px-4 py-2 text-left text-lg font-medium hover:bg-base-300 focus:outline-none focus-visible:ring focus-visible/75">
                                <span>OS</span>
                                <IoIosArrowUp
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-lg text-gray-500">
                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input type="checkbox" className="checkbox" />
                                        <span className="font-medium text-xl">IOS</span>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input type="checkbox" className="checkbox" />
                                        <span className="font-medium text-xl">Android</span>
                                    </label>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-base-200 px-4 py-2 text-left text-lg font-medium hover:bg-base-300 focus:outline-none focus-visible:ring focus-visible/75">
                                <span>Chipset</span>
                                <IoIosArrowUp
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-lg text-gray-500">
                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input type="checkbox" className="checkbox" />
                                        <span className="font-medium text-xl">Bionic</span>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input type="checkbox" className="checkbox" />
                                        <span className="font-medium text-xl">Snapdragon</span>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input type="checkbox" className="checkbox" />
                                        <span className="font-medium text-xl">Exynos</span>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input type="checkbox" className="checkbox" />
                                        <span className="font-medium text-xl">MediaTek</span>
                                    </label>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-base-200 px-4 py-2 text-left text-lg font-medium hover:bg-base-300 focus:outline-none focus-visible:ring focus-visible/75">
                                <span>RAM</span>
                                <IoIosArrowUp
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-lg text-gray-500">
                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input type="checkbox" className="checkbox" />
                                        <span className="font-medium text-xl">2GB</span>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input type="checkbox" className="checkbox" />
                                        <span className="font-medium text-xl">3GB</span>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input type="checkbox" className="checkbox" />
                                        <span className="font-medium text-xl">4GB</span>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input type="checkbox" className="checkbox" />
                                        <span className="font-medium text-xl">6GB</span>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input type="checkbox" className="checkbox" />
                                        <span className="font-medium text-xl">8GB</span>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input type="checkbox" className="checkbox" />
                                        <span className="font-medium text-xl">12GB</span>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input type="checkbox" className="checkbox" />
                                        <span className="font-medium text-xl">16GB</span>
                                    </label>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
};

export default Filter;