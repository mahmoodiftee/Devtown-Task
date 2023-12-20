import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="drawer lg:drawer-open md:pt-6">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                {/* Main Components */}
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu rounded-xl p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;