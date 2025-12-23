import api from "../utils/axios.js";

const loginUser = async (data) => {
    const response = await api.post("/auth/login",data);
    return response;
}

 const registerUser = async (data) => {
    const response = await api.post("/auth/register",data);
    return response.data;
}

const logoutUser = async () => {
    await api.post("/auth/logout");
}

export default {loginUser, registerUser, logoutUser} 