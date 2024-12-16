import { Router } from "express";
import { createUserController, getAllUsersController, loginUserController } from "../controllers/user.controller";

const router = Router();

router.get("/", getAllUsersController)
router.post("/create", createUserController)
router.post("/login", loginUserController)

export default router;