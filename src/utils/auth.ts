import NextAuth, { User } from "next-auth"
import google from "next-auth/providers/google"
import facebook from "next-auth/providers/facebook"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./connect"

declare module "next-auth"{
    interface Session {
        user: User & {
            isAdmin: Boolean;
        }
    }
}
declare module "@auth/core/jwt"{
    interface JWT {
        isAdmin: Boolean;

    }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy:"jwt"
    },
    providers: [ google, facebook ],
    callbacks:{
        async session({token, session}) {
            if(token) {
                session.user.isAdmin = token.isAdmin;
            }
            return session
        },
        async jwt({token}){
            const userInDb = await prisma.user.findUnique({
                where: {
                    email: token.email!
                }
            })
            token.isAdmin = userInDb?.isAdmin!;
            return token
        }
    }
})
