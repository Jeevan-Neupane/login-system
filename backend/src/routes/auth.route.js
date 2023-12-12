import { Router } from "express";
import { changePassword, getUser, loginUser, register, sendEmail, userPasswordReset } from "../controllers/auth.controllers.js";
import { check } from "express-validator";
import authUser from "../middleware/auth.middleware.js";

const route = Router();



route.post('/register', [
    check('name', 'Name is required').not().isEmpty(),
    check("username", 'Username is required').not().isEmpty(),
    check('email', "Email must be in valid format").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    check("terms", "Term is required").isBoolean()
], register)

route.post('/login', [
    check("username", "Username is required").not().isEmpty(), check("email", "Email is required").isEmail(), check("password", "Password is required").not().isEmpty()
], loginUser)

route.get('/user', authUser, getUser)
route.post('/changePassword', [authUser, [
    check("oldPassword", "Old password is required").not().isEmpty(),
    check("newPassword", "New password is required").not().isEmpty()
]], changePassword);

route.post('/forgotPassword', [check("email", "Email is required").isEmail()], sendEmail)

route.post('/resetPassword/:id/:token', [
    check("password", "Password is required")
], userPasswordReset);
export default route;