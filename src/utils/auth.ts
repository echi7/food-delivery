import NextAuth from "next-auth"
import google from "next-auth/providers/google"
import facebook from "next-auth/providers/facebook"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./connect"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [ google, facebook ],
})
