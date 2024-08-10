import NextAuth from "next-auth"
import google from "next-auth/providers/google"
import facebook from "next-auth/providers/facebook"

export const { handlers, auth } = NextAuth({ providers: [ google, facebook ] })
