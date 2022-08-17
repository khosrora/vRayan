import { GLOBALTYPES } from './globalTypes';
import { postDataAPI } from './../../utils/fetchData';
import { successMessage } from '../../utils/toast';
import Cookies from 'js-cookie';



export const completeProfile = data => async dispatch => {
    const id = Cookies.get("id__V_Rayan");
    const token = Cookies.get("token__V_Rayan");
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await postDataAPI(`Customer/edit`, data);
        if (res.status === 200) {
            successMessage(res.data.message);
            dispatch({ type: GLOBALTYPES.GET_ACCSESS_TOKEN, payload: { userDetails: res.data.value, token, id } })
        }
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        console.log(err);
    }
}

export const changeImage = data => async dispatch => {
    try {
        console.log(data);
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await postDataAPI(`Customer/editLogo`, data);
        console.log(res);
        // if (res.status === 200) {
        //     successMessage(res.data.message);
        // }
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        console.log(err);
    }
}
