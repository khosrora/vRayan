import { Outlet } from 'react-router-dom';



const LayoutAuth = () => {
    return (
        <div className="authentication-wrapper authentication-cover">
            <div className="authentication-inner row m-0">
                <div className="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center">
                    <div className="flex-row text-center mx-auto">
                        <img src="../../assets/img/pages/login-light.png" alt="Auth Cover Bg color" width="520" className="img-fluid authentication-cover-img" data-app-light-img="pages/login-light.png" data-app-dark-img="pages/login-dark.png" />
                        <div className="mx-auto">
                            <h3>ابزار حرفه ای برای مدیریت کلیه جلسات حضوری و مجازی</h3>
                            <p>
                                مانند یک حرفه ای در هر مکان و در هر زمان , به روشی که برای شما کار میکند بزرگ نمایی کنید دوره های درخواستی , آموزش های ویدیویی سریع و جلسات اموزشی زنده
                            </p>
                        </div>
                    </div>
                </div>
                <div className="d-flex col-12 col-lg-5 col-xl-4 align-items-center authentication-bg p-sm-5 p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default LayoutAuth;