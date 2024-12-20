import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data: {
            username: 'E0xwP@example.com',
            password: '123456',
        }
    })

    console.log(user)
}

main().catch(e => {
    console.error(e.message)
}).finally(async () => {
    await prisma.$disconnect()
})