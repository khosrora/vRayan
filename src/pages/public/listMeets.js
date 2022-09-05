import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../../components/shared/loader';
import { getListMeetsUser } from '../../redux/actions/meetAction';



const ListMeets = () => {

    const [filter, setFilter] = useState("");
    const { auth, meets } = useSelector(state => state);
    const userId = auth.userId;
    const data = meets.listmeets;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListMeetsUser(userId))
    }, [])

    console.log(data);
    if (!data.length) return <p>جلسه ای برای نمایش وجود ندارد</p>
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="col-md-12">
                    <div className="card mb-2">
                        <h5 className="card-header">جست و جو در بین جلسات دعوت شده شما </h5>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xs-12">
                                    <label for="defaultSelect" class="form-label">جست و جو جلسات</label>
                                    <input onChange={(e) => setFilter(e.target.value)} type="text" className="form-control" id="defaultFormControlInput" placeholder="عنوان جلسه مورد نظر را جست و جو کنید" aria-describedby="defaultFormControlHelp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                            <th>عنوان جلسه</th>
                                            <th>نوع جلسه</th>
                                            <th>کد امنیتی</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-border-bottom-0">
                                        {
                                            data.map((i, index) => {
                                                return i.title.includes(filter)
                                                    ?
                                                    <tr key={index}>
                                                        <td>{i.title}</td>
                                                        <td>{i.meetingType}</td>
                                                        <td><span className='badge bg-label-danger'>{i.password}</span></td>
                                                        <td>
                                                            <Link to={`/waiting?id=${i.meetId}`} target="_blank">
                                                                <span className='badge bg-label-success'>برو به جلسه</span>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                    : null
                                            })}

                                    </tbody>
                                </table>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListMeets;