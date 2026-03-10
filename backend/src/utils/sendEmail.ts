import nodemailer from "nodemailer";

export const sendOtpEmail = async (email: string, otp: string) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    to: email,
    subject: "Verify your email",
    html: `<h2>Your OTP is ${otp}</h2>`
  });
};