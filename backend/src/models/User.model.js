import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true,
    }
    ,

    email: {
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    terms: {
        type: Boolean,
        required: true
    }
}, { timestamps: true })


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})


userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);

}

userSchema.methods.generateAccessToken = async function () {
    const payload = {
        _id: this._id,
        email: this.email,
        username: this.username,
        name: this.name
    }


    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    })

}

userSchema.methods.generateResetToken = async function (new_secret) {

    const payload = {
        _id: this._id
    }

    return jwt.sign(payload, new_secret, {
        expiresIn: '15m'
    })


}
userSchema.methods.verifyResetToken = async function(new_secret, old_token) {



    return jwt.verify(old_token, new_secret);


}

const User = mongoose.model("User", userSchema);


export default User;