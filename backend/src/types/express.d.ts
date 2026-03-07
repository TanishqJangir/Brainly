import { TokenPayload } from "../utils/jwt";
import { AuthUser } from "./express";

export interface AuthUser {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    provider: "local" | "google" | "github";
}

declare global {
    namespace Express {
        interface Request {
            user?: TokenPayload;
        }
    }
}   