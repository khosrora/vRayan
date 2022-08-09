import { DeleteData, EditData, GLOBALTYPES } from "../actions/globalTypes";




const initialState = {
    allContacts: []
}


const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.GET_CONTACTS:
            return {
                ...state,
                allContacts: action.payload.contacts
            }
        case GLOBALTYPES.ADD_CONTACTS:
            return {
                ...state,
                allContacts: [action.payload.contacts, ...state.allContacts]
            }
        case GLOBALTYPES.DELETE_CONTACTS:
            return {
                ...state,
                allContacts: DeleteData(state.allContacts, action.payload.id)
            }
        case GLOBALTYPES.EDIT_CONTACTS:
            return {
                ...state,
                allContacts: EditData(state.allContacts, action.payload.contacts.id, action.payload.contacts)
            }
        default:
            return state;
    }
}
export default contactsReducer;