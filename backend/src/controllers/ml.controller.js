import { DailyLog } from "../models/dailyLog.model.js";
import { getMLPrediction } from "../services/ml.service.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


export const predictFitness = asyncHandler(async (req, res) => {
    const user = req.user;
    const logs = await DailyLog.find({ user: user._id }).sort({date: 1}).limit(30);

    if(logs.length < 5){
        throw new ApiError(400, "Atleast 5 days data required for prediction")
    }

    const payload = {
        age: user.age,
        height: user.height,
        gender: user.gender,
        goal: user.goal,
        currentWeight: logs[logs.length - 1].weight,
        daysAhead: 30,
        logs: logs.map((l) => ({
          date: l.date.toISOString().split("T")[0],
          weight: l.weight,
          calories: l.calories,
          workoutMinutes: l.workoutMinutes,
        })),
      };

    const prediction = await getMLPrediction(payload);

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            prediction,
            "Prediction generated"
        )
    )


});
