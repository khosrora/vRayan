import { GLOBALTYPES } from './../actions/globalTypes';



const initialState = {
    userId: null,
    user: null,
    accessToken: null,
    getOtp: false
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.USER:
            return {
                ...state,
                getOtp: action.payload.getOtp
            }
        case GLOBALTYPES.GET_ACCSESS_TOKEN:
            return {
                ...state,
                accessToken: action.payload.token,
                userId: action.payload.id,
                user: action.payload.userDetails,
            }
        default:
            return state;
    }
}
export default authReducer;