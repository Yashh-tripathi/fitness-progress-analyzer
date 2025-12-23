import api from "../utils/axios.js";

export const addDailyLog = async (logData) => {
  const response = await api.post("/logs", logData);
  return response.data;
};


export const fetchLatestLog = async () => {
    const response = await api.get("/logs/latest")
    return response.data
}

export const fetchAllLogs =async () => {
    const response = await api.get("/logs")
    return response.data
}


export const updateLog = async (id, data) => {
    const response = await api.put(`/logs/${id}`,data)
    return response.data
}

export const deleteLog = async (id) => {
    const response = await api.delete(`/logs/${id}`);
    return response.data
}