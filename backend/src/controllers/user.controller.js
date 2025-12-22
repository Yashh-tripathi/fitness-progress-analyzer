import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";


const generateAccessRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });
        return {accessToken, refreshToken}
    } catch (error) {
        throw new ApiError(500, "Problem while genrating access and refresh tokens")
    }

}


export const registerUser = asyncHandler(async (req, res) => {
    const { name, username, email, password, height, age, gender } = req.body;


    if(
        [name, username, email, password, height, age, gender].some((feild) => feild?.trim() === "" )
    ){
        throw new ApiError(400, "All feilds are required")
    }

    const existingUser = await User.findOne({
        $or: [{email}, {username}]
    });

    if(existingUser){
        throw new ApiError(400, "User already exits")
    }

    const user = await User.create({
        name,
        username : username?.toString().trim().toLowerCase(),
        email,
        password
    });

    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if(!createdUser){
        throw new ApiError(404, "User not found")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, createdUser, "User registered successfully")
    )
});


export const loginUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;

    if(!(username || email || password)){
        throw new ApiError(400, "All fields are required")
    }

    const user = await User.findOne({
        $or: [{username}, {email}]
    }).select("+password")

    if(!user){
        throw new ApiError(404, "User does not exits")
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid){
        throw new ApiError(400, "Password incorrect")
    }

    const {accessToken, refreshToken} = await generateAccessRefreshToken(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200,
            loggedInUser,
            "User logged in"
        )
    )

});

export const logoutUser = asyncHandler(async (req, res) => {
    const UpdatedUser = await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // this removes the field from document
            }
        }, 
        {
            new: true
        }
    )

    // console.log("Updated user: ", UpdatedUser)

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200,{},"User logged out successfully"))
});


export const refreshAccessToken = asyncHandler(async (req,res) => {
    // req.body mai se access token gayab hua hai but refresh token abhi bhi cookie hoga 
    // vaha se refresh token uthao aur user verify karo firr sidha generate access token ko call karo
    // naya access token iss user ko assign kardo
    // the thinking is correct 

    const incomingRefreshToken = req.cookies?.refreshToken || req.body?.refreshToken;

    if(!incomingRefreshToken){
        throw new ApiError(401, "Unauthorized access request");
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        );

        const user = await User.findById(decodedToken?._id);

        if(!user){
            throw new ApiError(404, "User does not exist")
        }

        if( incomingRefreshToken !== user?.refreshToken ){
            throw new ApiError(401, "Refresh token is expired or used")
        }

        const options = {
            httpOnly: true,
            secure: true
        }

        const  {accessToken,  newRefreshToken} = await generateAccessRefreshToken(user._id);

        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200,
                {accessToken, refreshToken: newRefreshToken},
                "access token refreshed"
            )
        );

    } catch (error) {
        throw new ApiError(401, error?.message || "Something went wrong while regenrating the access token")
    }
});


export const changeCurrentPassword = asyncHandler(async (req, res) => {
    // middleware hame req.user de ddega 
    // req.body se user ko old aur new password enter karao
    // password verify karao 
    // new password ko save kardo

    const {oldPassword , newPassword, confPassword} = req.body;

    if(newPassword !== confPassword){
        throw new ApiError(400, "Please make sure the confirmation password is correct")
    }

    const user = await User.findById(req.user?._id);

    const isPasswordCorrect = await isPasswordCorrect(oldPassword);

    if(!isPasswordCorrect){
        throw new ApiError(400, "Invalid old password");
    }

    user.password = newPassword;

    await user.save({ validateBeforeSave: false});

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            {},
            "Password changed successfully"
        )
    )
});
