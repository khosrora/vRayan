import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { checkOtp, getOtp } from '../../redux/actions/authAction';

const getOtpSchema = Yup.object().shape({
    phone: Yup.string().matches("^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}", "شماره همراه وارد شده نامعتبر است").required("وارد کردن شماره همراه ضروری است"),
});
const getCheckOtpSchema = Yup.object().shape({
    phone: Yup.string().matches("^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}", "شماره همراه وارد شده نامعتبر است").required("وارد کردن شماره همراه ضروری است"),
    token: Yup.string().required("وارد کردن کد ارسال شده ضروری است")
});


const Login = () => {

    const dispatch = useDispatch();
    const { auth, global } = useSelector(state => state);


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
                                    </div>
                                    <button type='submit' className="btn btn-secondary d-grid w-100 mt-4">
                                        {
                                            global.load ? "در حال دریافت اطلاعات" : "ورود"
                                        }
                                    </button>
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