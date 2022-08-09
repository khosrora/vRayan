import { useState } from 'react';
import CreateUser from "../../components/shared/contacts/CreateUser";
import EditContact from '../../components/shared/contacts/EditContact';
import SearchContact from '../../components/shared/contacts/searchContact';
import UsersTable from '../../components/shared/contacts/usersTable';


const Contacts = () => {

    const [filter, setFilter] = useState("");
    const [editUser, setEditUser] = useState(null);
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="col-md-12">
                    {
                        editUser === null ?
                            <CreateUser />
                            :
                            <EditContact editUser={editUser}  setEditUser={setEditUser}/>
                    }
                    <SearchContact setFilter={setFilter} />
                </div>
                <UsersTable filter={filter} setEditUser={setEditUser} />
            </div>
        </div>
    );
}

export default Contacts;