import NextAuth, { getServerSession, NextAuthOptions } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

if (!process.env.secret) {
    throw new Error("SECRET environment variable must be defined");
}

console.log('Auth has been found!');

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    adapter: PrismaAdapter(prisma),
    secret: process.env.SECRET,
} satisfies NextAuthOptions;

const handler = NextAuth(authOptions);

export function auth(
    ...args:
      | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
      | [NextApiRequest, NextApiResponse]
      | []
  ) {
    return getServerSession(...args, authOptions)
}

export {
    handler as GET,
    handler as POST,
    handler as PATCH,
    handler as PUT,
    handler as DELETE,
};
  