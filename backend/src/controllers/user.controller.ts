import { Request, Response } from 'express';
import { User } from '../models/User.model';
import bcrypt from "bcryptjs";
import { signToken, TokenPayload } from '../utils/jwt';
import crypto from 'crypto';
import { sendOtpEmail } from '../utils/sendEmail';


export const SignupController = async (req: Request, res: Response): Promise<any> => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {

        const existingUser = await User.findOne({
            email: email
        });

        // If a fully verified account already exists, reject
        if (existingUser && existingUser.isEmailVerified && existingUser.name !== '__pending__') {
            return res.status(400).json({ message: 'User already exists' });
        }

        // If a temp verified record exists (email was verified via OTP), update it with real details
        if (existingUser && existingUser.isEmailVerified) {
            const hashedPassword = await bcrypt.hash(password, 10);
            await User.findByIdAndUpdate(existingUser._id, { name, password: hashedPassword });

            const token = signToken({ userId: existingUser._id.toString(), email: existingUser.email });

            return res.status(200).json({
                message: "Account created successfully!",
                token
            });
        }

        // If no record exists (user skipped OTP), reject — OTP verification is required
        if (!existingUser) {
            return res.status(400).json({ message: 'Please verify your email first' });
        }

        // Unverified record exists — shouldn't reach here, but safeguard
        return res.status(400).json({ message: 'Please verify your email before completing signup' });

    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}



export const GenerateOtpController = async (req: Request, res: Response): Promise<any> => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        // Reject only real verified accounts, not __pending__ temp docs
        const existingVerified = await User.findOne({ email, isEmailVerified: true });
        if (existingVerified && existingVerified.name !== '__pending__') {
            return res.status(400).json({ message: "An account with this email already exists" });
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");
        const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

        // Match on email only — avoids duplicate key error when a temp doc already exists
        // with any isEmailVerified state. $setOnInsert only applies on new doc creation.
        await User.findOneAndUpdate(
            { email },
            {
                $set: { otp: hashedOtp, otpExpiry, isEmailVerified: false },
                $setOnInsert: { name: "__pending__" }
            },
            { upsert: true, returnDocument: 'after', runValidators: false }
        );

        await sendOtpEmail(email, otp);

        return res.status(200).json({ message: "OTP sent to your email." });
    } catch (error) {
        console.error("Error generating OTP:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const VerifyOtpController = async (req: Request, res: Response): Promise<any> => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({
            message: "Email and OTP are required"
        });
    }

    try {

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        if (!user.otp || !user.otpExpiry) {
            return res.status(400).json({
                message: "OTP not found or already verified"
            });
        }

        const hashedOtp = crypto
            .createHash("sha256")
            .update(otp)
            .digest("hex");

        if (user.otp !== hashedOtp) {
            return res.status(400).json({
                message: "Invalid OTP"
            });
        }

        if (!user.otpExpiry || user.otpExpiry.getTime() < Date.now()) {
            return res.status(400).json({
                message: "OTP expired"
            });
        }

        // Use findByIdAndUpdate to avoid triggering schema validators on the
        // incomplete temp doc (which may be missing name/password until /signup).
        await User.findByIdAndUpdate(user._id, {
            $set: { isEmailVerified: true },
            $unset: { otp: "", otpExpiry: "" }
        });

        return res.status(200).json({
            message: "Email verified successfully. Please complete your registration."
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};


export const SigninController = async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: 'Email and password are required'
        });
    };

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid email and password"
            })
        }

        if (!user.password) {
            return res.status(401).json({
                message: "Password is missing. Please login with your OAuth provider."
            });
        }

        if (!user.isEmailVerified) {
            return res.status(403).json({
                message: "Please verify your email first"
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid Password"
            })
        };

        const token = signToken({ userId: user._id.toString(), email: user.email });

        return res.status(200).json({
            message: "Logged in successfully",
            token
        })
    } catch (error) {
        console.error('Error during signin:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



export const meController = async (req: Request, res: Response): Promise<any> => {
    try {
        const user = await User.findById((req.user as TokenPayload).userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ user });
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ message: "Internal server error" });
    }
};