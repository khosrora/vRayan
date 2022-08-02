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
// import LayoutMeet from "../components/layouts/layoutMeet/LayoutMeet";

// ! Pages
import Login from "./auth/login";
import Dashboard from "./public/dashboard";
import UserDetails from "./public/UserDetails";
import Categories from "./public/categories";


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
                        <Route element={<Layout />} >
                            <Route path='/dashboard' element={<Dashboard />} />
                            <Route path='/userDetails' element={<UserDetails />} />
                            <Route path='/create-categories' element={<Categories />} />
                        </Route>
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