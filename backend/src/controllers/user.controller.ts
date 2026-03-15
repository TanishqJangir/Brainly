import { Request, Response } from 'express';
import { Otp } from '../models/Otp.model';
import bcrypt from "bcryptjs";
import { signToken, TokenPayload } from '../utils/jwt';
import crypto from 'crypto';
import { sendOtpEmail } from '../utils/sendEmail';
import { User } from '../models/User.model';


// export const SignupController = async (req: Request, res: Response): Promise<any> => {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//         return res.status(400).json({ message: 'All fields are required' });
//     }

//     try {

//         const existingUser = await User.findOne({
//             email: email
//         });

//         if (existingUser && existingUser.isEmailVerified && existingUser.name !== '__pending__') {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         if (existingUser && existingUser.isEmailVerified) {
//             const hashedPassword = await bcrypt.hash(password, 10);
//             await User.findByIdAndUpdate(existingUser._id, { name, password: hashedPassword });

//             const token = signToken({ userId: existingUser._id.toString(), email: existingUser.email });

//             return res.status(200).json({
//                 message: "Account created successfully!",
//                 token
//             });
//         }

//         if (!existingUser) {
//             return res.status(400).json({ message: 'Please verify your email first' });
//         }

//         return res.status(400).json({ message: 'Please verify your email before completing signup' });

//     } catch (error) {
//         console.error('Error during signup:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// }

// export const GenerateOtpController = async (req: Request, res: Response): Promise<any> => {
//     const { email } = req.body;

//     if (!email) {
//         return res.status(400).json({ message: "Email is required" });
//     }

//     try {
//         // Reject only real verified accounts, not __pending__ temp docs
//         const existingVerified = await User.findOne({ email, isEmailVerified: true });
//         if (existingVerified && existingVerified.name !== '__pending__') {
//             return res.status(400).json({ message: "An account with this email already exists" });
//         }

//         const otp = Math.floor(100000 + Math.random() * 900000).toString();
//         const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");
//         const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

//         await User.findOneAndUpdate(
//             { email },
//             {
//                 $set: { otp: hashedOtp, otpExpiry, isEmailVerified: false },
//                 $setOnInsert: { name: "__pending__" }
//             },
//             { upsert: true, returnDocument: 'after', runValidators: false }
//         );

//         await sendOtpEmail(email, otp);

//         return res.status(200).json({ message: "OTP sent to your email." });
//     } catch (error) {
//         console.error("Error generating OTP:", error);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// };

// export const VerifyOtpController = async (req: Request, res: Response): Promise<any> => {
//     const { email, otp } = req.body;

//     if (!email || !otp) {
//         return res.status(400).json({
//             message: "Email and OTP are required"
//         });
//     }

//     try {

//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(404).json({
//                 message: "User not found"
//             });
//         }

//         if (!user.otp || !user.otpExpiry) {
//             return res.status(400).json({
//                 message: "OTP not found or already verified"
//             });
//         }

//         const hashedOtp = crypto
//             .createHash("sha256")
//             .update(otp)
//             .digest("hex");

//         if (user.otp !== hashedOtp) {
//             return res.status(400).json({
//                 message: "Invalid OTP"
//             });
//         }

//         if (!user.otpExpiry || user.otpExpiry.getTime() < Date.now()) {
//             return res.status(400).json({
//                 message: "OTP expired"
//             });
//         }

//         await User.findByIdAndUpdate(user._id, {
//             $set: { isEmailVerified: true },
//             $unset: { otp: "", otpExpiry: "" }
//         });

//         return res.status(200).json({
//             message: "Email verified successfully. Please complete your registration."
//         });

//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({
//             message: "Internal server error"
//         });
//     }
// };


// export const SigninController = async (req: Request, res: Response): Promise<any> => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({
//             message: 'Email and password are required'
//         });
//     };

