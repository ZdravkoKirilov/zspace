import { z } from "astro:content";

export enum PostId {
  hookAllTrades = "hook-all-trades",
  goodEnoughSoftware = "good-enough-software",
}

export enum PostType {
  Article = "article",
  CaseStudy = "case-study",
}

export const post = z.object({
  id: z.nativeEnum(PostId),

  display_name: z.string(),
  type: z.nativeEnum(PostType),
  tags: z.array(z.string()),

  created_on: z.date(),
});

export type Post = z.infer<typeof post>;
