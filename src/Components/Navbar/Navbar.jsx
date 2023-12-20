import { IoGrid, IoListSharp } from "react-icons/io5";
import { HiQueueList } from "react-icons/hi2";
const Navbar = () => {
    return (
        <div className="navbar p-0 justify-between rounded-xl bg-base-100">
            <input type="text" placeholder="Search" className="input input-bordered h-14 w-32 md:w-80" />

            <div className="ml-6 h-14 border-2 rounded-lg px-4 justify-end flex-auto">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <div className="hidden md:flex justify-evenly items-center w-full h-10">
                    <div className="flex gap-2">
                        <span className="text-red-600">0</span>Products found of <span className="text-red-600">30</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="btn btn-circle text-lg btn-ghost ">
                            <IoGrid />
                        </div>
                        <div className="btn text-2xl btn-circle btn-ghost">
                            <IoListSharp />
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        Sort By
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-circle text-2xl btn-ghost m-1"><HiQueueList /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
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