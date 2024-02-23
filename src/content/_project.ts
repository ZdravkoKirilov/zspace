import { z, reference } from "astro:content";

import { Weight } from "./_shared";
import { TechId } from "./_tech";
import { SkillId } from "./_skill";

export enum ProjectId {
  /* ISG */
  DynamicFormBuilder = "dynamic-form-builder",

  /* KPMG */
  D3Analytics = "d3-analytics",
  CompanyOrgChart = "company-org-chart",
  CompanyPhoneManagement = "company-phone-management",

  /* Droxic */
  CMSApp = "cms-app",
  FintechApp = "fintech-app",
  IoTApp = "iot-app",
  SportsApp = "sports-app",

  /* TAG */
  TravelAgentApp = "travel-agent-app",

  /* Headstart */
  AtsApp = "ats",
  ScreeningApp = "screening-app",

  /* LL */
  LoyaltyLionAdmin = "ll-admin",

  /* Personal */
  Portfolio = "portfolio",
  TravelAppConcept = "travel-app-concept",
  CustomReact = "custom-react",
  DjangoApi = "django-api",
  OAuthApp = "oauth-app",
}

export const project = z.object({
  id: z.nativeEnum(ProjectId),
  display_name: z.string(),
  weight: z.nativeEnum(Weight),
  order: z.number().int(),

  from: z.date(),
  to: z.date().optional(),

  demo_url: z.string().url().optional(),
  image: z.string().url().optional(),

  tech: z.array(reference("tech")),
  skills: z.array(reference("skills")),
});

export type Project = z.infer<typeof project>;
