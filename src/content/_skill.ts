import { z } from "astro:content";

import { Weight } from "./_shared";

export enum SkillId {
  UiUxLiteracy = "uiux",
  Accessibility = "accessibility",
  FrontEndArchitecture = "fe-architecture",
  FrontEndDevelopment = "fe-development",
  FullStackDevelopment = "fullstack",
  DesignSystems = "design-systems",
  Mentoring = "mentoring",
  CodeReviews = "code-reviews",
  Testing = "testing",
  RestfulApis = "restful-apis",
  DomainModeling = "domain-modeling",
  DataModeling = "data-modeling",
  TypeDrivenDevelopment = "type-driven-development",
  HybridMobileApps = "hybrid-mobile-apps",
  ResponsiveDesign = "responsive-design",

  OfflineArchitecture = "offline-architecture",
  FrameworkAuthoring = "framework-authoring",
  DatabaseDesign = "database-design",
  FullStackArchitecture = "fullstack-architecture",
  TechLeading = "tech-leading",
  AutonomousDelivery = "autonomous-delivery",
  Refactoring = "refactoring",
  TechnicalSupport = "technical-support",
  TeamCollaboration = "team-collaboration",
  SpaApplications = "spa-applications",
  SsrApplications = "ssr-applications",
}

export const skill = z.object({
  id: z.nativeEnum(SkillId),
  display_name: z.string(),
  weight: z.nativeEnum(Weight),
});

export type Skill = z.infer<typeof skill>;

export const order = Object.values(SkillId).map((id) => id as SkillId);
