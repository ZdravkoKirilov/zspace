import { z } from "astro:content";

import { Weight } from "./_shared";

export enum TechId {
  React = "react",
  Typescript = "typescript",
  Node = "node",
  Express = "express",
  Nest = "nest",
  Angular = "angular",
  AngularMaterial = "angular-material",
  D3 = "d3",
  Redux = "redux",
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
  Mui = "mui",
  CSS = "css",
  HTML = "html",
  TailwindCss = "tailwind-css",
  VanillaExtract = "vanilla-extract",
  Astro = "astro",
  Next = "next",
  Remix = "remix",
  Ngrx = "ngrx",
  Rxjs = "rxjs",
  JavaScript = "javascript",
  jQuery = "jquery",
  Formik = "formik",
  WebSockets = "websockets",
  TanstackQuery = "tanstack-query",
  ReactHookForm = "react-hook-form",
  ReactRouter = "react-router",
  Zod = "zod",
  Iots = "iots",
}

export const tech = z.object({
  id: z.nativeEnum(TechId),
  display_name: z.string(),
  weight: z.nativeEnum(Weight),
});

export type Tech = z.infer<typeof tech>;

export const order = Object.values(TechId).map((id) => id as TechId);
