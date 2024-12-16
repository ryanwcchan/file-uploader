import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";
import prisma from "../../../prisma/client";
import { User } from "@prisma/client";

passport.use(new LocalStrategy(async (username: string, password: string, done: any) => {
    try {
        const user = await prisma.user.findUnique({ where: { username } });
        if (!user) {
            return done(null, false);
        }
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return done(null, false);
        }

        return done(null, user);
    } catch(error) {
        return done(error);
    }
}))

passport.serializeUser((user: any, done: any) => {
    console.log(user)
    done(null, user.id);
});

passport.deserializeUser(async (id: number, done: any) => {
    try {
        const user = await prisma.user.findUnique({ where: { id } });
        done(null, user);
    } catch (error) {
        done(error);
    }
});

export default passport;