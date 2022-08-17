import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMeet } from '../../redux/actions/meetAction';




const Meet = () => {

    const [load, setLoad] = useState(true);
    const [meet, setMeet] = useState();
    const router = useParams();
    const { id } = router;
    const getMeetFunction = async () => {
        const res = await getMeet(id);
        setMeet(res)
        setLoad(false);
    }
    useEffect(() => {
        getMeetFunction();
    }, [])

    return (
        <>
            {
                load ?
                    <>
                        <p>loading</p>
                    </>
                    :
                    <>
                        <div className="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center">
                            <div className="flex-row text-center mx-auto">
                                <img src="../../assets/img/pages/register-light.png" alt="Auth Cover Bg color" width="520" className="img-fluid authentication-cover-img" data-app-light-img="pages/register-light.png" data-app-dark-img="pages/register-dark.png" />
                                <div className="mx-auto">
                                    <h3>ساختگی با تولید سادگی</h3>
                                    <p>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex col-12 col-lg-5 col-xl-4 align-items-center authentication-bg p-sm-5 p-4">
                            <div className="col-12 mx-auto">
                                <div className="card-header">
                                    <h3 className="card-title mb-3">{meet.title}</h3>
                                    <p className=" fw-normal mb-0 primary-font">تاریخ شروع جلسه {meet.startDate} و زمان شروع جلسه {meet.startTime} می باشد. </p>
                                </div>
                                <div className="card-body">
                                    <span className="d-inline-block lh-1-85 mb-2">جزئیات جلسه</span>
                                    <div className="progress progress-stacked mb-4" style={{ height: "8px" }}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <ul className="p-0 m-0 lh-1-85">
                                        <li className="mb-2 d-flex justify-content-between">
                                            <div className="d-flex align-items-center me-3">
                                                <span className="badge badge-dot bg-success me-2"></span>
                                                امکان درخواست صحبت اعضا
                                            </div>
                                            <div className="d-flex gap-3">
                                                <span className="fw-semibold">{meet.canTalk ? "دارد" : "ندارد"}</span>
                                            </div>
                                        </li>
                                        <li className="mb-2 d-flex justify-content-between">
                                            <div className="d-flex align-items-center me-3">
                                                <span className="badge badge-dot bg-danger me-2"></span>
                                                نمایش تخته هوشمند
                                            </div>
                                            <div className="d-flex gap-3">
                                                <span className="fw-semibold">{meet.isInteractiveBoard ? "دارد" : "ندارد"}</span>
                                            </div>
                                        </li>
                                        <li className="mb-2 d-flex justify-content-between">
                                            <div className="d-flex align-items-center me-3">
                                                <span className="badge badge-dot bg-primary me-2"></span>
                                                قطع کردن میکروفون همه اعضا
                                            </div>
                                            <div className="d-flex gap-3">
                                                <span className="fw-semibold">{meet.isMuted ? "دارد" : "ندارد"}</span>
                                            </div>
                                        </li>
                                        <li className="mb-2 d-flex justify-content-between">
                                            <div className="d-flex align-items-center me-3">
                                                <span className="badge badge-dot bg-info me-2"></span>
                                                پخش زنده
                                            </div>
                                            <div className="d-flex gap-3">
                                                <span className="fw-semibold">{meet.isLive ? "دارد" : "ندارد"}</span>
                                            </div>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center me-3">
                                                <span className="badge badge-dot bg-warning me-2"></span>
                                                ضبط جلسه
                                            </div>
                                            <div className="d-flex gap-3">
                                                <span className="fw-semibold">{meet.isRecord ? "دارد" : "ندارد"}</span>
                                            </div>
                                        </li>
                                    </ul>
                                    {
                                        meet.status === 1 ?
                                            <p className="btn btn-secondary text-nowrap mt-4 w-100">
                                                برو به جلسه
                                            </p>
                                            :
                                            <button className="btn btn-secondary text-nowrap mt-4 w-100" disabled>
                                                جلسه هنوز شروع نشده است
                                            </button>
                                    }
                                </div>
                            </div>
                        </div>
                        <div style={{ position: "absolute", left: "0" }}>
                            <Link to={'/all-meetings'}>
                                <p className="btn btn-danger text-nowrap mt-4 position-absolute " style={{ left: "3rem" }}>
                                    بازگشت به صفحه جلسات
                                </p>
                            </Link>
                        </div>
                    </>
            }
        </>
    );
}

export default Meet;