import { Disclosure } from '@headlessui/react';
import { IoIosArrowUp } from "react-icons/io";
import { useCustomHook } from '../../Provider/Provider';

const Filter = () => {
    const { filters, setFilters } = useCustomHook();

    const handleSelectedOption = (category, value) => {
        setFilters((prevFilters) => ({ ...prevFilters, [category]: value }));
    };

    return (
        <div className="w-full">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-base-100 p-0">
                {/* Brand Filter */}
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

                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={() => handleSelectedOption('selectedBrand', 'Apple')}
                                            checked={filters.selectedBrand === 'Apple'}
                                        />
                                        <span className="font-medium text-xl">Apple</span>
                                    </label>
                                </div>


                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={() => handleSelectedOption('selectedBrand', 'Samsung')}
                                            checked={filters.selectedBrand === 'Samsung'}
                                        />
                                        <span className="font-medium text-xl">Samsung</span>
                                    </label>
                                </div>


                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={() => handleSelectedOption('selectedBrand', 'Oppo')}
                                            checked={filters.selectedBrand === 'Oppo'}
                                        />
                                        <span className="font-medium text-xl">Oppo</span>
                                    </label>
                                </div>


                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={() => handleSelectedOption('selectedBrand', 'Huawei')}
                                            checked={filters.selectedBrand === 'Huawei'}
                                        />
                                        <span className="font-medium text-xl">Huawei</span>
                                    </label>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                {/* Price Filter */}
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
                                <input
                                    type="range"
                                    min={0}
                                    max="100"
                                    className="range"
                                    step="33"
                                    onChange={(e) => {
                                        handleSelectedOption('selectedPrice', e.target.value);
                                        setFilters((prevFilters) => ({
                                            ...prevFilters,
                                            selectedPriceRange: parseInt(e.target.value, 10),
                                        }));
                                    }}
                                    value={filters.selectedPriceRange || 0}
                                />
                                <div className="w-full flex justify-between text-xs px-2">
                                    <span>$0-300</span>
                                    <span>$600</span>
                                    <span>$900</span>
                                    <span>$1200</span>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                {/* OS Filter */}
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
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={() => handleSelectedOption('selectedOS', 'IOS')}
                                            checked={filters.selectedOS === 'IOS'}
                                        />
                                        <span className="font-medium text-xl">IOS</span>
                                    </label>
                                </div>

                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={() => handleSelectedOption('selectedOS', 'Android')}
                                            checked={filters.selectedOS === 'Android'}
                                        />
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
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={() => handleSelectedOption('selectedChipset', 'Bionic')}
                                            checked={filters.selectedChipset === 'Bionic'}
                                        />
                                        <span className="font-medium text-xl">Bionic</span>
                                    </label>
                                </div>

                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={() => handleSelectedOption('selectedChipset', 'Snapdragon')}
                                            checked={filters.selectedChipset === 'Snapdragon'}
                                        />
                                        <span className="font-medium text-xl">Snapdragon</span>
                                    </label>
                                </div>

                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={() => handleSelectedOption('selectedChipset', 'Exynos')}
                                            checked={filters.selectedChipset === 'Exynos'}
                                        />
                                        <span className="font-medium text-xl">Exynos</span>
                                    </label>
                                </div>

                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={() => handleSelectedOption('selectedChipset', 'MediaTek')}
                                            checked={filters.selectedChipset === 'MediaTek'}
                                        />
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
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={() => handleSelectedOption('selectedRAM', '2GB')}
                                            checked={filters.selectedRAM === '2GB'}
                                        />
                                        <span className="font-medium text-xl">2GB</span>
                                    </label>
                                </div>

                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={() => handleSelectedOption('selectedRAM', '3GB')}
                                            checked={filters.selectedRAM === '3GB'}
                                        />
                                        <span className="font-medium text-xl">3GB</span>
                                    </label>
                                </div>

                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={() => handleSelectedOption('selectedRAM', '4GB')}
                                            checked={filters.selectedRAM === '4GB'}
                                        />
                                        <span className="font-medium text-xl">4GB</span>
                                    </label>
                                </div>

                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={() => handleSelectedOption('selectedRAM', '6GB')}
                                            checked={filters.selectedRAM === '6GB'}
                                        />
                                        <span className="font-medium text-xl">6GB</span>
                                    </label>
                                </div>

                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={() => handleSelectedOption('selectedRAM', '8GB')}
                                            checked={filters.selectedRAM === '8GB'}
                                        />
                                        <span className="font-medium text-xl">8GB</span>
                                    </label>
                                </div>

                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={() => handleSelectedOption('selectedRAM', '12GB')}
                                            checked={filters.selectedRAM === '12GB'}
                                        />
                                        <span className="font-medium text-xl">12GB</span>
                                    </label>
                                </div>

                                <div className="form-control mt-2">
                                    <label className="flex gap-4 justify-start items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={() => handleSelectedOption('selectedRAM', '16GB')}
                                            checked={filters.selectedRAM === '16GB'}
                                        />
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
