import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMeet, getMeets, sendSms } from '../../redux/actions/meetAction';
import Swal from 'sweetalert2';
import Loader from '../../components/shared/loader';
import SearchMeets from '../../components/shared/meet/searchMeets';



const MeetsUser = () => {

    const [filter, setFilter] = useState("");
    const { auth, meets, global } = useSelector(state => state);
    const userId = auth.userId;
    const sessions = meets.allMeets;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMeets(userId))
    }, []);

    const handleSendSms = (id) => {
        Swal.fire({
            title: 'آیا مطمئن هستید ؟',
            text: "پیامک حاوی آدرس جلسه برای کاربران ارسال خواهد شد.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله ارسال کن',
            cancelButtonText: 'منصرف شدم'
        }).then(async (result) => {
            if (result.isConfirmed) {
                dispatch(sendSms(id));
            }
        });
    }

    const handleDelete = (userId, id) => {
        Swal.fire({
            title: 'آیا مطمئن هستید ؟',
            text: "بعد از حذف  میتوانید جلسه دیگری ایجاد کنید",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله حذف کن',
            cancelButtonText: 'منصرف شدم'
        }).then(async (result) => {
            if (result.isConfirmed) {
                dispatch(deleteMeet(userId, id));
            }
        });
    }

    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <SearchMeets setFilter={setFilter} />
                <div className="card">
                    <div className="table-responsive text-nowrap">
                        {
                            global.load
                                ?
                                <Loader />
                                :
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>عنوان</th>
                                            <th>تاریخ شروع</th>
                                            <th>زمان شروع</th>
                                            <th>وضعیت جلسات</th>
                                            <th>#</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-border-bottom-0">
                                        {
                                            sessions.map((i, index) => {
                                                return i.title.includes(filter)
                                                    ?
                                                    <tr key={index}>
                                                        <td><strong>{i.title}</strong></td>
                                                        <td><span className="badge bg-label-secondary">{i.persianCreationDate}</span></td>
                                                        <td><span className="badge bg-label-secondary">{i.startTime}</span></td>
                                                        <td>
                                                            <span className="badge bg-label-primary cursor-pointer">شروع جلسه</span>
                                                        </td>
                                                        <td>
                                                            <i onClick={() => handleDelete(userId, i.id)} className="align-middle fmenu-icon tf-icons bx bx-trash text-danger me-3 cursor-pointer"></i>
                                                            <Link to={`/add-users-meet/${i.id}`} className="badge bg-label-secondary me-1 cursor-pointer">افزودن مخاطب</Link>
                                                            {/* <a href={`https://video.videorayan.com/${i.sess_token}`} target="_blank" className='badge bg-label-warning cursor-pointer'>برو به جلسه</a> */}
                                                            <Link to={`/check-meet/${i.id}`} className='badge bg-label-warning cursor-pointer'>برو به جلسه</Link>
                                                            <span className='badge bg-label-success cursor-pointer' onClick={() => handleSendSms(i.id)}>ارسال پیام</span>
                                                        </td>
                                                    </tr>
                                                    :
                                                    null
                                            }
                                            )
                                        }
                                    </tbody>
                                </table>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MeetsUser;