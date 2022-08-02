import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { completeProfile } from '../../redux/actions/userAction';

const EditUserValidation = Yup.object().shape({
    firstName: Yup.string().min(2, "نام انتخاب شده کوتاه است").max(100, "نام انتخاب شده بیش از حد بزرگ است").required("وارد کردن نام ضروری است"),
    lastName: Yup.string().min(2, "نام خانوادگی انتخاب شده کوتاه است").max(100, "نام خانوادگی انتخاب شده بیش از حد بزرگ است").required("وارد کردن نام خانوادگی ضروری است"),
    mobile: Yup.string().matches("^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}", "شماره همراه وارد شده نامعتبر است").required("وارد کردن شماره همراه ضروری است"),
    email: Yup.string().email("پست الکترونیک وارد شده معتبر نیست").required("وارد کردن پست الکترونیک ضروری است"),
});



const UserDetails = () => {

    const dispatch = useDispatch();
    const { auth } = useSelector(state => state);
    const user = auth.user;
    const id = auth.userId;

    return (
        <div class="content-wrapper">
            <div class="container-xxl flex-grow-1 container-p-y">
                <div className="card mb-4">
                    <h5 className="card-header">فرم ویرایش اطلاعات</h5>
                    <Formik
                        initialValues={{
                            id,
                            firstName: '',
                            lastName: '',
                            mobile: '',
                            email: '',
                        }}
                        validationSchema={EditUserValidation}
                        onSubmit={values => {
                            dispatch(completeProfile(values));
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className="card-body">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="firstName">نام</label>
                                        <Field placeholder={user?.firstName} type="text" id="firstName" name='firstName' className="form-control text-start" dir="ltr" />
                                        {errors.firstName && touched.firstName ? <span className='text-danger'>{errors.firstName}</span> : null}
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="lastName">نام خانوادگی</label>
                                        <Field placeholder={user?.lastName} type="text" id="lastName" name='lastName' className="form-control text-start" dir="ltr" />
                                        {errors.lastName && touched.lastName ? <span className='text-danger'>{errors.lastName}</span> : null}
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="email">پست الکترونیک</label>
                                        <div className="input-group input-group-merge">
                                            <span className="input-group-text" id="email" dir="ltr">@example.com</span>
                                            <Field placeholder={user?.email} type="text" id="email" name='email' className="form-control text-start" dir="ltr" aria-label="john.doe" aria-describedby="multicol-email2" />
                                        </div>
                                        {errors.email && touched.email ? <span className='text-danger'>{errors.email}</span> : null}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-password-toggle">
                                            <label className="form-label" htmlFor="mobile">شماره تماس</label>
                                            <div className="input-group input-group-merge">
                                                <Field placeholder={user?.mobile} type="tel" id="mobile" name='mobile' className="form-control text-start" dir="ltr" aria-describedby="multicol-password2" />
                                                <span className="input-group-text cursor-pointer" id="mobile"><i className="bx bx-mobile"></i></span>
                                            </div>
                                            {errors.mobile && touched.mobile ? <span className='text-danger'>{errors.mobile}</span> : null}
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <button type="submit" className="btn btn-secondary me-sm-3 me-1">
                                        ویرایش اطلاعات
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;