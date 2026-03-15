import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    provider: { type: String, enum: ["local", "google", "github"], default: "local" },
    providerId: { type: String },
    avatar: { type: String },
    isEmailVerified: { type: Boolean, default: false },
    shareLink: { type: String, unique: true, default: null },
    shareLinkExpiry: { type: Date, default: null },
}, {
    timestamps: true
});

export const User = mongoose.model("User", UserSchema);