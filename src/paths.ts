import type { LearnId } from "./content/_learning";
import type { ProjectId } from "./content/_project";
import type { SkillId } from "./content/_skill";
import type { TechId } from "./content/_tech";
import type { WorkId } from "./content/_work";

export const paths = {
  home: "/",
  about: "/about",
  blog: "/blog",

  craft: "/craft",
  skills: "/craft/skills",
  technologies: "/craft/tech",
  projects: "/craft/projects",
  work: "/craft/work",
  learn: "/craft/learn",

  skillDetails: (id: SkillId) => `/craft/skills/${id}`,
  techDetails: (id: TechId) => `/craft/tech/${id}`,
  projectDetails: (id: ProjectId) => `/craft/projects/${id}`,
  workDetails: (id: WorkId) => `/craft/work/${id}`,
  learnDetails: (id: LearnId) => `/craft/learn/${id}`,
} as const;

type TopPath =
  | typeof paths.home
  | typeof paths.about
  | typeof paths.blog
  | typeof paths.craft;

export const isTopPathActive = (pathname: string, path: TopPath) => {
  const currentPath = pathname.split("/").at(1);
  const pathWithoutSlash = path.slice(1);

  return currentPath === pathWithoutSlash;
};

type CraftPath =
  | typeof paths.skills
  | typeof paths.technologies
  | typeof paths.projects
  | typeof paths.work
  | typeof paths.learn;

export const isCraftPathActive = (pathname: string, path: CraftPath) => {
  const currentPath = pathname.split("/").at(2);
  const pathWithoutSlash = path.slice(1).split("/").at(1);

  return currentPath === pathWithoutSlash;
};
