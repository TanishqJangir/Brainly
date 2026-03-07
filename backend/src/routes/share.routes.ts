import express from "express";
import { requireAuth } from "../middlewares/auth.middleware";
import { 
    createShareLinkController, 
    disableShareLinkController, 
    getSharedLinkController
} from "../controllers/share.controller";

const router = express.Router();

router.post("/create", requireAuth, createShareLinkController);
router.post("/disable", requireAuth, disableShareLinkController);
router.get("/:shareLink", getSharedLinkController);

export default router;