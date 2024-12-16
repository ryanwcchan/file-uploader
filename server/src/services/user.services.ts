import prisma from "../../prisma/client";
import bcrypt from 'bcryptjs'
import { createUser, getAllUsers, getByUsername } from "../queries/user.queries";

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

async function loginUserService(username: string, password: string) {
    const user = await getByUsername(username)

    if (!user) {
        throw new Error('User not found')
    }

    const validPassword = await bcrypt.compare(password, user.password)

    if(!validPassword) {
        throw new Error('Invalid password')
    }

    return user
}

export { createUserService, getAllUsersService, loginUserService }