//     try {
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(400).json({
//                 message: "Invalid email and password"
//             })
//         }

//         if (!user.password) {
//             return res.status(401).json({
//                 message: "Password is missing. Please login with your OAuth provider."
//             });
//         }

//         if (!user.isEmailVerified) {
//             return res.status(403).json({
//                 message: "Please verify your email first"
//             });
//         }

//         const isPasswordValid = await bcrypt.compare(password, user.password);

//         if (!isPasswordValid) {
//             return res.status(401).json({
//                 message: "Invalid Password"
//             })
//         };

//         const token = signToken({ userId: user._id.toString(), email: user.email });

//         return res.status(200).json({
//             message: "Logged in successfully",
//             token
//         })
//     } catch (error) {
//         console.error('Error during signin:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };



// export const meController = async (req: Request, res: Response): Promise<any> => {
//     try {
//         const user = await User.findById((req.user as TokenPayload).userId).select("-password");
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }
//         const passwordData = await User.findById((req.user as TokenPayload).userId).select("password").lean();
//         const passwordLength = passwordData?.password ? 8 : 0;
//         return res.status(200).json({ user, passwordLength });
//     } catch (error) {
//         console.error('Error fetching user details:', error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

// export const deleteAccountController = async (req: Request, res: Response): Promise<any> => {
//     try {
//         const userId = (req.user as TokenPayload).userId;
//         await User.findByIdAndDelete(userId);
//         return res.status(200).json({ message: "Account deleted successfully" });
//     } catch (error) {
//         console.error('Error deleting account:', error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };


// export const generatePasswordOtpController = async (req: Request, res: Response): Promise<any> => {
//     try {
//         const userId = (req.user as TokenPayload).userId;
//         const user = await User.findById(userId);

//         if (!user) {
//             return res.status(404).json({
//                 message: "User not found."
//             })
//         }

//         const passwordOtp = Math.floor(100000 + Math.random() * 900000).toString();
//         const hashedOtp = crypto.createHash("sha256").update(passwordOtp).digest("hex");
//         const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

//         await User.findByIdAndUpdate(userId, {
//             $set: {
//                 otp: hashedOtp,
//                 otpExpiry
//             }
//         })

//         await sendOtpEmail(user.email, passwordOtp);

//         return res.status(200).json({
//             message: "OTP sent successfully."
//         });

//     } catch (error) {
//         console.error('Error generating password OTP:', error);
//         return res.status(500).json({
//             message: "Internal server error"
//         });
//     }
// }

// export const verifyPasswordOtpController = async (req: Request, res: Response): Promise<any> => {
//     try {
//         const userId = (req.user as TokenPayload).userId;
//         const { otp } = req.body;

//         if (!otp) {
//             return res.status(400).json({ message: "OTP is required" });
//         }

//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         if (!user.otp || !user.otpExpiry) {
//             return res.status(400).json({ message: "No OTP requested or OTP already used" });
//         }

//         const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");

//         if (user.otp !== hashedOtp) {
//             return res.status(400).json({ message: "Invalid OTP" });
//         }

//         if (user.otpExpiry.getTime() < Date.now()) {
//             return res.status(400).json({ message: "OTP expired" });
//         }

//         return res.status(200).json({ message: "OTP verified successfully" });

//     } catch (error) {
//         console.error('Error verifying password OTP:', error);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// }

// export const updatePasswordController = async (req: Request, res: Response): Promise<any> => {
//     try {
//         const userId = (req.user as TokenPayload).userId;
//         const { otp, newPassword } = req.body;

//         if (!otp || !newPassword) {
//             return res.status(400).json({ message: "OTP and new password are required" });
//         }

//         if (newPassword.length < 6) {
//             return res.status(400).json({ message: "Password must be at least 6 characters long" });
//         }

//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         if (!user.otp || !user.otpExpiry) {
//             return res.status(400).json({ message: "No valid OTP found. Please request a new one." });
//         }

//         const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");
//         if (user.otp !== hashedOtp || user.otpExpiry.getTime() < Date.now()) {
//             return res.status(400).json({ message: "Invalid or expired OTP" });
//         }

//         const hashedPassword = await bcrypt.hash(newPassword, 10);

//         await User.findByIdAndUpdate(userId, {
//             $set: { password: hashedPassword },
//             $unset: { otp: "", otpExpiry: "" }
//         });

//         return res.status(200).json({ message: "Password updated successfully" });

//     } catch (error) {
//         console.error('Error updating password:', error);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// }

// export const updateNameController = async (req: Request, res: Response): Promise<any> => {
//     try {
//         const userId = (req.user as TokenPayload).userId;
//         const { name } = req.body;

//         if (!name || name.trim().length === 0) {
//             return res.status(400).json({ message: "Name is required" });
//         }

//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         await User.findByIdAndUpdate(userId, {
//             $set: { name: name.trim() }
//         });

//         return res.status(200).json({ message: "Name updated successfully", name: name.trim() });

//     } catch (error) {
//         console.error('Error updating name:', error);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// }


// export const forgotPasswordGenerateOtpController = async (req: Request, res: Response): Promise<any> => {
//     try {
//         const { email } = req.body;
//         if (!email) {
//             return res.status(400).json({ message: "Email is required" });
//         }

//         const user = await User.findOne({ email });
//         if (!user) {
//             // Return success even if not found to prevent email enumeration,
//             // but for simplicity/UX we can return an error here.
//             return res.status(404).json({ message: "User with this email not found" });
//         }

//         if (user.provider && user.provider !== "local") {
//             return res.status(400).json({ message: `Please login with your ${user.provider} account.` });
//         }

//         const passwordOtp = Math.floor(100000 + Math.random() * 900000).toString();
//         const hashedOtp = crypto.createHash("sha256").update(passwordOtp).digest("hex");
//         const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

//         await User.findByIdAndUpdate(user._id, {
//             $set: {
//                 otp: hashedOtp,
//                 otpExpiry
//             }
//         });

//         await sendOtpEmail(user.email, passwordOtp);

//         return res.status(200).json({
//             message: "Password reset OTP sent to your email."
//         });

//     } catch (error) {
//         console.error('Error generating forgot password OTP:', error);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// }

// export const forgotPasswordVerifyOtpController = async (req: Request, res: Response): Promise<any> => {
//     try {
//         const { email, otp } = req.body;

//         if (!email || !otp) {
//             return res.status(400).json({ message: "Email and OTP are required" });
//         }

//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         if (!user.otp || !user.otpExpiry) {
//             return res.status(400).json({ message: "No OTP requested or OTP already used" });
//         }

//         const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");

//         if (user.otp !== hashedOtp) {
//             return res.status(400).json({ message: "Invalid OTP" });
//         }

//         if (user.otpExpiry.getTime() < Date.now()) {
//             return res.status(400).json({ message: "OTP expired" });
//         }

//         return res.status(200).json({ message: "OTP verified successfully" });

//     } catch (error) {
//         console.error('Error verifying forgot password OTP:', error);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// }

// export const forgotPasswordResetController = async (req: Request, res: Response): Promise<any> => {
//     try {
//         const { email, otp, newPassword } = req.body;

//         if (!email || !otp || !newPassword) {
//             return res.status(400).json({ message: "Email, OTP, and new password are required" });
//         }

//         if (newPassword.length < 6) {
//             return res.status(400).json({ message: "Password must be at least 6 characters long" });
//         }

//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         if (!user.otp || !user.otpExpiry) {
//             return res.status(400).json({ message: "No valid OTP found. Please request a new one." });
//         }

//         const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");
//         if (user.otp !== hashedOtp || user.otpExpiry.getTime() < Date.now()) {
//             return res.status(400).json({ message: "Invalid or expired OTP" });
//         }

//         const hashedPassword = await bcrypt.hash(newPassword, 10);

//         await User.findByIdAndUpdate(user._id, {
//             $set: { password: hashedPassword },
//             $unset: { otp: "", otpExpiry: "" }
//         });

//         return res.status(200).json({ message: "Password updated successfully" });

//     } catch (error) {
//         console.error('Error resetting password:', error);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// }


export const GenerateOtpController = async (req: Request, res: Response): Promise<any> => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            message: "Email is required"
        })
    }

    try {

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");

        await Otp.findOneAndUpdate(
            { email },
            {
                $set: {
                    email: email,
                    otp: hashedOtp,
                    otpExpiry: new Date(Date.now() + 5 * 60 * 1000),
                    isVerified: false
                }
            },
            {
                upsert: true,
                new: true
            }
        );

        await sendOtpEmail(email, otp);

        res.status(200).json({
            message: "Otp generated Successfully",
        });

    } catch (error: any) {
        return res.status(500).json({
            message: "Some error occured while generating the otp.",
            error: error,
        })
    }
}


