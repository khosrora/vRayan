import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory } from '../../../redux/actions/categoriesAction';
import Moment from '../../../utils/moment';
import Swal from 'sweetalert2';


const CartCategories = ({ setEdit, setDataEdit, filter }) => {

    const { auth, categories } = useSelector(state => state)
    const data = categories.allCategories;
    const dispatch = useDispatch();
    const customerId = auth.userId;

    const handleDelete = (id) => {
        Swal.fire({
            title: 'آیا مطمئن هستید ؟',
            text: "بعد از حذف همچنان میتوانید دسته بندی جدید اضافه کنید",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله مطمئنم',
            cancelButtonText: 'منصرف شدم'
        }).then(async (result) => {
            if (result.isConfirmed) {
                dispatch(deleteCategory(id, customerId))
            }
        })
    }

    const handleEdit = (data) => {
        setDataEdit({ ...data })
        setEdit(true)
    }

    return (
        <>
            {
                data.map(i => {
                    return i.title.includes(filter)
                        ?
                        <div className="col-xs-6 col-sm-6 col-xl-3 my-2">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div className="content-left">
                                            <p className="secondary-font fw-medium text-sm">تاریخ ثبت :‌ <span>
                                                <Moment date={i.creationDate} />
                                            </span> </p>
                                            <div className="d-flex align-items-baseline my-4">
                                                <h5 className="mb-0 me-2">{i.title}</h5>
                                            </div>
                                            <small>{i.description}</small>
                                        </div>
                                        <span onClick={() => handleDelete(i.id)} className="badge bg-label-danger rounded mx-2 p-2 cursor-pointer">
                                            <i className="bx bx-trash bx-xs"></i>
                                        </span>
                                        <span onClick={() => handleEdit({ ...i })} className="badge bg-label-secondary rounded p-2 cursor-pointer">
                                            <i className="bx bx-pencil bx-xs"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }
                )
            }
        </>
    );
}

export default CartCategories;