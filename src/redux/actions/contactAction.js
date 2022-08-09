import { errorMessage, successMessage } from '../../utils/toast';
import { deleteDataAPI, getDataAPI, postDataAPI, putDataAPI, tokenUser } from './../../utils/fetchData';
import { GLOBALTYPES } from './globalTypes';



export const getContacts = (customerId, category) => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await getDataAPI(`Audience?customerId=${customerId}&category=${category}`)
        dispatch({ type: GLOBALTYPES.GET_CONTACTS, payload: { contacts: res.data } });
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
        dispatch({ type: GLOBALTYPES.GET_CONTACTS, payload: { contacts: [] } });
        errorMessage("لطفا دوباره امتحان کنید");
    }
}


export const addContact = data => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await postDataAPI("Audience", data);
        console.log(res);
        if (res.status === 200) {
            successMessage(res.data.message);
            dispatch({ type: GLOBALTYPES.ADD_CONTACTS, payload: { contacts: res.data.value } });
        };
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        errorMessage(err.response.data);
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    }
}

export const deleteUser = (customerId, id) => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await postDataAPI(`Audience/Delete/${id}/${customerId}`);
        if (res.status === 200) {
            successMessage(res.data.message);
            dispatch({ type: GLOBALTYPES.DELETE_CONTACTS, payload: { id: res.data.value.id } });
        }
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        errorMessage("لطفا دوباره امتحان کنید");
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    }
}

export const editUserContact = data => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await postDataAPI(`Audience/edit`, data);
        console.log(res);
        if (res.status === 200) {
            successMessage(res.data.message);
            dispatch({ type: GLOBALTYPES.EDIT_CONTACTS, payload: { contacts: res.data.value } })
        }
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        console.log(err);
        errorMessage("لطفا دوباره امتحان کنید");
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    }
}