import { createUserService, getAllUsersService, loginUserService } from "../services/user.services";
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
        res.status(500).json({ message: 'Fetch users error' })
    }
}

async function loginUserController(req: Request, res: Response): Promise<void> {
    try {
        const { username, password } = req.body

        if(!username || !password) {
            res.status(400).json({ message: 'Username and password are required' })
            return
        }

        const user = await loginUserService(username, password)

        if(!user) {
            res.status(401).json({ message: 'Invalid credentials' })
            return
        }

        console.log(user)

        res.status(200).json(user)
    } catch(error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

export { createUserController, getAllUsersController, loginUserController }