import { GLOBALTYPES } from './globalTypes';
import { postDataAPI, putDataAPI, tokenUser } from './../../utils/fetchData';


const token = `Bearer ${tokenUser}`

export const editUserAction = data => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await putDataAPI(`auth/edite-profile/${data.id}`, data, token);
        console.log(res);
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        console.log(err);
    }
}
