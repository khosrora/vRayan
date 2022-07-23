import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const getOtpSchema = Yup.object().shape({
    phone: Yup.string().matches("^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}", "شماره همراه وارد شده نامعتبر است").required("وارد کردن شماره همراه ضروری است"),
});


const Login = () => {
    return (
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
                }}
                validationSchema={getOtpSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="mb-3">
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">شماره تماس</label>
                            <Field type="text" className="form-control text-start" dir="ltr" id="phone" name="phone" placeholder="شماره تماس خود را وارد کنید" autoFocus />
                            {errors.phone && touched.phone ? <div className='text-danger text-sm'>{errors.phone}</div> : null}
                        </div>
                        <button type='submit' className="btn btn-secondary d-grid w-100 mt-4">ارسال کد</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Login;