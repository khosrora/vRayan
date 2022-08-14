import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMeet } from '../../redux/actions/meetAction';




const Meet = () => {

    const [load, setLoad] = useState(true);
    const [isStart, setIsStart] = useState(false);
    const [meet, setMeet] = useState(true);
    const router = useParams();
    const dispatch = useDispatch();
    const { id } = router;
    const test = async () => {
        const res = await getMeet(id);
        setMeet(res)
        setLoad(false);
    }
    useEffect(() => {
        test();
    }, [])
    console.log(meet);

    return (
        <>
            {
                load ?
                    <>
                        <p>loading</p>
                    </>
                    :
                    <>
                        <div class="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center">
                            <div class="flex-row text-center mx-auto">
                                <img src="../../assets/img/pages/register-light.png" alt="Auth Cover Bg color" width="520" class="img-fluid authentication-cover-img" data-app-light-img="pages/register-light.png" data-app-dark-img="pages/register-dark.png" />
                                <div class="mx-auto">
                                    <h3>ساختگی با تولید سادگی</h3>
                                    <p>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex col-12 col-lg-5 col-xl-4 align-items-center authentication-bg p-sm-5 p-4">
                            <div class="col-12 mx-auto">
                                <div class="card-header">
                                    <h3 class="card-title mb-3">{meet.title}</h3>
                                    <p class=" fw-normal mb-0 primary-font">تاریخ شروع جلسه {meet.startDate} و زمان شروع جلسه {meet.startTime} می باشد. </p>
                                </div>
                                <div class="card-body">
                                    <span class="d-inline-block lh-1-85 mb-2">جزئیات جلسه</span>
                                    <div class="progress progress-stacked mb-4" style={{ height: "8px" }}>
                                        <div class="progress-bar bg-success" role="progressbar" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div class="progress-bar bg-danger" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div class="progress-bar bg-info" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <ul class="p-0 m-0 lh-1-85">
                                        <li class="mb-2 d-flex justify-content-between">
                                            <div class="d-flex align-items-center me-3">
                                                <span class="badge badge-dot bg-success me-2"></span>
                                                امکان درخواست صحبت اعضا
                                            </div>
                                            <div class="d-flex gap-3">
                                                <span class="fw-semibold">{meet.canTalk ? "دارد" : "ندارد"}</span>
                                            </div>
                                        </li>
                                        <li class="mb-2 d-flex justify-content-between">
                                            <div class="d-flex align-items-center me-3">
                                                <span class="badge badge-dot bg-danger me-2"></span>
                                                نمایش تخته هوشمند
                                            </div>
                                            <div class="d-flex gap-3">
                                                <span class="fw-semibold">{meet.isInteractiveBoard ? "دارد" : "ندارد"}</span>
                                            </div>
                                        </li>
                                        <li class="mb-2 d-flex justify-content-between">
                                            <div class="d-flex align-items-center me-3">
                                                <span class="badge badge-dot bg-primary me-2"></span>
                                                قطع کردن میکروفون همه اعضا
                                            </div>
                                            <div class="d-flex gap-3">
                                                <span class="fw-semibold">{meet.isMuted ? "دارد" : "ندارد"}</span>
                                            </div>
                                        </li>
                                        <li class="mb-2 d-flex justify-content-between">
                                            <div class="d-flex align-items-center me-3">
                                                <span class="badge badge-dot bg-info me-2"></span>
                                                پخش زنده
                                            </div>
                                            <div class="d-flex gap-3">
                                                <span class="fw-semibold">{meet.isLive ? "دارد" : "ندارد"}</span>
                                            </div>
                                        </li>
                                        <li class="d-flex justify-content-between">
                                            <div class="d-flex align-items-center me-3">
                                                <span class="badge badge-dot bg-warning me-2"></span>
                                                ضبط جلسه
                                            </div>
                                            <div class="d-flex gap-3">
                                                <span class="fw-semibold">{meet.isRecord ? "دارد" : "ندارد"}</span>
                                            </div>
                                        </li>
                                    </ul>
                                    {
                                        isStart ?
                                            <p class="btn btn-secondary text-nowrap mt-4 w-100">
                                                برو به جلسه
                                            </p>
                                            :
                                            <p class="btn btn-secondary text-nowrap mt-4 w-100">
                                                جلسه هنوز شروع نشده است
                                            </p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div style={{ position: "absolute", left: "0" }}>
                            <Link to={'/all-meetings'}>
                                <p class="btn btn-danger text-nowrap mt-4 position-absolute " style={{left : "3rem"}}>
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