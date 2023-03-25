import { MdWork, MdMail, MdOutlineComputer } from "react-icons/md";

import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMaterialui,
} from "react-icons/si";

import adminDashboard from "public/assets/admin-dashboard.png";
import musica from "public/assets/musica.png";
import doppell from "public/assets/doppell.png";
import homeRentals from "public/assets/home-rentals.png";
import quizzical from "public/assets/quizzical.png";
import yummy from "public/assets/yummy.png";
import taPortfolio from "public/assets/ta-portfolio.png";
import alessio from "public/assets/alessio.png";
import microdosing from "public/assets/microdosing.png";
import blueway from "public/assets/blueway.png";
import yandox from "public/assets/yandox.png";

export const links = [
  {
    name: "Projects",
    url: "/projects",
    icon: <MdWork className="text-xl" />,
  },
  {
    name: "Skills",
    url: "/skills",
    icon: <MdOutlineComputer className="text-xl" />,
  },
  {
    name: "Contact",
    url: "/contact",
    icon: <MdMail className="text-xl" />,
  },
];

export const works = [
  {
    title: "yandox",
    description:
      "Property listing admin dashboard built with Next JS and Material UI.",
    image: yandox,
    projectUrl: "https://yandox.vercel.app/",
  },
  {
    title: "blueway",
    description: "Blog website built with React JS and Redux Toolkit.",
    image: blueway,
    projectUrl: "https://blueway-wale.netlify.app",
  },
  {
    title: "doppell",
    description: "E-commerce website with a mini blog built with PHP.",
    image: doppell,
    projectUrl: "https://doppell.000webhostapp.com",
  },
  {
    title: "yummy",
    description: "Simple responsive bootstrap website for a restaurant.",
    image: yummy,
    projectUrl: "https://waleyummy.netlify.app",
  },
  {
    title: "alessio faggioli",
    description:
      "Book a consultation with Alessio Faggioli, a psychologist and psychotherapist.",
    image: alessio,
    projectUrl: "https://alessiofaggioli.com/",
  },
  {
    title: "musica",
    description:
      "Music streaming platform built with react, redux and firebase.",
    image: musica,
    projectUrl: "https://musica-wale.netlify.app",
  },
  {
    title: "admin dashboard",
    description: "Admin dashboard built with React JS and Syncfusion.",
    image: adminDashboard,
    projectUrl: "https://admin-dashboard-syncfusion-wale.netlify.app",
  },
  {
    title: "microdosing support",
    description:
      "Get professional help in the microdosing of psychedelic substances.",
    image: microdosing,
    projectUrl: "https://microdosingsupport.com/",
  },
  {
    title: "home rentals",
    description: "Landing page for a home rental agency built with Next JS.",
    image: homeRentals,
    projectUrl: "https://home-rentals-omega.vercel.app",
  },
  {
    title: "quizzical",
    description: "A simple trivia website built with react and tailwind CSS.",
    image: quizzical,
    projectUrl: "https://quizzical-by-wale.netlify.app",
  },
  {
    title: "portfolio",
    description: "Portfolio website for a web developer built with React JS.",
    image: taPortfolio,
    projectUrl: "https://ta-portfolio-dev.netlify.app",
  },
];

export const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-3xl md:text-4xl lg:text-5xl xxl:text-7xl" />,
    color: "#E44D26",
  },
  {
    name: "CSS",
    icon: (
      <FaCss3Alt className="text-3xl md:text-4xl lg:text-5xl xxl:text-7xl" />
    ),
    color: "#2965f1",
  },
  {
    name: "JavaScript",
    icon: (
      <SiJavascript className="text-3xl md:text-4xl lg:text-5xl xxl:text-7xl" />
    ),
    color: "#F0DB4F",
  },
  {
    name: "React JS",
    icon: <FaReact className="text-3xl md:text-4xl lg:text-5xl xxl:text-7xl" />,
    color: "#61DBFB",
  },
  {
    name: "TypeScript",
    icon: (
      <SiTypescript className="text-3xl md:text-4xl lg:text-5xl xxl:text-7xl" />
    ),
    color: "#007acc",
  },
  {
    name: "Next JS",
    icon: (
      <SiNextdotjs className="text-3xl md:text-4xl lg:text-5xl xxl:text-7xl dark:fill-white" />
    ),
    color: "#202124",
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-3xl md:text-4xl lg:text-5xl xxl:text-7xl" />,
    color: "#764abc",
  },
  {
    name: "Git",
    icon: (
      <FaGitAlt className="text-3xl md:text-4xl lg:text-5xl xxl:text-7xl" />
    ),
    color: "#F1502F",
  },
  {
    name: "TailwindCSS",
    icon: (
      <SiTailwindcss className="text-3xl md:text-4xl lg:text-5xl xxl:text-7xl" />
    ),
    color: "#35b3eb",
  },
  {
    name: "Material UI",
    icon: (
      <SiMaterialui className="text-3xl md:text-4xl lg:text-5xl xxl:text-7xl" />
    ),
    color: "#0081cb",
  },
];
