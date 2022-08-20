import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../../redux/actions/contactAction';
import { getCategories } from '../../../redux/actions/categoriesAction';

const createUserValidation = Yup.object().shape({
    fullName: Yup.string().min(2, "نام کاربری بیش از حد کوتاه است").max(50, "نام کاربری بیش از حد بزرگ است").required("وارد کردن این فیلد الزامی است"),
    mobile: Yup.string().required("وارد کردن این فیلد الزامی است").max(11, "شماره تماس وارد شده بیش از حد مجاز است").matches("09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}", "شماره تماس وارد شده معتبر نیست"),
    position: Yup.string().min(2, "سمت مخاطب نباید کمتر از 2 کاراکتر باشد").max(50, "سمت کاربر نباید بیشتر از 50 کاراکتر باشد").required("وارد کردن این فیلد الزامی است"),
});



const CreateUser = () => {

    const [select, setSelect] = useState("");
    const { categories, auth } = useSelector(state => state);
    const dispatch = useDispatch();
    const categoryData = categories.allCategories;
    const id = auth.userId;
    useEffect(() => {
        dispatch(getCategories(id));
    }, [dispatch]);

    return (
        <div className="card mb-2">
            <h5 className="card-header">ایجاد مخاطب جدید</h5>
            <div className="card-body">
                <Formik
                    initialValues={{
                        fullName: "",
                        mobile: "",
                        position: "",
                    }}
                    validationSchema={createUserValidation}
                    onSubmit={values => {
                        values.userId = id;
                        values.categoryId = select;
                        dispatch(addContact(values))
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="row">
                            <div className="col-xs-12  col-md-6 my-2">
                                <label htmlFor="fullName">نام و نام خانوادگی</label>
                                <Field type="text" name="fullName" className="form-control mt-2" placeholder="" />
                                {errors.fullName && touched.fullName ? <span className='text-danger'>{errors.fullName}</span> : null}
                            </div>
                            <div className="col-xs-12  col-md-6 my-2">
                                <label htmlFor="mobile">شماره تماس</label>
                                <Field type="text" name="mobile" className="form-control mt-2" placeholder="" />
                                {errors.mobile && touched.mobile ? <span className='text-danger'>{errors.mobile}</span> : null}
                            </div>
                            <div className="col-xs-12  col-md-6 my-2">
                                <label htmlFor="position">سمت</label>
                                <Field type="text" name="position" className="form-control mt-2" placeholder="" />
                                {errors.position && touched.position ? <span className='text-danger'>{errors.position}</span> : null}
                            </div>
                            <div className="col-xs-12  col-md-6 my-2">
                                <div class="mb-3">
                                    <label className="form-label">دسته بندی</label>
                                    <select name='position' onChange={(e) => setSelect(e.target.value)} className="form-control mt-1">
                                        <option value="">لطفا دسته بندی را مشخص کنید</option>
                                        {
                                            categoryData.map(i =>
                                                <option value={i.id}>{i.title}</option>
                                            )
                                        }
                                    </select>
                                    {
                                        select === "" ? <span className='text-danger'>لطفا دسته بندی مورد نظر را انتخاب کنید</span> : null
                                    }
                                </div>
                            </div>
                            <div className="">
                                <button type='submit' className="btn btn-secondary mt-2" disabled={select === "" ? true : false}>ایجاد مخاطب</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default CreateUser;