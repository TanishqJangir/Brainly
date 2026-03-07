import express from "express";
import { 
    createContentController, 
    updateContentController, 
    deleteContentController, 
    getContentsController 
} from "../controllers/vault.controller";

import { requireAuth } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/", requireAuth, createContentController);
router.get("/", requireAuth, getContentsController);
router.put("/:id", requireAuth, updateContentController);
router.delete("/:id", requireAuth, deleteContentController);


export default router;