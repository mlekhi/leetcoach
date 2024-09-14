import { query } from "../server";
import { v } from "convex/values";

export const getTask = query({
  args: { taskId: v.id("tasks") },
  handler: async (ctx, args) => {
    const task = await ctx.db.get(args.taskId);
    // do something with `task`
  },
});
