import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 6,
        select: false,
    },
    height: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender:{
        type: String,
        enum: ["Male", "Female", "Other"]
    },
    goal: {
        type: String,
        enum: ["Lose Weight", "Maintain", "Gain Muscle"]
    }
},
{
    timestamps: true
});

export const User = mongoose.model("User", userSchema);