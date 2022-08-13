import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { logOut, refreshToken } from '../../../redux/actions/authAction';

const NavBar = ({ setMenu, menu }) => {

    const { auth } = useSelector(state => state);
    const id = auth.userId;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(refreshToken(id));
    }, [dispatch])

    const handleDelete = (e) => {
        dispatch(logOut())
    }
    return (
        <nav className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme" id="layout-navbar">
            <div className="container-fluid">
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <a className="nav-item nav-link px-0 me-xl-4" onClick={() => setMenu(!menu)}>
                        <i className="bx bx-menu bx-sm"></i>
                    </a>
                </div>

                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    <div className="navbar-nav align-items-center">
                        <div className="nav-item navbar-search-wrapper mb-0">
                            <a className="nav-item nav-link search-toggler px-0" href="javascript:void(0);">
                                <span className="d-none d-md-inline-block text-muted"> {auth.user.firstName} عزیز خوش آمدید</span>
                            </a>
                        </div>
                    </div>

                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                        <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
                            <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                <i className="fi fi-ir fis rounded-circle fs-3 me-1"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-language="fa">
                                        <i className="fi fi-ir fis rounded-circle fs-4 me-1"></i>
                                        <span className="align-middle">فارسی</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-language="en">
                                        <i className="fi fi-us fis rounded-circle fs-4 me-1"></i>
                                        <span className="align-middle">انگلیسی</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item me-2 me-xl-0">
                            <a className="nav-link style-switcher-toggle hide-arrow" href="javascript:void(0);">
                                <i className="bx bx-sm"></i>
                            </a>
                        </li>

                        <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                            <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <i className="bx bx-grid-alt bx-sm"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end py-0">
                                <div className="dropdown-menu-header border-bottom">
                                    <div className="dropdown-header d-flex align-items-center py-3">
                                        <h5 className="text-body mb-0 me-auto secondary-font">میانبرها</h5>
                                        <a href="javascript:void(0)" className="dropdown-shortcuts-add text-body" data-bs-toggle="tooltip" data-bs-placement="top" title="افزودن میانبر"><i className="bx bx-sm bx-plus-circle"></i></a>
                                    </div>
                                </div>
                                <div className="dropdown-shortcuts-list scrollable-container">
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="bx bx-calendar fs-4"></i>
                                            </span>
                                            <a href="app-calendar.html" className="stretched-link">تقویم</a>
                                            <small className="text-muted mb-0">قرارهای ملاقات</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="bx bx-food-menu fs-4"></i>
                                            </span>
                                            <a href="app-invoice-list.html" className="stretched-link">برنامه صورتحساب</a>
                                            <small className="text-muted mb-0">مدیریت حساب‌ها</small>
                                        </div>
                                    </div>
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="bx bx-user fs-4"></i>
                                            </span>
                                            <a href="app-user-list.html" className="stretched-link">برنامه کاربر</a>
                                            <small className="text-muted mb-0">مدیریت کاربران</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="bx bx-check-shield fs-4"></i>
                                            </span>
                                            <a href="app-access-roles.html" className="stretched-link">مدیریت نقش‌‌ها</a>
                                            <small className="text-muted mb-0">مجوزها</small>
                                        </div>
                                    </div>
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="bx bx-pie-chart-alt-2 fs-4"></i>
                                            </span>
                                            <a href="index.html" className="stretched-link">داشبورد</a>
                                            <small className="text-muted mb-0">پروفایل کاربر</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="bx bx-cog fs-4"></i>
                                            </span>
                                            <a href="pages-account-settings-account.html" className="stretched-link">تنظیمات</a>
                                            <small className="text-muted mb-0">تنظیمات حساب</small>
                                        </div>
                                    </div>
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="bx bx-help-circle fs-4"></i>
                                            </span>
                                            <a href="pages-help-center-landing.html" className="stretched-link">مرکز راهنمایی</a>
                                            <small className="text-muted mb-0">سوالات متداول و مقالات</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="bx bx-window-open fs-4"></i>
                                            </span>
                                            <a href="modal-examples.html" className="stretched-link">مودال‌ها</a>
                                            <small className="text-muted mb-0">پاپ‌آپ‌های کاربردی</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
                            <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <i className="bx bx-bell bx-sm"></i>
                                <span className="badge bg-danger rounded-pill badge-notifications">5</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end py-0">
                                <li className="dropdown-menu-header border-bottom">
                                    <div className="dropdown-header d-flex align-items-center py-3">
                                        <h5 className="text-body mb-0 me-auto secondary-font">اعلان‌ها</h5>
                                        <a href="javascript:void(0)" className="dropdown-notifications-all text-body" data-bs-toggle="tooltip" data-bs-placement="top" title="علامت خوانده شده به همه"><i className="bx fs-4 bx-envelope-open"></i></a>
                                    </div>
                                </li>
                                <li className="dropdown-notifications-list scrollable-container">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <img src="./assets/img/avatars/5.png" alt className="w-px-40 h-auto rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1">مدیریت ویدیو رایان</h6>
                                                    <p className="mb-1">دز حال حاضر شما هیچ پیامی ندارید</p>
                                                    <small className="text-muted">5 روز قبل</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                                                    <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                                                </div>
                                            </div>
                                        </li>
                                        {/* <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <span className="avatar-initial rounded-circle bg-label-warning"><i className="bx bx-error"></i></span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1">لورم ایپسوم متن ساختگی</h6>
                                                    <p className="mb-1">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از</p>
                                                    <small className="text-muted">5 روز قبل</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                                                    <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                                                </div>
                                            </div>
                                        </li> */}
                                    </ul>
                                </li>
                                <li className="dropdown-menu-footer border-top">
                                    <a href="javascript:void(0);" className="dropdown-item d-flex justify-content-center p-3">
                                        مشاهده همه اعلان‌ها
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item navbar-dropdown dropdown-user dropdown">
                            <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                <div className="avatar avatar-online">
                                    <img src="./assets/img/avatars/1.png" alt className="rounded-circle" />
                                </div>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="pages-account-settings-account.html">
                                        <div className="d-flex align-items-center">
                                            <div className="flex me-3">
                                                <div className="avatar avatar-online mt-1">
                                                    <img src="./assets/img/avatars/1.png" alt className="rounded-circle" />
                                                </div>
                                            </div>
                                            <div className="">
                                                <span className="fw-semibold d-block">
                                                    {/* {user.username} */}
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown-divider"></div>
                                </li>
                                <li className='cursor-pointer'  >
                                    <a className="dropdown-item" role="button" onClick={handleDelete} >
                                        <i className="bx bx-power-off me-2"></i>
                                        <span className="align-middle">خروج</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="navbar-search-wrapper search-input-wrapper d-none">
                    <input type="text" className="form-control search-input container-fluid border-0" placeholder="جستجو ..." aria-label="Search..." />
                    <i className="bx bx-x bx-sm search-toggler cursor-pointer"></i>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;