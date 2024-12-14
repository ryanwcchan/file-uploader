import prisma from "../../prisma/client";

async function createUser(username: string, hasedPassword: string) {
    return await prisma.user.create({
        data: {
            username,
            password: hasedPassword
        }
    })
}

async function getAllUsers() {
    return await prisma.user.findMany()
}


export { createUser, getAllUsers }