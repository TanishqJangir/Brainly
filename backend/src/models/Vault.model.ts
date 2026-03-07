import mongoose, { Schema } from "mongoose";

const VaultSchema = new Schema({
    title : { type: String, required: true },
    description: { type: String },
    url: { type: String, required: true },
    type: { type: String, enum: ["youtube", "x", "notion", "linkedin", "instagram", "github", "other"], required: true },
    Tags: [{ type: String }],
    userId : { type: mongoose.Types.ObjectId, ref: "User", required: true },
}, {
    timestamps: true
});

export const Vault = mongoose.model("Vault", VaultSchema);