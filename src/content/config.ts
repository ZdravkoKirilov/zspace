import { defineCollection } from "astro:content";

import { tech } from "./_tech";
import { skill } from "./_skill";
import { project } from "./_project";
import { learn } from "./_learning";
import { work } from "./_work";
import { post } from "./_blog-post";

const techCollection = defineCollection({
  type: "content",
  schema: tech,
});

const skillsCollection = defineCollection({
  type: "content",
  schema: skill,
});

const projectsCollection = defineCollection({
  type: "content",
  schema: project,
});

const learningCollection = defineCollection({
  type: "content",
  schema: learn,
});

const workCollection = defineCollection({
  type: "content",
  schema: work,
});

const postsCollection = defineCollection({
  type: "content",
  schema: post,
});

export const collections = {
  tech: techCollection,
  skills: skillsCollection,
  projects: projectsCollection,
  learn: learningCollection,
  work: workCollection,
  posts: postsCollection,
};
