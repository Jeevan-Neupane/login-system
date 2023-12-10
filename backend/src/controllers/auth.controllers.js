import { validationResult } from "express-validator";
import User from "../models/User.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";



export const register = async (req, res) => {




    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw new ApiError(400, "Validation Errors", errors.array())
        }
        const { name, username, email, password, terms } = req.body;

        //*Check if the email already exist in the database

        const existed = await User.findOne({
            $or: [{ username }, { email }]
        });
        if (existed) {
            throw new ApiError(409, "User with email or username already exist");

        }


        //*Create a new user
        const user = await User.create({
            name, username, email, password, terms
        })



        const token = await user.generateAccessToken();


        if (token) {
            return res.status(201).json(
                new ApiResponse(200, token, "User is created Successfully")
            )
        }
        else {
            throw new ApiError(500, "Error while creating user")
        }







    } catch (error) {

        res.send(error);
    }

}

export const loginUser = async (req, res) => {

    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw new ApiError(400, "Missing Fields", errors.array())

        }

        const { username, email, password } = req.body;

        const user1 = await User.findOne({ email });
        const user2 = await User.findOne({ username });
        if ((user1?._id.toString() != user2?._id.toString())) {
            throw new ApiError(404, "User doesn't exist")
        }

        const matchPassword = await user1.isPasswordCorrect(password);

        if (!matchPassword) {
            throw new ApiError(400, "Please provide a correct password");
        }
        const token = await user1.generateAccessToken();

        if (token) {
            return res.status(201).json(
                new ApiResponse(200, token, "User is created Successfully")
            )
        }
        else {
            throw new ApiError(500, "Error while login user")
        }




    } catch (error) {
        res.status(400).send(error)
    }

}

export const getUser = async (req, res) => {
    try {
        const userId = req.uId;

        const user = await User.findById(userId).select("-password");


        if (user) {
            res.status(200).json(
                new ApiResponse(200, user, "Logged in successfull")
            )
        } else {
            throw new ApiError(500, "Error while fetching user");
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

export const changePassword = async (req, res) => {

    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw new ApiError(400, "Missing Fields", errors.array())

        }
        const userId = req.uId;

        const { oldPassword, newPassword } = req.body;


        const user = await User.findById(userId);

        const matchPassword = await user.isPasswordCorrect(oldPassword);


        if (matchPassword) {
            user.password = newPassword;
            const changedUser = await user.save();
            if (changedUser) {
                res.status(200).json(
                    new ApiResponse(200, changedUser, "Logged in successfull")
                )
            }
        } else {
            throw new ApiError(400, "Old password doesn't match");
        }







    } catch (error) {
        res.status(400).send(error)
    }
}