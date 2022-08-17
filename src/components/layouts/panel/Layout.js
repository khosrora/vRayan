import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from "react-router-dom";
import { refreshToken } from '../../../redux/actions/authAction';
import NavBar from "./NavBar";
import SideBar from "./SideBar";



const Layout = () => {

    const [menu, setMenu] = useState(true);

    const displayWidth = window.innerWidth;
    useEffect(() => {
        if (displayWidth <= 1192) {
            setMenu(false)
        }
    }, [displayWidth]);

    const id = Cookies.get("id__V_Rayan");
    const accessToken = Cookies.get("token__V_Rayan");
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) dispatch(refreshToken(id, accessToken))
    }, []);
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