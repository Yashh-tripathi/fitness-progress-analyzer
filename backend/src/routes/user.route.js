import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const router = Router();


router.route("/me").get(verifyJWT, (req, res) => {
    return res.status(200).json(
        new ApiResponse(200, req.user, "Current user")
    )
});



export default router;