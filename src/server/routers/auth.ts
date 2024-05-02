// import prisma from "~/config/Prisma";
// import z from "zod";
import { TRPCError } from "@trpc/server";
import { getSession } from "next-auth/react";

import { router, publicProcedure } from "../trpc";

export const authRouter = router({
  getHello: publicProcedure
    // Protected auth middleware
    .use(async ({ctx, next }) => {
        const session = await getSession(ctx);
        if (!session) {
            throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "You must be logged in to access this resource",
            });
        }
        return next({
            ctx: {
                ...ctx,
                session,
            },
        });
    })
    .query(() => {
        return "This is protected content.";
    }),
});
