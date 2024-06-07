import { z, reference } from "astro:content";
import { Weight } from "./_shared";

export enum WorkId {
  ISG = "isg",
  KPMG = "kpmg",
  Droxic = "droxic",
  TAG = "tag",
  Headstart = "headstart",
  LL = "ll",
}

export const work = z.object({
  id: z.nativeEnum(WorkId),
  display_name: z.string(),
  weight: z.nativeEnum(Weight),

  employer_name: z.string(),
  employer_url: z.string().url(),

  from: z.date(),
  to: z.date().optional(),

  tags: z.array(z.string()).optional(),

  projects: z.array(reference("projects")),
});

export type Work = z.infer<typeof work>;
