import { Request, Response } from 'express';
import { Vault } from '../models/Vault.model';
import { TokenPayload } from '../utils/jwt';

export const createContentController = async (req: Request, res: Response): Promise<any> => {
    const {title, description, url, type, Tags} = req.body;

    if(!title || !url || !type){
        return res.status(400).json({
            message: "Title, URL and Type are required fields."
        });
    }

    try{
        const existingContent = await Vault.findOne({url});

        if(existingContent){
            return res.status(400).json({
                message: "Content with the same URL already exists."
            });
        };

        const content = await Vault.create({
            title,
            description,
            url,
            type,
            Tags,
            userId: (req.user as TokenPayload).userId
        });

        return res.status(201).json({
            message: "Content created successfully.",
            content
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while creating the content.",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    };
};


export const getContentsController = async (req: Request, res: Response): Promise<any> => {
    try {
        const contents = await Vault.find({userId: (req.user as TokenPayload).userId}).sort({createdAt: -1});
        return res.status(200).json({
            message: "Contents retrieved successfully.",
            contents
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while retrieving contents.",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    };
};


export const deleteContentController = async (req: Request, res: Response): Promise<any> => {
    
    try{
        const {id} = req.params;
        
        const content = await Vault.findOne({
            _id: id,
            userId: (req.user as TokenPayload).userId
        });

        if (!content) {
            return res.status(404).json({
                message: "Content not found."
            });
        }

        await Vault.deleteOne({_id: id});

        return res.status(200).json({
            message: "Content deleted successfully."
        });
    }catch(error){
        return res.status(500).json({
            message: "An error occurred while deleting the content.",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    };
};

export const updateContentController = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    const { title, description, url, type, Tags } = req.body;

    try {
        const content = await Vault.findOne({
            _id: id,
            userId: (req.user as TokenPayload).userId
        });

        if(!content){
            return res.status(404).json({
                message: "Content not found."
            });
        };

        content.title = title || content.title;
        content.description = description || content.description;
        content.url = url || content.url;
        content.type = type || content.type;
        content.Tags = Tags || content.Tags;

        await content.save();

        return res.status(200).json({
            message: "Content updated successfully.",
            content
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while updating the content.",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }
};