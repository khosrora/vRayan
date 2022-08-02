import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { editCategory } from '../../../redux/actions/categoriesAction';



const editCategoryValidation = Yup.object().shape({
    title: Yup.string().required("وارد کردن فیلد نام دسته بندی ضروری است"),
    description: Yup.string().min(5, "توضیحات را بین 5 و 50 کاراکتر در نظر بگیرید").max(50, "توضیحات را بین 5 و 50 کاراکتر در نظر بگیرید").required("لطفا توضیحات دسته بندی را وارد کنید")
});


const EditCategory = ({ dataEdit, setEdit }) => {

    const { auth } = useSelector(state => state);
    const customerId = auth.userId;
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                title: '',
                description: '',
                id: dataEdit.id,
                customerId
            }}
            validationSchema={editCategoryValidation}
            onSubmit={values => {
                Swal.fire({
                    title: 'آیا مطمئن هستید ؟',
                    text: "بعد از ویرایش دسته بندی میتوانید حذف و ویرایش کنید",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'بله ویرابش کن',
                    cancelButtonText: 'منصرف شدم'
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        dispatch(editCategory(values))
                    }
                })
            }}
        >
            {({ errors, touched }) => (
                <Form className="card mb-2">
                    <h5 className="card-header">ویرابش دسته بندی </h5>
                    <div className="card-body row">
                        <Field type="hidden" id="id" name='id' value={dataEdit.id} />
                        <div className='col-xs-12 col-md-6'>
                            <label htmlFor="title">نام دسته بندی</label>
                            <Field type="text" placeholder={dataEdit.title} className="form-control mt-2" id="title" name="title" aria-describedby="defaultFormControlHelp" />
                            {errors.title && touched.title ? <span className='text-danger'>{errors.title}</span> : null} <br />
                        </div>
                        <div className='col-xs-12 col-md-6'>
                            <label htmlFor="description">توضیحات دسته بندی</label>
                            <Field type="text" className="form-control mt-2" placeholder={dataEdit.description} id="description" name="description" aria-describedby="defaultFormControlHelp" />
                            {errors.description && touched.description ? <span className='text-danger'>{errors.description}</span> : null} <br />
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-secondary mt-2">
                                ویرایش دسته بندی
                            </button>
                            <button onClick={() => setEdit(false)} type="submit" className="btn btn-outline-danger mt-2 mx-2">
                                انصراف
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default EditCategory;