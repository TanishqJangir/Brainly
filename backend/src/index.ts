import express from "express";
import 'dotenv/config';
import cors from "cors";
import { connectDB } from "./config/db";
import authRoutes from "./routes/auth.routes";
import passport from "./config/passport";

const app = express();

const port = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
app.use(express.json());
app.use(passport.initialize());

app.use("/api/v1/auth", authRoutes);


app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});
