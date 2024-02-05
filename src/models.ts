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
  AtsApp = "ats-app",
  ScreeningApp = "screening-app",

  /* LL */
  eCommerceApp = "ecommerce-app",

  /* Personal */
  Portfolio = "portfolio",
  TravelAppConcept = "travel-app-concept",
  CustomReact = "custom-react",
  DjangoApi = "django-api",
  OAuthApp = "oauth-app",
}

export enum SkillId {
  UiUxLiteracy = "ui-ux-literacy",
  Accessibility = "accessibility",
  FrontEndArchitecture = "front-end-architecture",
  FullStackDevelopment = "full-stack-development",
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

export enum TechId {
  React = "react",
  Typescript = "typescript",
  Node = "node",
  Express = "express",
  Nest = "nest",
  Angular = "angular",
  TestingLibrary = "testing-library",
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

export enum LearnId {
  OAuthCourse = "oauth-course",
  AIFundamentalsCourse = "ai-fundamentals-course",
  DataLiteracyCourse = "data-literacy-course",
  GraphQLCourse = "graphql-course",
  PostgreSQLCourse = "postgresql-course",
}

export enum WorkId {
  ISG = "isg",
  KPMG = "kpmg",
  Droxic = "droxic",
  TAG = "tag",
  Headstart = "headstart",
  LL = "ll",
}

export const projects = {
  [ProjectId.DynamicFormBuilder]: {
    id: ProjectId.DynamicFormBuilder,
    type: "work",
    weight: "highlighted",
    display_name: "Dynamic Form Builder",
    skills: [
      SkillId.HybridMobileApps,
      SkillId.UiUxLiteracy,
      SkillId.FrontEndArchitecture,
      SkillId.DesignSystems,
      SkillId.Mentoring,
      SkillId.Testing,
      SkillId.DomainModeling,
      SkillId.DataModeling,
    ] as const,
    tech: [TechId.Cordova, TechId.SQLite, TechId.Bootstrap],
    time: {
      start: new Date("2021-01-01"),
      end: new Date("2021-01-01") as Date | undefined,
    },
  },
  [ProjectId.D3Analytics]: {
    id: ProjectId.D3Analytics,
    type: "work",
    weight: "normal",
    display_name: "D3 Analytics",
    skills: [],
    tech: [],
    time: {
      start: new Date("2021-01-01"),
      end: new Date("2021-01-01") as Date | undefined,
    },
  },
  [ProjectId.CompanyOrgChart]: {
    id: ProjectId.CompanyOrgChart,
    type: "work",
    weight: "normal",
    display_name: "Company Org Chart",
    skills: [],
    tech: [],
    time: {
      start: new Date("2021-01-01"),
      end: new Date("2021-01-01") as Date | undefined,
    },
  },
  [ProjectId.CompanyPhoneManagement]: {
    id: ProjectId.CompanyPhoneManagement,
    type: "work",
    weight: "normal",
    display_name: "Company Phone Management",
    skills: [],
    tech: [],
    time: {
      start: new Date("2021-01-01"),
      end: new Date("2021-01-01") as Date | undefined,
    },
  },
  [ProjectId.CMSApp]: {
    id: ProjectId.CMSApp,
    type: "work",
    weight: "normal",
    display_name: "CMS App",
    skills: [],
    tech: [],
    time: {
      start: new Date("2021-01-01"),
      end: new Date("2021-01-01") as Date | undefined,
    },
  },
  [ProjectId.FintechApp]: {
    id: ProjectId.FintechApp,
    type: "work",
    weight: "normal",
    display_name: "Fintech App",
    skills: [],
    tech: [],
    time: {
      start: new Date("2021-01-01"),
      end: new Date("2021-01-01") as Date | undefined,
    },
  },
  [ProjectId.IoTApp]: {
    id: ProjectId.IoTApp,
    type: "work",
    weight: "normal",
    display_name: "IoT App",
    skills: [],
    tech: [],
    time: {
      start: new Date("2021-01-01"),
      end: new Date("2021-01-01") as Date | undefined,
    },
  },
  [ProjectId.SportsApp]: {
    id: ProjectId.SportsApp,
    type: "work",
    weight: "normal",
    display_name: "Sports App",
    skills: [],
    tech: [],
    time: {
      start: new Date("2021-01-01"),
      end: new Date("2021-01-01") as Date | undefined,
    },
  },
  [ProjectId.TravelAgentApp]: {
    id: ProjectId.TravelAgentApp,
    type: "work",
    weight: "highlighted",
    display_name: "Travel Agent App",
    skills: [],
    tech: [],
    time: {
      start: new Date("2021-01-01"),
      end: new Date("2021-01-01") as Date | undefined,
    },
  },
  [ProjectId.AtsApp]: {
    id: ProjectId.AtsApp,
    type: "work",
    weight: "highlighted",
    display_name: "ATS App",
    skills: [],
    tech: [],
    time: {
      start: new Date("2021-01-01"),
      end: new Date("2021-01-01") as Date | undefined,
    },
  },
  [ProjectId.ScreeningApp]: {
    id: ProjectId.ScreeningApp,
    type: "work",
    weight: "highlighted",
    display_name: "Screening App",
    skills: [],
    tech: [],
    time: {
      start: new Date("2021-01-01"),
      end: new Date("2021-01-01") as Date | undefined,
    },
  },
  [ProjectId.eCommerceApp]: {
    id: ProjectId.eCommerceApp,
    type: "work",
    weight: "highlighted",
    display_name: "eCommerce App",
    skills: [],
    tech: [],
    time: {
      start: new Date("2021-01-01"),
      end: undefined,
    },
  },
  [ProjectId.Portfolio]: {
    id: ProjectId.Portfolio,
    type: "personal",
    weight: "highlighted",
    display_name: "Portfolio",
    skills: [],
    tech: [],
    time: {
      start: new Date("2021-01-01"),
      end: new Date("2021-01-01"),
    },
  },
  [ProjectId.TravelAppConcept]: {
    id: ProjectId.TravelAppConcept,
    type: "personal",
    weight: "highlighted",
    display_name: "Travel App Concept",
    skills: [],
    tech: [],
    time: {
      start: new Date("2021-01-01"),
      end: new Date("2021-01-01"),
    },
  },
  [ProjectId.CustomReact]: {
    id: ProjectId.CustomReact,
    type: "personal",
    weight: "normal",
    display_name: "Custom React",
    skills: [],
    tech: [],
    time: {
      start: new Date("2021-01-01"),
      end: new Date("2021-01-01"),
    },
  },
  [ProjectId.DjangoApi]: {
    id: ProjectId.DjangoApi,
    type: "personal",
    weight: "normal",
    display_name: "Django API",
    skills: [],
    tech: [],
    time: {
      start: new Date("2021-01-01"),
      end: new Date("2021-01-01"),
    },
  },
  [ProjectId.OAuthApp]: {
    id: ProjectId.OAuthApp,
    type: "personal",
    weight: "highlighted",
    display_name: "OAuth App",
    skills: [],
    tech: [],
    time: {
      start: new Date("2021-01-01"),
      end: new Date("2021-01-01"),
    },
  },
} as const;

export const technologies = {
  [TechId.React]: {
    id: TechId.React,
    display_name: "React",
    weight: "highlighted",
    projects: [
      ProjectId.CompanyOrgChart,
      ProjectId.IoTApp,
      ProjectId.SportsApp,
      ProjectId.FintechApp,
      ProjectId.CustomReact,
      ProjectId.AtsApp,
      ProjectId.ScreeningApp,
      ProjectId.eCommerceApp,
    ] as const,
  },
  courses: [],
} as const;

export const skills = {
  [SkillId.UiUxLiteracy]: {
    id: SkillId.UiUxLiteracy,
    display_name: "UI/UX Literacy",
    weight: "highlighted",
    projects: [
      ProjectId.CMSApp,
      ProjectId.TravelAgentApp,
      ProjectId.Portfolio,
      ProjectId.TravelAppConcept,
      ProjectId.eCommerceApp,
      ProjectId.ScreeningApp,
    ],
    technologies: [
      TechId.React,
      TechId.Angular,
      TechId.Bootstrap,
      TechId.MaterialUi,
      TechId.CSS,
      TechId.TailwindCss,
      TechId.VanillaExtract,
    ],
  },
} as const;

export const learnings = {
  [LearnId.OAuthCourse]: {
    id: LearnId.OAuthCourse,
    display_name: "OAuth Course",
    weight: "highlighted",
    provider: {
      name: "Datacamp",
      url: "https://www.datacamp.com/",
    },
    time: {
      start: new Date("2021-01-01"),
      end: new Date("2021-01-01") as Date | undefined,
    },
    skills: [
      SkillId.RestfulApis,
      SkillId.FullStackDevelopment,
      SkillId.DomainModeling,
      SkillId.DataModeling,
      SkillId.TypeDrivenDevelopment,
    ],
    projects: [ProjectId.OAuthApp],
  },
} as const;
