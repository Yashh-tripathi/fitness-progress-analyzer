import api from "../utils/axios.js";

export const fetchProfile = async () => {
    const response = await api.get("/users/me")
    return response.data;
}

export const updateProfile = async (data) => {
    console.log(data)
    const response = await api.put("/users/me",data);
    console.log(response)
    return response.data;
}

