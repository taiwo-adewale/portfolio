import {
  TaReactQuery,
  TaTailwindCss,
  TaMaterialUI,
  TaCSS,
  TaHTML,
  TaRedux,
  TaJavascript,
  TaTypescript,
  TaReact,
  TaGit,
  TaGithub,
  TaFirebase,
  TaSupabase,
  TaFramerMotion,
  TaNextJs,
  TaAppwrite,
  TaChartjs,
  TaSanity,
  TaPayload,
} from "@/icons";

import { Skill } from "@/types/skill";

export const skills: Skill[] = [
  {
    name: "HTML",
    icon: <TaHTML />,
    type: "frontend",
  },
  {
    name: "CSS",
    icon: <TaCSS />,
    type: "frontend",
  },
  {
    name: "JavaScript",
    icon: <TaJavascript />,
    type: "frontend",
  },
  {
    name: "React JS",
    icon: <TaReact />,
    type: "frontend",
  },
  {
    name: "TypeScript",
    icon: <TaTypescript />,
    type: "frontend",
  },
  {
    name: "Next JS",
    icon: <TaNextJs />,
    type: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <TaTailwindCss />,
    type: "frontend",
  },
  {
    name: "Redux",
    icon: <TaRedux />,
    type: "frontend",
  },
  {
    name: "React Query",
    icon: <TaReactQuery />,
    type: "frontend",
  },
  {
    name: "Framer motion",
    icon: <TaFramerMotion />,
    type: "frontend",
  },
  {
    name: "Material UI",
    icon: <TaMaterialUI />,
    type: "frontend",
  },
  {
    name: "Chart JS",
    icon: <TaChartjs />,
    type: "frontend",
  },
  {
    name: "Firebase",
    icon: <TaFirebase />,
    type: "database",
  },
  {
    name: "Supabase",
    icon: <TaSupabase />,
    type: "database",
  },
  {
    name: "Sanity",
    icon: <TaSanity />,
    type: "database",
  },
  {
    name: "Appwrite",
    icon: <TaAppwrite />,
    type: "database",
  },
  {
    name: "Payload CMS",
    icon: <TaPayload />,
    type: "database",
  },
  {
    name: "Git",
    icon: <TaGit />,
    type: "tool",
  },
  {
    name: "Github",
    icon: <TaGithub />,
    type: "tool",
  },
];
