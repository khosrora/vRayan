import { Outlet } from "react-router-dom";



const LayoutMeet = () => {
    return (

        <div class="authentication-wrapper authentication-cover">
            <div class="authentication-inner row m-0">
                <div class="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center">
                    <div class="flex-row text-center mx-auto">
                        <img src="../../assets/img/pages/register-light.png" alt="Auth Cover Bg color" width="520" class="img-fluid authentication-cover-img" data-app-light-img="pages/register-light.png" data-app-dark-img="pages/register-dark.png" />
                        <div class="mx-auto">
                            <h3>صفحه تایید جلسات</h3>
                            <p>
.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="d-flex col-12 col-lg-5 col-xl-4 align-items-center authentication-bg p-sm-5 p-4">
                    <div class="w-px-400 mx-auto">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LayoutMeet;