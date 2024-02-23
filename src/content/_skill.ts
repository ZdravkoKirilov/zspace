import { z } from "astro:content";

import { Weight } from "./_shared";

export enum SkillId {
  UiUxLiteracy = "uiux",
  Accessibility = "accessibility",
  FrontEndArchitecture = "fe-architecture",
  FullStackDevelopment = "fullstack",
  DesignSystems = "design-systems",
  Mentoring = "mentoring",
  CodeReviews = "code-reviews",
  Testing = "testing",
  RestfulApis = "restful-apis",
  DomainModeling = "domain-modeling",
  DataModeling = "data-modeling",
  Pragmatism = "pragmatism",
  Simplicity = "simplicity",
  TypeDrivenDevelopment = "type-driven-development",
  HybridMobileApps = "hybrid-mobile-apps",
  ResponsiveDesign = "responsive-design",
}

export const skill = z.object({
  id: z.nativeEnum(SkillId),
  display_name: z.string(),
  weight: z.nativeEnum(Weight),
  order: z.number().int(),

  years_experience: z.number().int(),
});

export type Skill = z.infer<typeof skill>;
