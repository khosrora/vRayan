import { DeleteData, EditData, GLOBALTYPES } from "../actions/globalTypes";




const initialState = {
    allCategories: [],
}
const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.GET_CATEGORIES:
            return {
                ...state,
                allCategories: action.payload.data
            }
        case GLOBALTYPES.ADD_CATEGORY:
            return {
                ...state,
                allCategories: [action.payload.category, ...state.allCategories]
            }
        case GLOBALTYPES.DELETE_CATEGORY:
            return {
                ...state,
                allCategories: DeleteData(state.allCategories, action.payload.id)
            }
        case GLOBALTYPES.EDIT_CATEGORY:
            return {
                ...state,
                allCategories: EditData(state.allCategories, action.payload.id, action.payload.category)
            }
        default:
            return state;
    }
}
export default categoriesReducer;