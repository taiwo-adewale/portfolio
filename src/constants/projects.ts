import musica from "public/assets/projects/musica.png";
import doppell from "public/assets/projects/doppell.png";
import quizzical from "public/assets/projects/quizzical.png";
import microdosing from "public/assets/projects/microdosing.png";
import blueway from "public/assets/projects/blueway.png";
import yandox from "public/assets/projects/yandox.png";
import apexCare from "public/assets/projects/apex-care.png";
import oneOvMany from "public/assets/projects/1ovmany.png";
import snapgram from "public/assets/projects/snapgram.png";
import pixstock from "public/assets/projects/pixstock.png";
import zorvex from "public/assets/projects/zorvex.png";

import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Zorvex Admin Dashoard",
    description:
      "CRUD E-commerce admin dashboard for managing products, orders and users built with Next JS, Typescript, Tailwind CSS and Supabase",
    image: zorvex,
    url: "https://ecommerce-admin-board.vercel.app/",
    github: "https://github.com/taiwo-adewale/ecommerce-admin",
  },
  {
    title: "microdosing support",
    description:
      "Need help with microdosing? Connect with professionals with extensive experience in the safe use of psychedelics. Also with a blog to answer any questions you have on microdosing.",
    image: microdosing,
    url: "https://microdosingsupport.com/",
  },
  {
    title: "Pixstock",
    description:
      "Media viewing website built with HTML, CSS, Javascript and Pexels API with search, filter, theming and favorites functionality.",
    image: pixstock,
    url: "https://pixstock-wale.netlify.app/",
    github: "https://github.com/taiwo-adewale/pixstock.git",
  },
  {
    title: "musica",
    description:
      "Music streaming website built with react, redux toolkit, firebase, tailwind css with basic music player functionalities including next, previous, repeat, shuffle and playlists.",
    image: musica,
    url: "https://musica01.netlify.app",
    github: "https://github.com/taiwo-adewale/musica.git",
  },
  {
    title: "1ovmany",
    description:
      "Get training, consultancy and certification services in OKRs, growth strategies, agile transformation, portfolio management and OKR methodology accreditation.",
    image: oneOvMany,
    url: "https://www.1ovmany.com/",
  },
  {
    title: "yandox",
    description:
      "UI development of an admin dashboard for a property listing website made with next js, material UI, chart.js, typescript with theming functionality.",
    image: yandox,
    url: "https://yandox.vercel.app/",
    github: "https://github.com/taiwo-adewale/yandox.git",
  },
  {
    title: "doppell",
    description:
      "Ecommerce website built with HTML, CSS, Javascript and PHP with search, filter, cart, wishlist, authentication and checkout functionality. Also includes a blog.",
    image: doppell,
    url: "https://doppell.000webhostapp.com",
    github: "https://github.com/taiwo-adewale/doppell.git",
  },
  {
    title: "apex care",
    description:
      "UI development of doctor appointment website built with React, tailwind CSS and framer motion.",
    image: apexCare,
    url: "https://apex-care.netlify.app/",
    github: "https://github.com/taiwo-adewale/apex-care.git",
  },
  {
    title: "blueway",
    description:
      "UI development of a blog website with react, redux toolkit, typescript and tailwind css with pagination and search functionality.",
    image: blueway,
    url: "https://blueway01.netlify.app",
    github: "https://github.com/taiwo-adewale/blueway.git",
  },
  {
    title: "Snapgram",
    description:
      "JS Mastery tutorial - Social media app made with react, typescript, react query and appwrite with create, edit, save post and authentication functionality.",
    image: snapgram,
    url: "https://snapgram-wale.vercel.app/",
    github: "https://github.com/taiwo-adewale/snapgram.git",
  },
  {
    title: "quizzical",
    description:
      "Small trivia website built with react, react context api, tailwind css and API. My first react project 😊.",
    image: quizzical,
    url: "https://quizzical001.netlify.app",
    github: "https://github.com/taiwo-adewale/quizzical.git",
  },
];
