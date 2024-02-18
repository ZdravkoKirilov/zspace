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
  jobs: "/craft/jobs",
  courses: "/craft/courses",

  skill: (id: SkillId) => `/craft/skills/${id}`,
  tech: (id: TechId) => `/craft/tech/${id}`,
  project: (id: ProjectId) => `/craft/projects/${id}`,
  job: (id: WorkId) => `/craft/jobs/${id}`,
  course: (id: LearnId) => `/craft/courses/${id}`,
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
  | typeof paths.jobs
  | typeof paths.courses;

export const isCraftPathActive = (pathname: string, path: CraftPath) => {
  const currentPath = pathname.split("/").at(2);
  const pathWithoutSlash = path.slice(1).split("/").at(1);

  return currentPath === pathWithoutSlash;
};
