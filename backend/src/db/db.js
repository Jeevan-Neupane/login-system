import mongoose from "mongoose";
import { DB_NAME } from "../constants/constants.js";



const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("DB connection is successfull");

    } catch (error) {
        console.log("Connection to the DB error", error);
        process.exit(1);
    }
}

export default connectDB;