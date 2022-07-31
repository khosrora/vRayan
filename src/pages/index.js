import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

// ! actions
import { refreshToken, refreshUser } from "../redux/actions/authAction";


// ? layout
import LayoutAuth from '../components/layouts/auth/LayoutAuth';
import Layout from '../components/layouts/panel/Layout';
import LayoutMeet from "../components/layouts/layoutMeet/LayoutMeet";

// ! Pages
import Login from "./auth/login";
import Dashboard from "./public/dashboard";


const Index = () => {

    const { auth } = useSelector(state => state);
    const token = auth.token;
    const id = auth.userId;     
    const dispatch = useDispatch()

    useEffect(() => {
        if(token) dispatch(refreshToken(id));
    }, [dispatch])

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