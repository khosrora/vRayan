import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, getContacts } from '../../../redux/actions/contactAction';
import Swal from 'sweetalert2';
import Loader from '../loader';


const UsersTable = ({ filter, setEditUser }) => {

    const { contacts, global, auth } = useSelector(state => state);
    const users = contacts.allContacts;
    const customerId = auth.userId

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContacts(customerId, ""));
    }, [])

    const handleDelete = (id) => {
        Swal.fire({
            title: 'آیا مطمئن هستید ؟',
            text: "بعد از حذف کاربر میتوانید کاربری جدید اضافه کنید",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله حذف کن',
            cancelButtonText: 'منصرف شدم'
        }).then(async (result) => {
            if (result.isConfirmed) {
                dispatch(deleteUser(customerId, id));
            }
        });
    }


    if (!users) return <p>در حال دریافت اطلاعات</p>

    return (
        <div className="card">
            <h5 className="card-header">لیست مخاطبین</h5>
            {
                global.load ?
                    <Loader />
                    :
                    <div className="table-responsive text-nowrap">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>نام و نام خانوادگی</th>
                                    <th>شماره تماس</th>
                                    <th>دسته بندی</th>
                                    <th>#</th>
                                </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                                {
                                    users.map((i, index) => {
                                        return i.fullName.includes(filter)
                                            ?
                                            <tr key={index}>
                                                <td><strong>{i.fullName}</strong></td>
                                                <td><span className="badge bg-label-secondary">{i.mobile}</span></td>
                                                <td><span className="badge bg-label-secondary">{i.position}</span></td>
                                                <td>
                                                    <span onClick={() => handleDelete(i.id)} className="badge bg-label-danger rounded mx-2 p-2 cursor-pointer">
                                                        <i className="bx bx-trash bx-xs"></i>
                                                    </span>
                                                    <span onClick={() => setEditUser(i)} className="badge bg-label-secondary rounded p-2 cursor-pointer">
                                                        <i className="bx bx-pencil bx-xs"></i>
                                                    </span>
                                                </td>
                                            </tr>
                                            : null
                                    }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
}

export default UsersTable;