import { z } from "astro:content";

import { Weight } from "./_shared";
import { SkillId } from "./_skill";
import { TechId } from "./_tech";

export enum LearnId {
  OAuthCourse = "oauth-course",
  AIFundamentalsCourse = "ai-fundamentals-course",
  DataLiteracyCourse = "data-literacy-course",
  GraphQLCourse = "graphql-course",
  PostgreSQLCourse = "postgresql-course",
}

const learn = z.object({
  id: z.nativeEnum(LearnId),
  display_name: z.string(),
  weight: z.nativeEnum(Weight),
  order: z.number().int(),

  from: z.date(),
  to: z.date().optional(),
  provider_name: z.string(),
  provider_url: z.string().url(),

  skills: z.array(z.nativeEnum(SkillId)),
  tech: z.array(z.nativeEnum(TechId)),
});

export type Learn = z.infer<typeof learn>;
