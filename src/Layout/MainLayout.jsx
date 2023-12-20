import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Nav from "../Components/Nav/Nav";
import Filter from "../Components/Filter/Filter";

const MainLayout = () => {
    return (
        <div>
            <Nav />
            <Navbar />
            <div className="drawer lg:drawer-open md:pt-6">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                {/* Main Components */}
                <div className="md:ml-6 mt-4 md:mt-0 border border-base-300 rounded-lg drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu rounded-xl p-0 w-80 min-h-full text-base-content">
                        {/* Filtering options */}
                        <Filter />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;