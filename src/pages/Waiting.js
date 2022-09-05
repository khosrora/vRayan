import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { check_Code, getMeet } from '../redux/actions/meetAction';
import { errorMessage } from '../utils/toast';
import { useNavigate } from 'react-router-dom';


const Waiting = () => {

    const search = useLocation().search;
    const id = new URLSearchParams(search).get("id");
    const [data, setData] = useState();
    const [send, setSend] = useState(false);
    const [load, setLoad] = useState(true);
    const [getCode, setGetCode] = useState({ id });
    const [code, setCode] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const res = await getMeet(id);
            setData(res)
        }
        fetchData();
    }, []);
    const handleCheckCode = async (id) => {
        try {
            if (!id || !code) return errorMessage("کد پیامک شده را وارد کنید") ;
            const res = await check_Code({ id, pinCode : code  });
            if (res === "OK") { return setSend(true) }
            else {
                setCode('');
                setGetCode({});
            };
            setLoad(false);
        } catch (error) {
            errorMessage("لطفا دوباره امتحان کنید")
        }
    }

    const redirectToMeet = (e) => {
        e.preventDefault();
        navigate(`/videoRayan?id=${id}`)
    }

    if (!data) return <p>در حال دریافت اطلاعات</p>
    return (
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
                        <h1>{data.title}</h1>
                        <p>
                            {data.description}
                        </p>
                    </div>
                    <div className="card-body">
                        <span className="d-inline-block lh-1-85 mb-2">کد دعوت جلسه</span>
                        <div className="progress progress-stacked mb-4" style={{ height: "8px" }}>
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar bg-info" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="input-group input-group-merge">
                            <input type="password" value={code} id="multicol-confirm-password" class="form-control text-start" onChange={(e) => setCode(e.target.value)} dir="ltr" placeholder="············" aria-describedby="multicol-confirm-password2" />
                        </div>
                        {
                            send ?
                                <button className="btn btn-secondary text-nowrap mt-4 w-100" onClick={(e) => redirectToMeet(e)}>
                                    ورود به جلسه
                                </button> :
                                <button className="btn btn-secondary text-nowrap mt-4 w-100" onClick={() => handleCheckCode(id)}>
                                    ارسال کد
                                </button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Waiting;