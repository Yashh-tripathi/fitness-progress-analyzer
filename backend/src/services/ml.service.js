import axios from "axios";

export const getMLPrediction = async (payload) => {
    try {
        const response = await axios.post(
          "http://127.0.0.1:8000/predict",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
            timeout: 5000,
          }
        );
    
        return response.data;
      } catch (error) {
        console.error("ML Service Error:", error.message);
        throw new Error("ML service unavailable");
      }
}