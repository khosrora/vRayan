import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

// ! actions
import { refreshUser } from "../redux/actions/authAction";


// ? layout
import LayoutAuth from '../components/layouts/auth/LayoutAuth';
import Layout from '../components/layouts/panel/Layout';
import LayoutMeet from "../components/layouts/layoutMeet/LayoutMeet";

// ! Pages
import Login from "./auth/login";


const Index = () => {
    const { auth } = useSelector(state => state);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(refreshUser());
    }, [])

    return (
        <Router>
            <Routes>
                {
                    auth.user === null
                        ?
                        <Route element={<LayoutAuth />} >
                            <Route path='/' element={<Login />} />
                        </Route>
                        :
                        <Route
                            path="*"
                            element={<Navigate to="/profile" replace />}
                        />
                }
                {
                    auth.user === null
                        ?
                        <Route
                            path="*"
                            element={<Navigate to="/" replace />}
                        />
                        :
                        <>
                            <Route element={<Layout />} >
                                <Route path='/' element={<h1>test</h1>} />
                            </Route>
                        </>
                }
            </Routes>
        </Router >
    );
}

export default Index;