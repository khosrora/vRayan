import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { checkOtp, getOtp, handleFalseOtp } from '../../redux/actions/authAction';

const getOtpSchema = Yup.object().shape({
    phone: Yup.string().matches("^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}", "شماره همراه وارد شده نامعتبر است").required("وارد کردن شماره همراه ضروری است"),
});
const getCheckOtpSchema = Yup.object().shape({
    phone: Yup.string().matches("^09[0-9]{9}$", "شماره همراه وارد شده نامعتبر است").required("وارد کردن شماره همراه ضروری است"),
    token: Yup.string().required("وارد کردن کد ارسال شده ضروری است")
});


const Login = () => {
    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00:00');
    const dispatch = useDispatch();
    const { auth, global } = useSelector(state => state);



    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }


    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {

            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }


    const clearTimer = (e) => {

        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer('00:00:10');

        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();

        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 300);
        return deadline;
    }

    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }

    console.log(timer);

    return (
        <>
            {
                auth.getOtp ?
                    <div className="w-px-400 mx-auto">
                        <div className="app-brand mb-2">
                            <a href="index.html" className="app-brand-link gap-2 mb-2">
                                <span className="app-brand-text demo h3 mb-0 fw-bold">ویدیو رایان</span>
                            </a>
                        </div>
                        <p className="mb-4">فرم ورود به حساب کاربری</p>
                        <Formik
                            initialValues={{
                                phone: '',
                                token: '',
                            }}
                            validationSchema={getCheckOtpSchema}
                            onSubmit={values => {
                                dispatch(checkOtp(values))
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className="mb-3">
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">شماره تماس</label>
                                        <Field type="text" className="form-control text-start" dir="ltr" id="phone" name="phone" placeholder="شماره تماس خود را وارد کنید" autoFocus />
                                        {errors.phone && touched.phone ? <div className='text-danger text-sm'>{errors.phone}</div> : null}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="token" className="form-label">کد ارسال شده</label>
                                        <Field type="text" className="form-control text-start" dir="ltr" id="token" name="token" placeholder="کد ارسال شده را وارد کنید" autoFocus />
                                        {errors.token && touched.token ? <div className='text-danger text-sm'>{errors.token}</div> : null}
                                        {timer}
                                    </div>
                                    <button type='submit' className="btn btn-secondary d-grid w-100 mt-4">
                                        {
                                            global.load ? "در حال دریافت اطلاعات" : "ورود"
                                        }
                                    </button>
                                    {
                                        timer == '00:00:00' ?
                                            <div className='cursor-pointer' onClick={() => dispatch(handleFalseOtp())}>
                                                <p className=''>ارسال مجدد پیامک</p>
                                            </div> : null
                                    }
                                </Form>
                            )}
                        </Formik>
                    </div>
                    :
                    <div className="w-px-400 mx-auto">
                        <div className="app-brand mb-2">
                            <a href="index.html" className="app-brand-link gap-2 mb-2">
                                <span className="app-brand-text demo h3 mb-0 fw-bold">ویدیو رایان</span>
                            </a>
                        </div>
                        <p className="mb-4">دریافت کد ورود به پنل</p>
                        <Formik
                            initialValues={{
                                phone: '',
                            }}
                            validationSchema={getOtpSchema}
                            onSubmit={values => {
                                dispatch(getOtp(values))
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className="mb-3">
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">شماره تماس</label>
                                        <Field type="text" className="form-control text-start" dir="ltr" id="phone" name="phone" placeholder="شماره تماس خود را وارد کنید" autoFocus />
                                        {errors.phone && touched.phone ? <div className='text-danger text-sm'>{errors.phone}</div> : null}
                                    </div>
                                    <button type='submit' className="btn btn-secondary d-grid w-100 mt-4">
                                        {
                                            global.load ? "لطفا منتظر بمانید" : "ارسال کد"
                                        }
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
            }
        </>

    );
}

export default Login;