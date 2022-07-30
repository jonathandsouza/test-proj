import { createRouter } from "./context";
import { z } from "zod";

export const studentRouter = createRouter()
	.query("getAll", {
		resolve({ input, ctx }) {
			return ctx.prisma.student.findMany();
		},
	})
