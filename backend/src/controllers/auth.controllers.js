import { validationResult } from "express-validator";
import User from "../models/User.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import transporter from "../utils/SendEmail.js";



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

        res.status(400).send(error);
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
        if (!user1 || !user2) {
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
        res.status(404).send(error)
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
                    new ApiResponse(200, changedUser, "Password Changed Successfully")
                )
            }
        } else {
            throw new ApiError(400, "Old password doesn't match");
        }







    } catch (error) {
        res.status(400).send(error)
    }
}

export const sendEmail = async (req, res) => {

    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw new ApiError(400, "Missing Fields", errors.array())

        }
        const { email } = req.body;

        const existedUser = await User.findOne({ email });

        if (!existedUser) {
            throw new ApiError(400, "User Doesn't Exist");
        }

        const new_secret = existedUser._id + process.env.ACCESS_TOKEN_SECRET;

        const token = await existedUser.generateResetToken(new_secret);

        const link = `${process.env.RESET_EMAIL_LINK}/${existedUser._id}/${token}`

        if (link) {
            const info = await transporter.sendMail({

                from: {
                    name: "Jeevan Neupane",
                    address: process.env.EMAIL_FROM
                },
                to: existedUser.email,
                subject: 'Test Email',
                text: 'Hello, this is a test email!',
                html: ` <!DOCTYPE html>
                <html lang="en">
                
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Password Change</title>
                    <style>
                        body {
                            font-family: 'Arial', sans-serif;
                            background-color: #f4f4f4;
                            margin: 0;
                            padding: 0;
                        }
                
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            background-color: #fff;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                            margin-top: 20px;
                        }
                
                        h2 {
                            color: #333;
                        }
                
                        p {
                            color: #555;
                        }
                
                        .btn {
                            display: inline-block;
                            padding: 10px 20px;
                            background-color: #007BFF;
                            color: #ffffff;
                            text-decoration: none;
                            border-radius: 5px;
                        }
                    </style>
                </head>
                
                <body>
                    <div class="container">
                        <h2>Password Change Request</h2>
                        <p>You have requested to change your password. Click the button below to proceed with the password change:</p>
                        <a href=${link} class="btn">Reset Password</a>
                        <p>If you didn't request this change, please ignore this email.</p>
                        <p>Thank you!</p>
                    </div>
                </body>
                
                </html>
                `

            });
            res.status(200).json(
                new ApiResponse(200, null, "Email Sent Successfully")
            )
        } else {
            throw new ApiError(500, "Internal Server Error");

        }






    } catch (error) {
        res.status(400).send(error);
    }

}


export const userPasswordReset = async (req, res) => {

    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw new ApiError(400, "Missing Fields", errors.array())

        }
        const { password } = req.body;
        const { id, token } = req.params;

        const existedUser = await User.findById(id);

        const new_token = existedUser._id + process.env.ACCESS_TOKEN_SECRET;
        let verify;
        try {
            verify = await existedUser.verifyResetToken(new_token, token);
        } catch (error) {
            throw new ApiError(500, error.message);
        }

        if (verify) {
            existedUser.password = password;
            const changedUser = await existedUser.save();

            if (changedUser) {
                res.status(200).json(
                    new ApiResponse(200, changedUser, "Password is changed successfully")
                )
            }
        } else {
            throw new ApiError(500, "Unable to change the password ");
        }










    } catch (error) {
        res.status(400).send(error);
    }

}