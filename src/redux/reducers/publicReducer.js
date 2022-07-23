import { GLOBALTYPES } from "../actions/globalTypes";




const initialState = {
    load: false , 
    loadCategory : false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.LOADING:
            return {
                ...state,
                load: action.payload.load
        }
        case GLOBALTYPES.LOAD_CATEGORIES:
            return {
                ...state,
                loadCategory: action.payload.load
        }
        default:
            return state;
    }
}
export default authReducer;