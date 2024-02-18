import { defineCollection } from "astro:content";

import { tech } from "./_tech";

const techCollection = defineCollection({
  type: "content",
  schema: tech,
});

export const collections = { tech: techCollection };
