import { z } from "astro:content";
import { Weight } from "./_shared";
import { ProjectId } from "./_project";

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
  order: z.number().int(),

  employer_name: z.string(),
  employer_url: z.string().url(),

  from: z.date(),
  to: z.date().optional(),

  projects: z.array(z.nativeEnum(ProjectId)),
});

export type Work = z.infer<typeof work>;
