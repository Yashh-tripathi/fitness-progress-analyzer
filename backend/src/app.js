import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

import cors from "cors";

const allowedOrigins = [
  "https://fitness-progress-analyzer.onrender.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({extended: true, limit: "40kb"}));
app.use(express.static("public"));
app.use(cookieParser());


//routes
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import logRoutes from "./routes/log.route.js";
import predictRoutes from "./routes/prediction.route.js"
import mlRoutes from "./routes/ml.route.js";

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/logs", logRoutes);
app.use("/api/v1/predict", predictRoutes);
app.use("/api/v1/ml", mlRoutes);


export {app};