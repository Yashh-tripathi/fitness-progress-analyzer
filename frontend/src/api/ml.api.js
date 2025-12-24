import api from "../utils/axios.js";

export const fetchPrediction = async () => {
    const response = await api.get("/ml/predict")
    return response.data
}