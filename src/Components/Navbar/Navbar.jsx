const Navbar = () => {
    return (
        <div className="navbar p-0 justify-between rounded-xl bg-base-100">
            <input type="text" placeholder="Search" className="input input-bordered h-14 w-32 md:w-80" />

            <div className="ml-6 h-14 input  input-bordered rounded-lg px-4 justify-end flex-auto">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <div className="hidden md:flex justify-evenly items-center w-full h-10">
                    heloo
                </div>
            </div>
        </div >
    );
};

export default Navbar;