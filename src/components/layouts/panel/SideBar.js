import { Link } from "react-router-dom";
import { sideBarConstans } from "../../../constans/sideBarConstans";


const SideBar = ({ setMenu, menu }) => {
    return (
        <aside className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                <a href="index.html" className="app-brand-link">
                    <span className="app-brand-text demo menu-text fw-bold ms-2">ویدیو رایان</span>
                </a>
                <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
                    <i className="bx menu-toggle-icon d-none d-xl-block fs-4 align-middle"></i>
                    <i onClick={() => setMenu(!menu)} className="bx bx-x d-block d-xl-none bx-sm align-middle"></i>
                </a>
            </div>
            <ul className="menu-inner py-1">
                <li className="menu-header small text-uppercase"><span className="menu-header-text">برنامه‌ها و صفحات</span></li>
                {
                    sideBarConstans.map((item, index) => (
                        <li className="menu-item py-2" key={index}>
                            <Link to={item.route} class="menu-link menu-toggle">
                                <i class={item.icon}></i>
                                <div>{item.title}</div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </aside>
    );
}

export default SideBar;