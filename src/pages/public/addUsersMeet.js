import { useState } from 'react';
import AddUserList from '../../components/shared/meet/addUserList';




const AddUsersMeet = () => {

    const [filter, setFilter] = useState("");

    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="col-md-12">
                    <div className="card mb-2">
                        <h5 className="card-header">جست و جو در بین مخاطبین</h5>
                        <div className="card-body">
                            <div className="row">
                                <div>
                                    <input onChange={(e) => setFilter(e.target.value)} type="text" className="form-control" id="defaultFormControlInput" placeholder="نام مخاطب" aria-describedby="defaultFormControlHelp" />
                                    <div id="defaultFormControlHelp" className="form-text d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AddUserList filter={filter} />
            </div>
        </div>
    );
}

export default AddUsersMeet;