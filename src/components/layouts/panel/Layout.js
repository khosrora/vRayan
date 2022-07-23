import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";



const Layout = () => {

    const [menu, setMenu] = useState(true);

    const displayWidth = window.innerWidth;
    useEffect(() => {
        if (displayWidth <= 1192) {
            setMenu(false)
        }
    }, [displayWidth])

    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-page">
                {
                    menu &&
                    <SideBar setMenu={setMenu} menu={menu} />
                }
                <NavBar setMenu={setMenu} menu={menu} />
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;