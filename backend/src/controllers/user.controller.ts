import { Request, Response } from 'express';
import { User } from '../models/User.model';
import bcrypt from "bcryptjs";
import { signToken, TokenPayload } from '../utils/jwt';


export const SignupController = async (req: Request, res: Response): Promise<any> => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {

        const existingUser = await User.findOne({
            email : email
        });

        if (existingUser) {
            return res.status(400).json({
                message: 'User already exists',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 5);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        })

        const token = signToken({
            userId: user._id.toString(),
            email: user.email
        });
        
        return res.status(200).json({
            message : "User signed up successfully.",
            token
        })
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


export const SigninController = async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json({ 
            message: 'Email and password are required'
        });
    };

    try{
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                message : "Invalid email and password"
            })
        }

        if(!user.password){
            return res.status(401).json({
                message: "Password is missing. Please login with your OAuth provider."
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return res.status(401).json({
                message : "Invalid Password"
            })
        };

        const token = signToken({userId : user._id.toString(), email: user.email});

        return res.status(200).json({
            message : "Logged in successfully",
            token
        })
    }catch(error){
        console.error('Error during signin:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



export const meController = async (req: Request, res: Response): Promise<any> => {
    try {
        const user = await User.findById((req.user as  TokenPayload).userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ user });
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ message: "Internal server error" });
    }
};