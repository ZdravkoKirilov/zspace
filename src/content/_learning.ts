import { reference, z } from "astro:content";

import { Weight } from "./_shared";

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

  skills: z.array(reference("skills")),
  tech: z.array(reference("tech")),
});

export type Learn = z.infer<typeof learn>;
