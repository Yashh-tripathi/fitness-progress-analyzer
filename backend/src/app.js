import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({extended: true, limit: "40kb"}));
app.use(express.static("public"));
app.use(cookieParser());


//routes
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import logRoutes from "./routes/log.route.js";

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/logs", logRoutes);



export {app};