export const VerifyOtpController = async (req: Request, res: Response): Promise<any> => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({
            message: "Email and Otp are required"
        })
    }

    try {
        const user = await Otp.findOne({
            email
        });

        if(!user){
            return res.status(404).json({
                message: "Firse Generate the otp."
            })
        }

        if(!user.otp || !user.otpExpiry){
            return res.status(400).json({
                message : "Otp not found or already verified."
            })
        };

        const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");

        if(hashedOtp !== user.otp){
            return res.status(400).json({
                message : "Invalid Otp"
            })
        };

        if(user.otpExpiry.getTime() < Date.now()){
            return res.status(400).json({
                message : "Otp expired"
            })
        }

        await Otp.updateOne({email}, {
            $set:{
                isVerified : true
            }
        })

        return res.status(200).json({
            message : "Email Verified successfully."
        })
    } catch (error) {
        return res.status(500).json({
            message : "Something went wrong while verifying the otp.",
        })

    }
}


export const SignupController = async (req: Request, res: Response) : Promise<any> => {
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({
            message : "Name, Email and Password are required."
        })
    }

    try{
        const existingUser = await User.findOne({
            email
        })

        if(existingUser){
            return res.status(400).json({
                message : "User already exists."
            })
        }

        const Otpverifed = await Otp.findOne({
            email
        })

        if(!Otpverifed || Otpverifed?.isVerified === false){
            return res.status(400).json({
                message : "Email is not verified"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password : hashedPassword,
            isEmailVerified: true
        })

        const token = signToken({
            userId: user._id.toString(),
            email
        })

        await Otp.deleteOne({
            email
        })

        return res.status(201).json({
            message : "You are successfully signed up.",
            token
        })

    }catch(error: any){
        return res.status(500).json({
            message : "Some error occured while signing up",
            error : error.message
        })
    }
}


