import { getDataAPI, postDataAPI, deleteDataAPI, putDataAPI, tokenUser } from '../../utils/fetchData';
import { successMessage, errorMessage } from '../../utils/toast';
import { GLOBALTYPES } from './globalTypes';


const token = `Bearer ${tokenUser}`

export const getCategories = () => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: true } });
        const res = await getDataAPI('auth/categories', token);
        dispatch({ type: GLOBALTYPES.GET_CATEGORIES, payload: { data: res.data.categories } });
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: false } });
    } catch (err) {
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: false } });
        dispatch({ type: GLOBALTYPES.GET_CATEGORIES, payload: { data: [] } });
        errorMessage("لطفا دوباره تلاش کنید");
    }
}

export const createCategory = data => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: true } });
        const res = await postDataAPI('auth/categories', data, token);
        if (res.status === 200) {
            successMessage(res.data[0]);
            dispatch({ type: GLOBALTYPES.ADD_CATEGORY, payload: { category: res.data[1] } });
        }
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: false } });
    } catch (err) {
        errorMessage("لطفا دوباره تلاش کنید");
    }
}

export const deleteCategory = id => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: true } });
        const res = await deleteDataAPI(`auth/categories/${id}`, token);
        if (res.status === 200) {
            successMessage(res.data);
            dispatch({ type: GLOBALTYPES.DELETE_CATEGORY, payload: { id } });
        }
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: false } });
    } catch (err) {
        errorMessage("لطفا دوباره تلاش کنید");
    }
}

export const editCategory = data => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: true } });
        const res = await putDataAPI(`auth/categories/${data.id}`, { name: data.name }, token);
        if (res.status === 200) {
            successMessage(res.data[0]);
        }
        dispatch({type : GLOBALTYPES.EDIT_CATEGORY , payload : {category : res.data[1] , id : data.id}})
        dispatch({ type: GLOBALTYPES.LOAD_CATEGORIES, payload: { load: false } });
    } catch (err) {
        errorMessage("لطفا دوباره تلاش کنید");
    }
}