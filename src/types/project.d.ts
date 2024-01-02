import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  description: string;
  image: string | StaticImageData;
  url: string;
  github?: string;
}
