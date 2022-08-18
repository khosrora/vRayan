import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeImage } from '../../redux/actions/userAction';
import Moment from '../../utils/moment';
import UserDetails from '../../components/shared/dashboard/UserDetails';



const Dashboard = () => {

    const [edit, setEdit] = useState(false)
    const { auth, global } = useSelector(state => state);
    const dispatch = useDispatch();
    const user = auth.user;
    const customerId = auth.userId;


    return (
        <div class="content-wrapper">
            <div class="container-xxl flex-grow-1 container-p-y">
                <div class="card">
                    <div class="user-profile-header-banner">
                        <img src="../../assets/img/pages/profile-banner.png" alt="Banner image" class="rounded-top" />
                    </div>
                    <div class="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4 position-relative">
                        <div class="flex-shrink-0 mt-n2 mx-sm-0 mx-auto cursor-pointer">
                            <img src={user.logo === "https://videorayan.ir/Pictures//" ? './assets/img/avatars/1.png' : user.logo} alt="user image" class="d-block h-auto ms-0 ms-sm-4 rounded-3 user-profile-img" />
                            {
                                global.load ?
                                    <label for="upload" className="btn btn-secondary me-2 mb-4 m-2" tabindex="0">
                                        <span class="d-none d-sm-block">لطفا منتظر بمانید</span>
                                        <i class="bx bx-upload d-block d-sm-none"></i>
                                        <input  className="account-file-input" hidden accept="image/png, image/jpeg" />
                                    </label>
                                    :
                                    <label for="upload" className="btn btn-secondary me-2 mb-4 m-2" tabindex="0">
                                        <span class="d-none d-sm-block">ارسال تصویر جدید</span>
                                        <i class="bx bx-upload d-block d-sm-none"></i>
                                        <input onChange={(e) => {
                                            const formData = new FormData();
                                            formData.append("logoFile", e.target.files[0]);
                                            formData.append("id", customerId);
                                            dispatch(changeImage(formData));
                                        }} type="file" id="upload" className="account-file-input" hidden accept="image/png, image/jpeg" />
                                    </label>
                            }
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
                                        <li class="list-inline-item fw-semibold"><i class="bx bx-phone"></i>{user?.mobile ? user?.mobile : "در حال دریافت اطلاعات"}</li>
                                        <li class="list-inline-item fw-semibold">
                                            <i class="bx bx-calendar-alt"></i>
                                            عضویت در تاریخ
                                            {" "}
                                            <Moment date={user?.creationDate ? user?.creationDate : 'در حال دریافت اطلاعات'} />
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p onClick={() => setEdit(!edit)} class="btn btn-secondary text-nowrap">
                                        <i class="bx bx-user-check"></i>
                                        {edit ? "انصراف از ویرایش" : "ویرایش اطلاعات کاربری"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    edit ? <UserDetails setEdit={setEdit} /> : null
                }
            </div>
        </div >
    );
}

export default Dashboard;