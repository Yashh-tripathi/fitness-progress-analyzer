import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { predictFitness } from "../controllers/prediction.controller.js";


const router = Router();


router.route("/").get(verifyJWT, predictFitness);

export default router;