import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  addDailyLog,
  getDailyLogs
} from "../controllers/log.controller.js";

const router = Router();

router.post("/", verifyJWT, addDailyLog);
router.get("/", verifyJWT, getDailyLogs);

export default router;
