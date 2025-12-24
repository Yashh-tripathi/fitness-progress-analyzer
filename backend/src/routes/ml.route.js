import {Router} from "express"
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { predictFitness } from "../controllers/ml.controller.js";

const router = Router();
router.route("/predict").get(verifyJWT, predictFitness)

export default router;