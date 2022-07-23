import { GLOBALTYPES } from './../actions/globalTypes';



const initialState = {
    user: null , 
    accessToken : null
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.USER :
            return {
                ...state , 
               user : action.payload.data , 
               accessToken : action.payload.accessToken
            }
        default:
            return state;
    }
}
export default authReducer;