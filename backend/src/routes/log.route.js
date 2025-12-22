import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  addDailyLog,
  getDailyLogs,
  getLatestLog
} from "../controllers/log.controller.js";

const router = Router();

router.post("/", verifyJWT, addDailyLog);
router.get("/", verifyJWT, getDailyLogs);
router.get("/latest", verifyJWT, getLatestLog);

export default router;
