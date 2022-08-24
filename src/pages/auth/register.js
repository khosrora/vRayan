import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/actions/authAction';
import { Link } from 'react-router-dom';





const registerSchema = Yup.object().shape({
    email: Yup.string().email('پست الکترونیک شما معتبر نیست').required('وارد کردن پست الکترونیک ضروری است'),
    password: Yup.string().min(4, "کلمه عبور کوتاه است").required("وارد کردن کلمه عبور ضروری است"),
    password_confirmation: Yup.string().min(4, "کلمه عبور کوتاه است").required("وارد کردن کلمه عبور ضروری است").oneOf([Yup.ref('password'), null], 'کلمات عبور یکسان نیستند'),
    username: Yup.string().min(3, "نام کاربری نباید کمتر از 3 کاراکتر باشد").max(50, "نام کاربری نباید بیشتر از 50 کاراکتر باشد").required("وارد کردن نام کاربری الزامی است"),
    phone: Yup.string().matches("^09([1-9][0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}", "شماره همراه وارد شده نامعتبر است").required("وارد کردن شماره همراه ضروری است"),
});


const Register = () => {
    const [see, setSee] = useState(false)
    const [confirmSee, setConfirmSee] = useState(false)
    const dispatch = useDispatch();

    const { global } = useSelector(state => state);

    return (
        <div className="w-px-400 mx-auto">
            <div className="app-brand mb-2">
                <a href="index.html" className="app-brand-link gap-2 mb-2">
                    <span className="app-brand-text demo h3 mb-0 fw-bold">ویدیو رایان</span>
                </a>
            </div>
            <p className="mb-4">فرم ثبت نام حساب کاربری</p>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    password_confirmation: '',
                    username: '',
                    phone: ''
                }}
                validationSchema={registerSchema}
                onSubmit={values => {
                    dispatch(registerUser(values));
                }}
            >
                {({ errors, touched }) => (
                    <Form className="mb-3">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">نام کاربری</label>
                            <Field type="text" className="form-control text-start" dir="ltr" id="username" name="username" placeholder="نام کاربری خود را وارد کنید" autoFocus />
                            {errors.username && touched.username ? <div className='text-danger text-sm'>{errors.username}</div> : null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">پست الکترونیک</label>
                            <Field type="text" className="form-control text-start" dir="ltr" id="email" name="email" placeholder="پست الکترونیک خود را وارد کنید" autoFocus />
                            {errors.email && touched.email ? <div className='text-danger text-sm'>{errors.email}</div> : null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">شماره تماس</label>
                            <Field type="text" className="form-control text-start" dir="ltr" id="phone" name="phone" placeholder="شماره تماس خود را وارد کنید" autoFocus />
                            {errors.phone && touched.phone ? <div className='text-danger text-sm'>{errors.phone}</div> : null}
                        </div>
                        <div className="mb-3 form-password-toggle">
                            <div className="d-flex justify-content-between">
                                <label className="form-label" htmlFor="password">کلمه عبور</label>
                            </div>
                            <div className="input-group input-group-merge">
                                <Field type={see ? "text" : "password"} className="form-control text-start" dir="ltr" name="password" placeholder="············" aria-describedby="password" />
                                <span onClick={() => setSee(!see)} className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                            </div>
                            {errors.password && touched.password ? <div className='text-danger text-sm'>{errors.password}</div> : null}
                        </div>
                        <div className="mb-3 form-password-toggle">
                            <div className="d-flex justify-content-between">
                                <label className="form-label" htmlFor="password">تایید کلمه عبور</label>
                            </div>
                            <div className="input-group input-group-merge">
                                <Field type={confirmSee ? "text" : "password"} className="form-control text-start" dir="ltr" name="password_confirmation" placeholder="············" aria-describedby="password_confirmation" />
                                <span onClick={() => setConfirmSee(!confirmSee)} className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                            </div>
                            {errors.password_confirmation && touched.password_confirmation ? <div className='text-danger text-sm'>{errors.password_confirmation}</div> : null}
                        </div>
                        <button type='submit' className="btn btn-secondary d-grid w-100 mt-4">
                            {
                                global.load
                                    ?
                                    "لطفا منتظر باشید"
                                    :
                                    "ثبت نام"
                            }
                        </button>
                    </Form>
                )}
            </Formik>
      
        </div>
    );
}

export default Register;