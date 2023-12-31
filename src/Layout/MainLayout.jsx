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
                <div className="md:ml-6 mt-4 md:mt-0  drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu rounded-xl md:p-0 w-80 min-h-full bg-base-100 text-base-content">
                        <Filter />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;