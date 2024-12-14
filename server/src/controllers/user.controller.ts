import { createUserService, getAllUsersService } from "../services/user.services";
import { Request, Response } from "express";

interface CreateUserBody {
    username: string;
    password: string;
    confirmPassword: string;
}

async function createUserController(req: Request<{}, {}, CreateUserBody>, res: Response): Promise<void> {
    try {
        if (!req.body || !req.body.username || !req.body.password || !req.body.confirmPassword) {
            res.status(400).json({ message: "Username and password are required" });
        }

        const { username, password, confirmPassword } = req.body

        const user = await createUserService(username, password, confirmPassword)

        res.status(201).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' })
    }
}


async function getAllUsersController(req: Request, res: Response): Promise<void> {
    try {
        const users = await getAllUsersService()

        res.status(200).json(users)
    } catch(error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

export { createUserController, getAllUsersController }