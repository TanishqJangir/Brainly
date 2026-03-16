import { Request, Response } from 'express';
import { Vault } from '../models/Vault.model';
import { TokenPayload } from '../utils/jwt';
import { Tag } from '../models/Tag.model';

// export const createContentController = async (req: Request, res: Response): Promise<any> => {
//     const { title, description, url, type, customType, tags } = req.body;

//     try {
//         const existingContent = await Vault.findOne({ url, userId: (req.user as TokenPayload).userId });

//         if (existingContent) {
//             return res.status(400).json({
//                 message: "Content with the same URL already exists."
//             });
//         };

//         const content = await Vault.create({
//             title,
//             description,
//             url,
//             type,
//             customType,
//             tags,
//             userId: (req.user as TokenPayload).userId
//         });

//         return res.status(201).json({
//             message: "Content created successfully.",
//             content
//         });
//     } catch (error) {
//         return res.status(500).json({
//             message: "An error occurred while creating the content.",
//             error: error instanceof Error ? error.message : "Unknown error"
//         });
//     };
// };


// export const getContentsController = async (req: Request, res: Response): Promise<any> => {
//     try {
//         const contents = await Vault.find({ userId: (req.user as TokenPayload).userId }).sort({ createdAt: -1 });
//         return res.status(200).json({
//             message: "Contents retrieved successfully.",
//             contents
//         });
//     } catch (error) {
//         return res.status(500).json({
//             message: "An error occurred while retrieving contents.",
//             error: error instanceof Error ? error.message : "Unknown error"
//         });
//     };
// };


// export const deleteContentController = async (req: Request, res: Response): Promise<any> => {
//     try {
//         const { id } = req.params;

//         const content = await Vault.findOne({
//             _id: id,
//             userId: (req.user as TokenPayload).userId
//         });

//         if (!content) {
//             return res.status(404).json({
//                 message: "Content not found."
//             });
//         }

//         await Vault.deleteOne({ _id: id });

//         for (const tagName of content.tags) {
//             const stillUsed = await Vault.findOne({
//                 userId: (req.user as TokenPayload).userId,
//                 tags: tagName,
//                 _id: { $ne: id }
//             });

//             if (!stillUsed) {
//                 await Tag.deleteOne({ tag: tagName, userId: (req.user as TokenPayload).userId });
//             }
//         }

//         return res.status(200).json({
//             message: "Content deleted successfully."
//         });
//     } catch (error) {
//         return res.status(500).json({
//             message: "An error occurred while deleting the content.",
//             error: error instanceof Error ? error.message : "Unknown error"
//         });
//     }
// };

// export const updateContentController = async (req: Request, res: Response): Promise<any> => {
//     const { id } = req.params;
//     const { title, description, url, type, customType, tags } = req.body;


//     try {
//         const content = await Vault.findOne({
//             _id: id,
//             userId: (req.user as TokenPayload).userId
//         });

//         if (!content) {
//             return res.status(404).json({
//                 message: "Content not found."
//             });
//         };

//         content.title = title || content.title;
//         content.description = description || content.description;
//         content.url = url || content.url;
//         content.type = type || content.type;
//         content.customType = customType || content.customType;
//         content.tags = tags || content.tags;

//         await content.save();

//         return res.status(200).json({
//             message: "Content updated successfully.",
//             content
//         });
//     } catch (error) {
//         return res.status(500).json({
//             message: "An error occurred while updating the content.",
//             error: error instanceof Error ? error.message : "Unknown error"
//         });
//     }
// };



export const createContentController = async (req: Request, res: Response): Promise<any> => {
    const { title, url, type, customType, tags, description } = req.body;

    if (!title || !url || !type) {
        return res.status(400).json({
            message: "Title, Url and Type is required.",
        });
    };

    try {
        const userId = (req.user as TokenPayload).userId;

        const existingContent = await Vault.findOne({
            url,
            userId
        });

        if (existingContent) {
            return res.status(400).json({
                message: "Content with the same url already exist."
            });
        };

        const normalizedTags = tags?.map((tag: string) => tag.trim().toLowerCase());

        await Vault.create({
            title,
            description,
            type,
            url,
            customType,
            tags: normalizedTags,
            userId,
        });

        return res.status(201).json({
            message: "Content created successfully"
        });

    } catch (error) {
        console.error("Error while creating content: ", error);
        return res.status(500).json({
            message: "Internal Server Error."
        });
    };
};


export const getContentsController = async (req: Request, res: Response): Promise<any> => {
    try {
        const userId = (req.user as TokenPayload).userId;

        const contents = await Vault.find({
            userId
        }).sort({ createdAt: -1 });

        if (contents.length === 0) {
            return res.status(400).json({
                message: "No contents found."
            });
        }

        return res.status(200).json({
            message: "Contents fetched successfully.",
            contents
        });

    } catch (error) {
        console.error("Error while fetching contents: ", error);
        return res.status(500).json({
            message: "Internal Server Error."
        });
    };
};


export const deleteContentController = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            message: "Content id is required."
        });
    };

    try {
        const userId = (req.user as TokenPayload).userId;
        const content = await Vault.findOne({
            _id: id,
            userId
        });

        if (!content) {
            return res.status(404).json({
                message: "Content not found."
            });
        };

        await content.deleteOne();

        for (const tagName of content.tags) {
            const stillUsed = await Vault.findOne({
                userId: userId,
                tags: tagName,
                _id: { $ne: id }
            });

            if (!stillUsed) {
                await Tag.deleteOne({ tag: tagName, userId: userId });
            };
        };

        return res.status(200).json({
            message: "Content deleted successfully."
        });

    } catch (error) {
        console.error("Error while deleting the content: ", error);
        return res.status(500).json({
            message: "Internal Server Error."
        });
    };
};


export const updateContentController = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    const { title, description, tags, type, customType, url } = req.body;

    if (!title || !url || !type) {
        return res.status(400).json({
            message: "Title, Url and Type is required."
        });
    }

    if (!id) {
        return res.status(400).json({
            message: "Content Id is required."
        });
    };

    try {
        const userId = (req.user as TokenPayload).userId;
        const content = await Vault.findOneAndUpdate({
            _id: id,
            userId
        }, {
            $set: {
                title,
                description,
                tags,
                type,
                customType,
                url,
            },
        }, {
            new: true,
        }
        );

        if (!content) {
            return res.status(404).json({
                message: "Content not found."
            });
        };


        return res.status(200).json({
            message: "Content updated successfully.",
            content
        });
    } catch (error) {
        console.error("Error while updating the content: ", error);
        return res.status(500).json({
            message: "Internal Server Error."
        });
    };
};