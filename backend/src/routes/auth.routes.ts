import express from "express";
import {
    SignupController,
    SigninController,
    meController,
    VerifyOtpController,
    GenerateOtpController,
    deleteAccountController,
    generatePasswordOtpController,
    verifyPasswordOtpController,
    updatePasswordController,
    updateNameController
} from "../controllers/user.controller";
import { requireAuth } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import { signupSchema, loginSchema } from "../validators/auth.validator";
import passport from "passport";
import { signToken } from "../utils/jwt";
import { env } from "../config/env";

const router = express.Router();


router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google", { session: false, failureRedirect: `${env.CLIENT_URL}/login?error=google_failed` }),
    (req, res) => {
        try {
            const user = req.user as any;
            const token = signToken({
                userId: user._id.toString(),
                email: user.email
            });
            res.redirect(`${env.CLIENT_URL}/auth-success?token=${token}`);
        } catch (err) {
            return res.redirect(`${env.CLIENT_URL}/login?error=google_failed`);
        }
    });

router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));

router.get("/github/callback", passport.authenticate("github", { session: false, failureRedirect: `${env.CLIENT_URL}/login?error=github_failed` }),
    (req, res) => {
        try {
            const user = req.user as any;
            const token = signToken({
                userId: user._id.toString(),
                email: user.email
            });
            res.redirect(`${env.CLIENT_URL}/auth-success?token=${token}`);
        } catch (err) {
            return res.redirect(`${env.CLIENT_URL}/login?error=github_failed`);
        }
    });

router.post("/signup", validate(signupSchema), SignupController);
router.post("/signin", validate(loginSchema), SigninController);
router.post("/generate-otp", GenerateOtpController);
router.post("/verify-otp", VerifyOtpController);
router.get("/me", requireAuth, meController);
router.delete("/delete-account", requireAuth, deleteAccountController);

// Profile Update
router.put("/name", requireAuth, updateNameController);

// Password Change Flow
router.post("/password-otp/generate", requireAuth, generatePasswordOtpController);
router.post("/password-otp/verify", requireAuth, verifyPasswordOtpController);
router.put("/password", requireAuth, updatePasswordController);




export default router;