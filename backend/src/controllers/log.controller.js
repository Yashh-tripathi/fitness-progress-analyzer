import { DailyLog } from "../models/dailyLog.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";



export const addDailyLog = asyncHandler(async (req, res) => {
    const { date, weight, calories, workoutMinutes } = req.body;

    if (!date || !weight || !calories || !workoutMinutes) {
        throw new ApiError(400, "All fields are required");
    }
    const logDate = new Date(date);
    logDate.setHours(0, 0, 0, 0);
    
    const existingLog = await DailyLog.findOne({
        user: req.user._id,
        date: logDate,
    });

    if (existingLog) {
        throw new ApiError(409, "Log for this date already exists");
    }
    const log = await DailyLog.create({
        user: req.user._id,
        date: logDate,
        weight,
        calories,
        workoutMinutes,
    });

    return res.status(201).json(
        new ApiResponse(201, log, "Daily log added successfully")
    );

});

export const getDailyLogs = asyncHandler(async (req, res) => {
    const logs = await DailyLog.find({ user: req.user._id })
      .sort({ date: 1 });
  
    return res.status(200).json(
      new ApiResponse(200, logs, "Daily logs fetched")
    );
  });

export const getLatestLog = asyncHandler(async (req,res) => {
    const log = await DailyLog.findOne({ user: req.user._id })
        .sort({ date: -1 });

    if (!log) {
        throw new ApiError(404, "No logs found");
    }

    return res.status(200).json(
        new ApiResponse(200, log, "Latest log fetched")
    );
});

export const updateDailyLog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const {weight, calories, workoutMinutes} = req.body;

    const log = await DailyLog.findOne({
        _id: id,
        user: req.user._id
    });

    if(!log){
        throw new ApiError(404, "No logs found");
    }

    if(weight.length !== undefined) log.weight = weight;
    if(calories.length !== undefined) log.calories = calories;
    if(workoutMinutes !== undefined) log.workoutMinutes = workoutMinutes;

    await log.save();

    return res
    .status(200)
    .json(
        new ApiResponse(200, log, "Log updated")
    )
});

export const deleteLog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const log = await DailyLog.findOneAndDelete({
        _id: id,
        user: req.user._id,
    });

    if(!log){
        throw new ApiError(404, "Log not found")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, {}, "Log Deleted")
    )
});
