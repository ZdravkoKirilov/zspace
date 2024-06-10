import { z, reference } from "astro:content";

import { Weight } from "./_shared";

export enum ProjectId {
  /* LL */
  LoyaltyLionAdmin = "ll-admin",
  LoyaltyLionCustomer = "ll-customer",

  /* Headstart */
  FairScreen = "fairscreen",
  AtsApp = "ats",

  ZSpace = "zspace",
  TeamAssist = "team-assist",
  MentorshipProgram = "mentorship-program",

  /* ISG */
  DynamicFormBuilder = "form-builder",

  /* TAG */
  TravelAgentApp = "travel-agent-app",

  /* Droxic */
  MediaSite = "media-site",
  FintechApp = "fintech-app",
  IoTApp = "iot-app",
  SportsApp = "sports-app",

  /* KPMG */
  KPMGAnalytics = "kpmg-analytics",
  OrgChart = "kpmg-org-chart",
  PhoneManagement = "kpmg-phone-management",

  /* Personal */

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
