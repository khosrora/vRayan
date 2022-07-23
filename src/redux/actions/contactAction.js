import { errorMessage, successMessage } from '../../utils/toast';
import { deleteDataAPI, getDataAPI, postDataAPI, putDataAPI, tokenUser } from './../../utils/fetchData';
import { GLOBALTYPES } from './globalTypes';

const token = `Bearer ${tokenUser}`

export const getContacts = () => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await getDataAPI('auth/contacts', token);
        dispatch({ type: GLOBALTYPES.GET_CONTACTS, payload: { contacts: res.data.contacts } });
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
        const res = await postDataAPI("auth/contacts", data, token);
        console.log(res);
        if (res.status === 200) {
            dispatch({ type: GLOBALTYPES.ADD_CONTACTS, payload: { contacts: res.data[1] } });
            successMessage(res.data[0]);
        };
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        errorMessage("لطفا دوباره امتحان کنید");
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    }
}

export const deleteUser = id => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await deleteDataAPI(`auth/contacts/${id}`, token);
        if (res.status === 200) {
            successMessage(res.data);
            dispatch({ type: GLOBALTYPES.DELETE_CONTACTS, payload: { id } });
        }
        console.log(res);
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        errorMessage("لطفا دوباره امتحان کنید");
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    }
}

export const editUserContact = data => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await putDataAPI(`auth/contacts/${data.id}`, data, token);
        console.log(res);
        if (res.status === 200) {
            successMessage(res.data);
            dispatch({ type: GLOBALTYPES.EDIT_CONTACTS, payload: { contacts: res.data[1], id: data.id } })
        }
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        console.log(err);
        errorMessage("لطفا دوباره امتحان کنید");
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    }
}