export const SigninController = async (req: Request, res: Response) : Promise<any> => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            message : "Email and password are required.",
        });
    };

    try{

        const user = await User.findOne({
            email
        });
        
        if(!user || !user.password){
            return res.status(400).json({
                message : "Invalid email or password. Try to signup first."
            })
        };

        const matchPassword = await bcrypt.compare(password, user.password);

        if(!matchPassword){
            return res.status(400).json({
                message : "Incorrect Password",
            });
        };

        const token = signToken({
            userId : user._id.toString(),
            email : user.email
    })

    return res.status(200).json({
        message : "Signed in Successfully.",
        token : token,
    })

    }catch(error: any){
        console.error("Error while siginig in : ", error)
        return res.status(500).json({
            message : "Something went wrong while signing in.",
        })
    }
}


export const meController = async (req: Request, res: Response) : Promise<any> => {
    try{
        const userId = (req.user as TokenPayload).userId;
        const user = await User.findById({
            userId
        }).select("-password");

        if(!user){
            return res.status(400).json({
                message : "No such user exist. Try to signin first."
            });
        };

        return res.status(200).json({
            message : "User data fetched successfully.",
            user
        })

    }catch(error){
        console.error("Error while users data: ", error);
        return res.status(500).json({
            message : "Internal Server Error."
        })
    }
}