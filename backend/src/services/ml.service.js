import axios from "axios";
import { ApiError } from "../utils/ApiError.js";

export const getMLPrediction = async (payload) => {
    try {
        const response = await axios.post(
            "http://localhost:8000/predict", // ML service
            payload
        );
        return response.data;
    } catch (error) {
        console.error("ML Service Error:", error.message);
        throw new ApiError(500, "Ml service error");
    }
}