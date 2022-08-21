import { GLOBALTYPES, DeleteData } from "../actions/globalTypes";



const initialState = {
    allMeets: []
}


const meetReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.ADD_MEET:
            return {
                ...state , 
                allMeets : action.payload.meets
            }
        case GLOBALTYPES.GET_MEETS:
            return {
                ...state,
                allMeets: action.payload.meets
            }
        case GLOBALTYPES.DELETE_MEET:
            return {
                ...state,
                allMeets: DeleteData(state.allMeets, action.payload.id)
            }
        default:
            return state;
    }
}

export default meetReducer;