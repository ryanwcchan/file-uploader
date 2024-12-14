import { Router } from "express";
import { createUserController, getAllUsersController } from "../controllers/user.controller";

const router = Router();

router.get("/", getAllUsersController)
router.post("/create", createUserController)

export default router;