import { z } from "astro:content";

export enum PostId {
  hookAllTrades = "hook-all-trades",
  whyTypes = "why-typescript",
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
  featured_image: z.string().optional(),

  created_on: z.date(),
});

export type Post = z.infer<typeof post>;
