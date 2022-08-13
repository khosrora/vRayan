import { GLOBALTYPES } from './globalTypes';
import { postDataAPI, putDataAPI } from './../../utils/fetchData';
import { successMessage } from '../../utils/toast';



export const completeProfile = data => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await postDataAPI(`Customer/edit`, data);
        if (res.status === 200) {
            successMessage(res.data.message);
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
