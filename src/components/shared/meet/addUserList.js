import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../../redux/actions/contactAction';
import { useParams } from "react-router-dom";
import { addMasterToMeet } from '../../../redux/actions/meetAction';


const AddUserList = ({ filter }) => {

    const [audiencesId, setAudiencesId] = useState([]);
    const { auth, contacts } = useSelector(state => state);
    const customerId = auth.userId;
    const users = contacts.allContacts;
    let { id: meetingId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts(customerId, ""));
    }, [dispatch])

    const handleAddUserToMeet = (e) => {
        const value = e.target.getAttribute("value")
        const found = audiencesId.some(i => i == value);
        if (found) {
            const test = audiencesId.filter(i => i !== value)
            setAudiencesId(test)
        } else {
            audiencesId.push(value);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        let data = {
            meetingId,
            audiencesId
        }
        dispatch(addMasterToMeet(data));
        console.log(data);
    }

    return (
        <div className="card">
            <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h5 className="card-header">لیست مخاطبین</h5>
                <button className='btn btn-secondary' style={{ marginLeft: "1rem" }} onClick={(e) => handleSubmit(e)}>ثبت مخاطبین</button>
            </div>
            <div className="table-responsive text-nowrap">
                <table className="table">
                    <thead>
                        <tr>
                            <th>انتخاب</th>
                            <th>نام و نام خانوادگی</th>
                            <th>شماره تماس</th>
                            <th>سمت</th>
                            <th>مدرس</th>
                        </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                        {
                            users.map(i => {
                                return i.creatorName.includes(filter) ?
                                    <tr>
                                        <td><input className="form-check-input" type="checkbox" value={i.id} onChange={handleAddUserToMeet} /></td>
                                        <td><span>{i.creatorName}</span></td>
                                        <td><span className="badge bg-label-secondary">{i.mobile}</span></td>
                                        <td><span className="badge bg-label-secondary">{i.position}</span></td>
                                        <td><input className="form-check-input" type="radio" name='master' /></td>
                                    </tr>
                                    :
                                    null
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AddUserList;