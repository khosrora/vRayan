import { getDataAPI, postDataAPI, deleteDataAPI, putDataAPI, tokenUser } from '../../utils/fetchData';
import { successMessage, errorMessage } from '../../utils/toast';
import { GLOBALTYPES } from './globalTypes';


export const getCategories = (id) => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: true } });
        const res = await getDataAPI(`Category/getAll/${id}`);
        dispatch({ type: GLOBALTYPES.GET_CATEGORIES, payload: { data: res.data } });
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: false } });
    } catch (err) {
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: false } });
        dispatch({ type: GLOBALTYPES.GET_CATEGORIES, payload: { data: [] } });
        errorMessage(err.response.data);
    }
}

export const createCategory = data => async dispatch => {
    try {
        console.log(data);
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: true } });
        const res = await postDataAPI('Category', data);
        if (res.status === 200) {
            successMessage(res.data.message);
            dispatch({ type: GLOBALTYPES.ADD_CATEGORY, payload: { category: res.data.value } });
        }
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: false } });
    } catch (err) {
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: false } });
        errorMessage(err.response.data);
    }
}

export const deleteCategory = (id, customerID) => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: true } });
        const res = await postDataAPI(`Category/Delete/${id}/${customerID}`);
        if (res.status === 200) {
            successMessage(res.data.message);
            dispatch({ type: GLOBALTYPES.DELETE_CATEGORY, payload: { id } });
        }
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: false } });
    } catch (err) {
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: false } });
        errorMessage(err.response.data);
    }
}

export const editCategory = data => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: true } });
        const res = await postDataAPI(`Category/Edit`, { name: data.name });
        if (res.status === 200) {
            successMessage(res.data[0]);
        }
        dispatch({ type: GLOBALTYPES.EDIT_CATEGORY, payload: { category: res.data[1], id: data.id } })
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: false } });
    } catch (err) {
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: false } });
        errorMessage(err.response.data);
    }
}