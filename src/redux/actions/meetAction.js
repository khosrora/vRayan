import { getDataAPI, postDataAPI, deleteDataAPI, putDataAPI, tokenUser } from '../../utils/fetchData';
import { successMessage, errorMessage } from '../../utils/toast';
import { GLOBALTYPES } from './globalTypes';



const token = `Bearer ${tokenUser}`

export const createMeet = data => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await postDataAPI('Meeting', data, token);
        if (res.status === 200) {
            dispatch({ type: GLOBALTYPES.ADD_MEET, payload: { meets: res.data.data } })
            successMessage(res.data);
        }
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
        errorMessage("لطفا دوباره تلاش کنید");
    }
}
export const createMeetVerbal = data => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await postDataAPI('FaceToFace', data, token);
        if (res.status === 200) {
            successMessage(res.data);
        }
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
        errorMessage("لطفا دوباره تلاش کنید");
    }
}

export const getMeets = (customerId) => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await getDataAPI(`Meeting/all?CustomerId=${customerId}`);
        dispatch({ type: GLOBALTYPES.GET_MEETS, payload: { meets: res.data.data } })
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        console.log(err);
        dispatch({ type: GLOBALTYPES.GET_MEETS, payload: { meets: [] } })
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
        errorMessage("لطفا دوباره تلاش کنید");
    }
}

export const getAudiences = (customerId) => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await getDataAPI(`FaceToFace/all?CustomerId=${customerId}`);
        dispatch({ type: GLOBALTYPES.GET_MEETS, payload: { meets: res.data.data } })
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        console.log(err);
        dispatch({ type: GLOBALTYPES.GET_MEETS, payload: { meets: [] } })
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
        errorMessage("لطفا دوباره تلاش کنید");
    }
}

export const deleteMeet = (customerId, id, type) => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        let res;
        if (type === "meeting") {
            res = await postDataAPI(`Meeting/delete/${customerId}/${id}`);
        } else {
            res = await postDataAPI(`FaceToFace/delete/${customerId}/${id}`);
        }
        if (res.status === 200) {
            successMessage(res.data);
            dispatch({ type: GLOBALTYPES.DELETE_MEET, payload: { id } });
        }
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
        errorMessage("لطفا دوباره تلاش کنید");
    }
};

export const addUserToMeet = data => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await postDataAPI('auth/sessions/addcontact', data, token);
        if (res.status === 200) {
            successMessage(res.data[0]);
        }
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
        errorMessage("لطفا دوباره تلاش کنید");
    }
}

export const addMasterToMeet = data => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await postDataAPI(`Invitation`, data);
        if (res.status === 200) {
            successMessage(res.data);
        }
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
        errorMessage("لطفا دوباره تلاش کنید");
    }
}

export const sendSms = id => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await postDataAPI('auth/sessions/sendmessage', { s_id: id }, token);
        if (res.status === 200) {
            successMessage(res.data[0]);
        }
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
        errorMessage("لطفا دوباره تلاش کنید");
    }
}

export const getMeet = async (id) => {
    try {
        const res = await getDataAPI(`Meeting/${id}`, token);
        return res.data;
    } catch (error) {
        errorMessage("لطفا دوباره تلاش کنید");
    }
}