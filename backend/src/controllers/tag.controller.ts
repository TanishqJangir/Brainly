import { Request, Response } from 'express';
import { TokenPayload } from '../utils/jwt';
import { Tag } from '../models/Tag.model';
import { Vault } from '../models/Vault.model';


export const createTagController = async (req: Request, res: Response): Promise<any> => {
    const { tag } = req.body;

    try {
        const existingTag = await Tag.findOne({
            tag: tag,
            userId: (req.user as TokenPayload).userId
        });

        if (existingTag) {
            return res.status(400).json({
                message: "Tag with the same name already exists."
            })
        };

        const NewTag = await Tag.create({
            tag,
            userId: (req.user as TokenPayload).userId
        });

        return res.status(201).json({
            message: "Tag created successfully.",
            tag: NewTag
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while creating tag.",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }
};


export const getTagsController = async (req: Request, res: Response): Promise<any> => {
    try {
        const tags = await Tag.find({
            userId: (req.user as TokenPayload).userId
        });

        return res.status(200).json({
            message: "Tags retrieved successfully.",
            tags: tags
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while retrieving tags.",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }
};

export const deleteTagController = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;

    try {
        const tag = await Tag.findOne({
            _id: id,
            userId: (req.user as TokenPayload).userId
        });

        if (!tag) {
            return res.status(404).json({
                message: "Tag not found."
            });
        }

        await Tag.deleteOne({ _id: id });

        // remove this tag from all vault items that used it
        await Vault.updateMany(
            { userId: (req.user as TokenPayload).userId, tags: tag.tag },
            { $pull: { tags: tag.tag } }
        );

        return res.status(200).json({
            message: "Tag deleted successfully."
        });

    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while deleting tag.",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }
}