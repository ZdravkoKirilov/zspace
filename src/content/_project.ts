import { z, reference } from "astro:content";

import { Weight } from "./_shared";

export enum ProjectId {
  /* ISG */
  DynamicFormBuilder = "form-builder",

  /* KPMG */
  KPMGAnalytics = "kpmg-analytics",
  OrgChart = "kpmg-org-chart",
  PhoneManagement = "kpmg-phone-management",

  /* Droxic */
  MediaSite = "media-site",
  FintechApp = "fintech-app",
  IoTApp = "iot-app",
  SportsApp = "sports-app",
  MentorshipProgram = "mentorship-program",

  /* TAG */
  TravelAgentApp = "travel-agent-app",

  /* Headstart */
  AtsApp = "ats",
  ScreeningApp = "screening-app",

  /* LL */
  LoyaltyLionAdmin = "ll-admin",

  /* Personal */
  ZSpace = "zspace",
  TravelAppConcept = "travel-app-concept",
  CustomReact = "custom-react",
  DjangoApi = "django-api",
  OAuthApp = "oauth-app",
}

export const project = z.object({
  id: z.nativeEnum(ProjectId),
  display_name: z.string(),
  weight: z.nativeEnum(Weight),

  from: z.date(),
  to: z.date().optional(),

  url: z.string().url().optional(),

  tech: z.array(reference("tech")),
  skills: z.array(reference("skills")),
});

export type Project = z.infer<typeof project>;

export const order = Object.values(ProjectId).map((id) => id as ProjectId);
