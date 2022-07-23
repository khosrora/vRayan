import { errorMessage, successMessage } from '../../utils/toast';
import { postDataAPI } from './../../utils/fetchData';
import { GLOBALTYPES } from './globalTypes';
import Cookies from 'js-cookie';


export const registerUser = data => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await postDataAPI("auth/register", data);
        console.log(res);
        if (res.status === 201) successMessage("ثبت نام موفقیت آمیز بود");
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        if (err) errorMessage("لطفا دوباره امتحان کنید");
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    }
}

export const loginUser = data => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await postDataAPI("auth/login", data);
        if (res.data.access_token) {
            successMessage("ورود موفقیت آمیز بود");
            Cookies.set('firstLogin', JSON.stringify(res.data.user));
            Cookies.set('accToken', res.data.access_token);
        }
        dispatch({ type: GLOBALTYPES.USER, payload: { data: res.data.user, accessToken: res.data.access_token } })
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        console.log(err);
        if (err.response.status) errorMessage("لطفا ابتدا ثبت نام کنید");
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    }
}

export const refreshUser = () => async dispatch => {
    const user = JSON.parse(Cookies.get("firstLogin"));
    const accessToken = Cookies.get("accToken");
    try {
        if (user) {
            dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
            dispatch({ type: GLOBALTYPES.USER, payload: { data: user, accessToken } })
            dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
        }
    } catch (err) {
        if (err.response.status) errorMessage("لطفا ابتدا وارد وب سایت شوید");
        dispatch({ type: GLOBALTYPES.USER, payload: { data: null } })
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    }
}

export const logOut = () => dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        Cookies.remove('firstLogin');
        Cookies.remove('accToken');
        dispatch({ type: GLOBALTYPES.USER, payload: { data: null } });
        errorMessage("عملیات خروج انجام شد");
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    }
}