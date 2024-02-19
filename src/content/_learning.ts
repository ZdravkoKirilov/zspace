import { z } from "astro:content";

import { Weight } from "./_shared";
import { SkillId } from "./_skill";
import { TechId } from "./_tech";

export enum LearnId {
  OAuthCourse = "oauth",
  AIFundamentalsCourse = "ai-fundamentals",
  DataLiteracyCourse = "data-literacy",
  GraphQLCourse = "graphql",
  PostgreSQLCourse = "postgresql",
}

export const learn = z.object({
  id: z.nativeEnum(LearnId),
  display_name: z.string(),
  weight: z.nativeEnum(Weight),
  order: z.number().int(),

  skills: z.array(z.nativeEnum(SkillId)),
  tech: z.array(z.nativeEnum(TechId)),
});

export type Learn = z.infer<typeof learn>;
