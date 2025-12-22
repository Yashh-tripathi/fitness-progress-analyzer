import api from "../utils/axios.js";

export const addDailyLog = async (logData) => {
  const response = await api.post("/logs", logData);
  return response.data;
};
