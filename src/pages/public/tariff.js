import { useEffect, useState } from 'react';
import { getPackages } from '../../redux/actions/functions';



const Tariff = () => {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);

    const getData = async () => {
        try {
            const res = await getPackages();
            setData(res)
            setLoad(false)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => getData, []);

    if (load) return <p>در حال دریافت اطلاعات</p>
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div class="row g-4 mt-4">
                    {
                        data.map(i =>
                            <div class="col-xl-4 col-lg-6 col-md-6">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <div class="mx-auto mb-3">
                                            <img class="mb-4" src={i.imageName} height="48" alt="Help center articles" />
                                        </div>
                                        <h5 class="mb-1 card-title primary-font">{i.title}</h5>
                                        <span class="lh-1-85">{i.description}</span>
                                        <div class="d-flex align-items-center justify-content-center my-3 gap-2">
                                            <a href="javascript:;" class="me-1"><span class="badge bg-label-secondary">کنفرانس</span></a>
                                            <a href="javascript:;"><span class="badge bg-label-warning">حضوری</span></a>
                                        </div>

                                        <div class="d-flex align-items-center justify-content-around my-4 py-2">
                                            <div>
                                                <h4 class="mb-1">1,000,000</h4>
                                                <span>پیامک</span>
                                            </div>
                                            <div>
                                                <h4 class="mb-1">100</h4>
                                                <span>جلسه</span>
                                            </div>
                                            <div>
                                                <h4 class="mb-1">500</h4>
                                                <span>مخاطب</span>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center">
                                            <a href="#" class="btn btn-warning d-flex align-items-center me-3"><i class="bx bx-user-check me-1"></i>خرید</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div class="bg-secondary text-white help-center-contact-us help-center-bg-alt rounded">
                    <div class="container-xl">
                        <div class="row justify-content-center py-5 my-3">
                            <div class="col-md-8 col-lg-6 text-center">
                                <h4 class="text-white">همچنان کمک نیاز دارید؟</h4>
                                <p class="mb-4">
                                    متخصصین ما همواره آماده راهنمایی هستند. با ما در طول ساعات <br />
                                    کاری تماس بگیرید و یا در هر زمان ایمیل ارسال کنید و ما با شما تماس می گیریم.
                                </p>
                                <div class="d-flex justify-content-center flex-wrap gap-4">
                                    <p class="btn btn-label-danger">تماس با ما</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Tariff;