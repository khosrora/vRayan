import { combineReducers } from 'redux';

// ? reducers
import auth from './authReducer';
import global from './publicReducer';
import categories from './categoriesReducer';
import contacts from './contactsReducer';
import meets from './meetReducer';


export default combineReducers({
    auth,
    global,
    categories,
    contacts,
    meets
})