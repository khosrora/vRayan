import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from '../../utils/moment';



const Dashboard = () => {

    const { auth } = useSelector(state => state);
    const user = auth.user;

    return (
        <div class="content-wrapper">
            <div class="container-xxl flex-grow-1 container-p-y">
                <div class="card">
                    <div class="user-profile-header-banner">
                        <img src="../../assets/img/pages/profile-banner.png" alt="Banner image" class="rounded-top" />
                    </div>
                    <div class="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
                        <div class="flex-shrink-0 mt-n2 mx-sm-0 mx-auto cursor-pointer">
                            <img src="../../assets/img/avatars/1.png" alt="user image" class="d-block h-auto ms-0 ms-sm-4 rounded-3 user-profile-img" />
                        </div>
                        <div class="flex-grow-1 mt-3 mt-sm-5">
                            <div class="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                                <div class="user-profile-info">
                                    {user?.firstName ? <p>{user.firstName} {user.lastName}</p> :
                                        <Link to="/userDetails">
                                            <p>لطفا اطلاعات کاربری خود را تکمیل کنید</p>
                                        </Link>
                                    }
                                    <ul class="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                                        <li class="list-inline-item fw-semibold"><i class="bx bx-phone"></i>{user?.mobile ? user?.mobile : "در حال دریافت اطلاعات" }</li>
                                        <li class="list-inline-item fw-semibold">
                                            <i class="bx bx-calendar-alt"></i>
                                            عضویت در تاریخ
                                            {" "}
                                            <Moment date={user?.creationDate ? user?.creationDate  : 'در حال دریافت اطلاعات' } />
                                        </li>
                                    </ul>
                                </div>
                                <Link to="/userDetails">
                                    <p class="btn btn-secondary text-nowrap">
                                        <i class="bx bx-user-check"></i>
                                        ویرایش اطلاعات کاربری
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Dashboard;