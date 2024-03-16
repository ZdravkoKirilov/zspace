import { z } from "astro:content";

import { Weight } from "./_shared";

export enum TechId {
  React = "react",
  Typescript = "typescript",
  Node = "node",
  Express = "express",
  Nest = "nest",
  Angular = "angular",
  TestingLibrary = "testing-library",
  Jest = "jest",
  MongoDB = "mongodb",
  Postgres = "postgres",
  GithubActions = "github-actions",
  Aws = "aws",
  Azure = "azure",
  RubyOnRails = "ruby-on-rails",
  Cordova = "cordova",
  SQLite = "sqlite",
  Bootstrap = "bootstrap",
  MaterialUi = "material-ui",
  CSS = "css",
  TailwindCss = "tailwind-css",
  VanillaExtract = "vanilla-extract",
}

export const tech = z.object({
  id: z.nativeEnum(TechId),
  display_name: z.string(),
  weight: z.nativeEnum(Weight),
  order: z.number().int(),
});

export type Tech = z.infer<typeof tech>;
