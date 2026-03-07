import mongoose, { Schema } from "mongoose";

const TagSchema = new Schema({
    tag: { type: String, required: true },
    userId : {type: mongoose.Types.ObjectId, ref: "User", required: true},
},{
    timestamps : true
});

export const Tag = mongoose.model("Tag", TagSchema);