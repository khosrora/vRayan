export const GLOBALTYPES = {
    LOADING: "LOADING",
    AUTH: "AUTH",
    USER: "USER",
    GET_ACCSESS_TOKEN: "GET_ACCSESS_TOKEN",
    LOAD_CATEGORIES: "LOAD_CATEGORIES",
    GET_CATEGORIES: "GET_CATEGORIES",
    ADD_CATEGORY: "ADD_CATEGORY",
    DELETE_CATEGORY: "DELETE_CATEGORY",
    EDIT_CATEGORY: "EDIT_CATEGORY",
    GET_CONTACTS: "GET_CONTACTS",
    ADD_CONTACTS: "ADD_CONTACTS",
    DELETE_CONTACTS: "DELETE_CONTACTS",
    EDIT_CONTACTS: "EDIT_CONTACTS",
    ADD_MEET: "ADD_MEET",
    GET_MEETS: "GET_MEETS",
    DELETE_MEET: "DELETE_MEET",
    LIST_MEETS: "LIST_MEETS"
}


export const EditData = (data, id, post) => {
    const newData = data.map(item =>
        (item.id === id ? post : item)
    )
    return newData;
}

export const DeleteData = (data, id) => {
    const newData = data.filter(item => item.id !== id)
    return newData;
}