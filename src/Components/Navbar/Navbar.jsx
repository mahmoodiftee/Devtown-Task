import { IoGrid, IoListSharp, IoSearch } from "react-icons/io5";
import { HiQueueList } from "react-icons/hi2";
const Navbar = () => {
    return (
        <div className="navbar p-0 justify-between rounded-xl bg-base-100">
            <div className="h-14 w-80 rounded-lg flex justify-center items-center">
                <div className="relative w-full">
                    <input className="block p-2.5 w-full h-14 z-20 text-sm text-gray-800 bg-base-100 rounded-xl border-2 border-base-200 focus:ring-base-200 focus:border-base-200" placeholder="Search..." required />
                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-gray-800 bg-base-200 rounded-r-xl  border border-base-200 hover:bg-orange transition-all duration-300 hover:text-white focus:ring-base-200">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>

            <div className="ml-6 h-14 border-2 rounded-lg px-4 justify-end flex-auto">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <div className="hidden md:flex justify-evenly items-center w-full h-10">
                    <div className="flex gap-2">
                        <div className="btn btn-circle text-lg btn-ghost ">
                            <IoGrid />
                        </div>
                        <div className="btn text-2xl btn-circle btn-ghost">
                            <IoListSharp />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <span className="text-red-600">0</span>Products found of <span className="text-red-600">30</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        Sort By | <span className="w-32 text-center">Product Name</span>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-circle text-2xl btn-ghost m-1"><HiQueueList /></div>
                            <ul tabIndex={0} className="dropdown-content mt-2 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;