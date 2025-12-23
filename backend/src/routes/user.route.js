import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { getCurrentUser, updateProfile } from "../controllers/user.controller.js";

const router = Router();


router.route("/me").get(verifyJWT, getCurrentUser);
router.route("/me").put(verifyJWT, updateProfile);


export default router;