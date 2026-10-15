
import axios from "axios";

const api = axios.create({
    baseURL: "https://fitness-progress-backend.onrender.com" ||"http://localhost:4000/api/v1",
    withCredentials: true
});

export default api;