import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

/*
 * GET
 */
router.get("/", userController.list);

/*
 * GET
 */
router.get("/:id", userController.show);

/*
 * GET
 */
router.post("/login", userController.login);
/*
 * POST
 */
router.post("/", userController.create);

/*
 * PUT
 */
router.put("/:id", userController.update);

/*
 * DELETE
 */
router.delete("/:id", userController.remove);

export default router;
