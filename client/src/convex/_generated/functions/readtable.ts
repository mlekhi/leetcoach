import { query } from "../../_generated/server";
import { v } from "convex/values";

export const getRandomTask = query({
  args: {
    difficulty: v.union(
      v.literal("easy"),
      v.literal("medium"),
      v.literal("difficult")
    ),
  },
  handler: async (ctx, args) => {
    const tasks = await ctx.db
      .query("LeetCodeQuestions")
      .filter((q) => q.eq(q.field("difficulty"), args.difficulty))
      .collect();

    if (tasks.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * tasks.length);
    return tasks[randomIndex];
  },
});
