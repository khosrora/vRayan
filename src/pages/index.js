import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";

// ! actions
import { refreshToken } from "../redux/actions/authAction";


// ? layout
import LayoutAuth from '../components/layouts/auth/LayoutAuth';
import Layout from '../components/layouts/panel/Layout';
import LayoutMeet from "../components/layouts/layoutMeet/LayoutMeet";

// ! Pages
import Login from "./auth/login";
import Dashboard from "./public/dashboard";
import Categories from "./public/categories";
import Contacts from "./public/Contacts";
import CreateMeeting from "./public/createMeet";
import MeetsUser from "./public/meetsUser";
import Meet from "./public/meet";
import AddUsersMeet from "./public/addUsersMeet";


const Index = () => {
    const [load, setLoad] = useState(true)
    const { auth } = useSelector(state => state);
    const token = auth.token;
    const id = auth.userId;
    const dispatch = useDispatch()

    useEffect(() => {
        if (token) dispatch(refreshToken(id));
        setLoad(false)
    }, [dispatch])


    if (load) return <p>لطفا منتظر بمانید</p>

    return (
        <Router>
            <Routes>
                {
                    auth.accessToken === null ?
                        <Route
                            path="*"
                            element={<Navigate to="/" replace />}
                        />
                        :
                        <>
                            <Route element={<Layout />} >
                                <Route path='/dashboard' element={<Dashboard />} />
                                <Route path='/create-categories' element={<Categories />} />
                                <Route path='/create-contacts' element={<Contacts />} />
                                <Route path='/create-meeting' element={<CreateMeeting />} />
                                <Route path='/all-meetings' element={<MeetsUser />} />
                                <Route path='/add-users-meet/:id' element={<AddUsersMeet />} />
                            </Route>
                            <Route element={<LayoutMeet />}>
                                <Route path='/check-meet/:id' element={<Meet />} />
                            </Route>
                        </>
                }
                {
                    auth.accessToken === null ?
                        <Route element={<LayoutAuth />} >
                            <Route path='/' element={<Login />} />
                        </Route>
                        :
                        <Route path='*' element={<Navigate to="/dashboard" replace />} />
                }
            </Routes>
        </Router >
    );
}

export default Index;