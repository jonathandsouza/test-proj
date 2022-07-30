// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { studentRouter } from "./student";

export const appRouter = createRouter()
	.transformer(superjson)
	.merge("student.", studentRouter);


// export type definition of API
export type AppRouter = typeof appRouter;
