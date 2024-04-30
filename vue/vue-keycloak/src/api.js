import axios from "./base.api";

export const getRoot = async () => {
    const response = await axios.get(`/`,{withCredentials: true});
    return response.data;
}

export const getPremium = async () => {
    const response = await axios.get(`/protected/premium`,{withCredentials: true});
    return response.data;
}