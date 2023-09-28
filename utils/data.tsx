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

import musica from "public/assets/musica.png";
import doppell from "public/assets/doppell.png";
import quizzical from "public/assets/quizzical.png";
import alessio from "public/assets/alessio.png";
import microdosing from "public/assets/microdosing.png";
import blueway from "public/assets/blueway.png";
import yandox from "public/assets/yandox.png";
import apexCare from "public/assets/apex-care.png";
import oneOvMany from "public/assets/1ovmany.png";

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
    title: "1ovmany",
    description:
      "We empower the right people to solve the problems that drive measurable business outcomes and help organisations reach their full potential",
    image: oneOvMany,
    projectUrl: "https://www.1ovmany.com/",
  },
  {
    title: "apex care",
    description:
      "Looking for a hassle-free way to book medical appointments online? Check out ApexCare, where you can browse services and book appointments in minutes.",
    image: apexCare,
    projectUrl: "https://apex-care.netlify.app/",
  },
  {
    title: "yandox",
    description:
      "Take control of your property business with our customizable admin dashboard, designed to help you manage leads, listings, and clients with ease.",
    image: yandox,
    projectUrl: "https://yandox.vercel.app/",
  },
  {
    title: "doppell",
    description:
      "Elevate your tech game with Doppell, where you can easily browse and purchase top-rated electronic devices from the comfort of your own home.",
    image: doppell,
    projectUrl: "https://doppell.000webhostapp.com",
  },
  {
    title: "microdosing support",
    description:
      "Need guidance on microdosing? Microdosing support provides information and resources to help you navigate this emerging field and make informed decisions.",
    image: microdosing,
    projectUrl: "https://microdosingsupport.com/",
  },
  {
    title: "musica",
    description:
      "Musica lets you explore the world of music like never before, with a wide range of genres, personalized recommendations, and exclusive content.",
    image: musica,
    projectUrl: "https://musica01.netlify.app",
  },
  {
    title: "alessio faggioli",
    description:
      "Whether you're struggling with anxiety, depression, or other mental health challenges, Alessio Faggioli offers a range of therapy options to support your healing and growth.",
    image: alessio,
    projectUrl: "https://alessiofaggioli.com/",
  },
  {
    title: "blueway",
    description:
      "Blueway is the go-to destination for informative, inspiring, and entertaining content. From travel to food to lifestyle to technology, we cover it all.",
    image: blueway,
    projectUrl: "https://blueway01.netlify.app",
  },
  {
    title: "quizzical",
    description:
      "Quizzical offers a thrilling way to learn and have fun, with a variety of quizzes and games designed to challenge your mind and test your skills.",
    image: quizzical,
    projectUrl: "https://quizzical001.netlify.app",
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
