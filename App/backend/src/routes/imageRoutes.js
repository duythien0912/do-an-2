import express from "express";
import imageController from "../controllers/imageController.js";

const router = express.Router();

router.get("/findImagelimit", imageController.findImagelimit);
router.get("/findImage", imageController.findImage);
router.get("/findImageUser", imageController.findImageUser);

router.post("/upload", imageController.upload);

export default router;
