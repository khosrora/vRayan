import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { createCategory } from '../../../redux/actions/categoriesAction';
import Swal from 'sweetalert2';



const createCategoryValidation = Yup.object().shape({
    title: Yup.string().required("وارد کردن فیلد نام دسته بندی ضروری است"),
    description: Yup.string().min(5, "توضیحات را بین 5 و 50 کاراکتر در نظر بگیرید").max(20, "توضیحات را بین 5 و 20 کاراکتر در نظر بگیرید").required("لطفا توضیحات دسته بندی را وارد کنید")
});


const CreateCategory = () => {

    const { auth } = useSelector(state => state);
    const customerId = auth.userId;
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                customerId,
                title: '',
                description: ''
            }}
            validationSchema={createCategoryValidation}
            onSubmit={values => {
                dispatch(createCategory(values));
            }}
        >
            {({ errors, touched }) => (
                <Form className="card mb-2">
                    <h5 className="card-header">ایجاد دسته بندی جدید</h5>
                    <div className="card-body row">
                        <div className='col-xs-12 col-md-6'>
                            <label htmlFor="title">نام دسته بندی</label>
                            <Field type="text" className="form-control mt-2" id="title" name="title" aria-describedby="defaultFormControlHelp" />
                            {errors.title && touched.title ? <span className='text-danger'>{errors.title}</span> : null} <br />
                        </div>
                        <div className='col-xs-12 col-md-6'>
                            <label htmlFor="description">توضیحات دسته بندی</label>
                            <Field type="text" className="form-control mt-2" id="description" name="description" aria-description="defaultFormControlHelp" />
                            {errors.description && touched.description ? <span className='text-danger'>{errors.description}</span> : null} <br />
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-secondary mt-2">
                                ثبت دسته بندی جدید
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik >
    );
}

export default CreateCategory;