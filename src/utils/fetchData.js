import axios from "axios";
import { server } from "./baseUrl"
import Cookies from 'js-cookie'

export const tokenUser = Cookies.get('accToken');


export const getDataAPI = async (url, token) => {
    const res = await axios.get(`${server}/api/${url}`, {
        headers: {
            Authorization: token
        }
    })
    return res;
}
export const postDataAPI = async (url, post, token) => {
    const res = await axios.post(`${server}/api/${url}`, post, {
        headers: {
            Authorization: token
        }
    })
    return res;
}
export const putDataAPI = async (url, post, token) => {
    const res = await axios.put(`${server}/api/${url}`, post, {
        headers: { Authorization: token }
    })
    return res;
}
export const patchDataAPI = async (url, post, token) => {
    const res = await axios.get(`${server}/api/${url}`, post, {
        headers: { Authorization: token }
    })
    return res;
}
export const deleteDataAPI = async (url, token) => {
    const res = await axios.delete(`${server}/api/${url}`, {
        headers: { Authorization: token }
    })
    return res;
}