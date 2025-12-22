import mongoose from "mongoose";

const dailyLogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    date: {
      type: Date,
      required: true,
      set: (value) => new Date(value.setHours(0,0,0,0))
    },

    weight: {
      type: Number,
      required: true
    },

    calories: {
      type: Number,
      required: true
    },

    workoutMinutes: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);


dailyLogSchema.index({ user: 1, date: 1 }, { unique: true });

export const DailyLog = mongoose.model("DailyLog", dailyLogSchema);
