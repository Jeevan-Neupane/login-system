import express from "express";
import cors from "cors";
import userroute from "./routes/auth.route.js"
const app = express();
app.use(express.json());


app.use(cors({
    origin: process.env.CORS,
    credentials: true
}))


app.use("/api/", userroute);










export default app;