import { errorMessage, successMessage } from '../../utils/toast';
import { getDataAPI, postDataAPI } from './../../utils/fetchData';
import { GLOBALTYPES } from './globalTypes';
import Cookies from 'js-cookie';


export const checkOtp = data => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await postDataAPI("Auth/Verify", data);
        if (res.status === 200) {
            successMessage("ورود شما موفقیت آمیز بود");
            Cookies.set("token__V_Rayan", res.data.token);
            Cookies.set("id__V_Rayan", res.data.id);
            dispatch({ type: GLOBALTYPES.GET_ACCSESS_TOKEN, payload: { token: res.data.token, id: res.data.id } });
        }
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        if (err) errorMessage("لطفا در وارد کردن کد دقت کنید");
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    }
}

export const getOtp = data => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await postDataAPI("Auth/Login", data);
        if (res.status === 200) {
            successMessage("ورود موفقیت آمیز بود");
            dispatch({ type: GLOBALTYPES.USER, payload: { getOtp: true } })
        }
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        console.log(err);
        if (err.response.status) errorMessage("لطفا ابتدا ثبت نام کنید");
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    }
}

export const refreshToken = (id, token) => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await getDataAPI(`Customer/${id}`);
        dispatch({ type: GLOBALTYPES.GET_ACCSESS_TOKEN, payload: { userDetails: res.data, token, id } })
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        console.log(err);
        if (err.response.status) errorMessage("لطفا ابتدا ثبت نام کنید");
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    }
}

export const logOut = () => dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        Cookies.remove("token__V_Rayan");
        Cookies.remove("id__V_Rayan");
        dispatch({ type: GLOBALTYPES.GET_ACCSESS_TOKEN, payload: { userDetails: null, token: null, id: null } })
        errorMessage("عملیات خروج انجام شد");
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    }
}