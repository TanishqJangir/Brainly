import { Request, Response } from 'express';
import { TokenPayload } from '../utils/jwt';
import { User } from '../models/User.model';
import { Vault } from '../models/Vault.model';
import crypto from 'crypto';

export const createShareLinkController = async (req: Request, res: Response): Promise<any> => {
    const userId = (req.user as TokenPayload).userId;
    try {
        const shareHash = crypto.randomBytes(12).toString('hex'); // 24 char random string
        const shareLinkExpiry = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

        await User.findByIdAndUpdate(userId, {
            shareLink: shareHash,
            shareLinkExpiry
        });

        return res.status(200).json({
            message: "Share link created successfully.",
            shareLink: shareHash
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while creating the share link.",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }
};



export const getSharedLinkController = async (req: Request, res: Response): Promise<any> => {
    const { shareLink } = req.params;
    try {
        const user = await User.findOne({
            shareLink: shareLink,
            shareLinkExpiry: { $gt: new Date() }
        });
        if (!user) {
            return res.status(404).json({
                message: "Share link not found or expired."
            });
        }
        const contents = await Vault.find({ userId: user._id }).sort({ createdAt: -1 });
        return res.status(200).json({
            name: user.name,
            avatar: user.avatar,
            contents
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while fetching the shared link.",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }
}