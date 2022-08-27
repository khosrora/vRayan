import { getDataAPI } from "../../utils/fetchData";




export const getPackages = async () => {
    try {
        const res =  await getDataAPI(`plan/`);
        return res.data
    } catch (error) {
        console.log(error);
    }
}