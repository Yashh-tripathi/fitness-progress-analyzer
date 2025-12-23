import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  addDailyLog,
  deleteLog,
  getDailyLogs,
  getLatestLog,
  updateDailyLog
} from "../controllers/log.controller.js";

const router = Router();

router.post("/", verifyJWT, addDailyLog);
router.get("/", verifyJWT, getDailyLogs);
router.get("/latest", verifyJWT, getLatestLog);
router.route("/:id").put(verifyJWT,updateDailyLog);
router.route("/:id").delete(verifyJWT, deleteLog);

export default router;
