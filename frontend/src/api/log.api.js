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