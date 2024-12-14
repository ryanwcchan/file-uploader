import prisma from "../../prisma/client";
import bcrypt from 'bcryptjs'
import { createUser, getAllUsers } from "../queries/user.queries";

async function createUserService(username: string, password: string, confirmPassword: string) {
    // Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { username } })
    if(existingUser) {
        throw new Error('Username taken')
    }

    // Check if password and confirm password match
    if(password !== confirmPassword) {
        throw new Error('Passwords do not match')
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await createUser(username, hashedPassword)

    return user
}


async function getAllUsersService() {
    return await getAllUsers()
}

export { createUserService, getAllUsersService }