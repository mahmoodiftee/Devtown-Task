import { IoGrid, IoListSharp } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { useCustomHook } from "../../Provider/Provider";

const Navbar = () => {
    const { count, totalData, setSearchedItem, setIsGridView, isGridView } = useCustomHook();
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = () => {
        setSearchedItem(searchTerm);
    };
    const handleViewModeToggle = () => {
        setIsGridView(!isGridView);
    };

    return (
        <div className="navbar p-0 justify-between rounded-xl bg-base-100">
            <div className="h-14 w-80 rounded-lg flex justify-center items-center">
                <div className="relative w-full">
                    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="block p-2.5 w-full h-14 z-20 text-sm bg-base-100 rounded-xl border-[5px] border-base-300 focus:ring-base-300 focus:border-base-300" placeholder="Search..." required />
                    <button onClick={handleSearch} type="submit" className="absolute top-0 end-0 p-2.5 text-sm h-full font-bold bg-base-100 rounded-r-xl  border-[5px] border-base-300 hover:bg-orange transition-all duration-300 focus:ring-[#161616]">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
            {/* Filter Section */}
            <div className="ml-6 h-14 border-2 border-base-300 rounded-lg px-4 flex-auto flex justify-center items-center">
                <label htmlFor="my-drawer-2" className="btn btn-circle btn-ghost drawer-button text-2xl lg:hidden"><MdMenu /></label>
                <div className="hidden md:flex md:justify-end md:flex-auto">
                    <div className="hidden md:flex justify-evenly items-center w-full h-10">

                        <div className="flex gap-2 justify-center items-center">
                            <h1 className="font-bold text-[1.15rem]">View mode |</h1>
                            <label className="swap swap-rotate">
                                <input
                                    type="checkbox"
                                    onChange={handleViewModeToggle}
                                    checked={isGridView}
                                />
                                <div className="swap-on text-[1.8rem]" >< IoGrid /></div>
                                <div className="swap-off text-[1.8rem]"><IoListSharp /></div>

                            </label>
                        </div>
                        <h1 className="flex gap-2 font-bold text-lg">
                            <span className="text-red-600 font-bold text-lg">{count}</span>Products found of <span className="text-red-600 font-bold text-lg">{totalData}</span>
                        </h1>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Navbar;