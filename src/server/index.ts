import { mergeRouters, router } from "./trpc";

import { messageRouter } from "./routers/hello";

// export const appRouter = mergeRouters(messageRouter);
export const appRouter = mergeRouters(messageRouter);

export type AppRouter = typeof appRouter;
