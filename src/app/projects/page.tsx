import Projects from "@/containers/projects";

import { setMetadata } from "@/helpers/setMedata";

export const metadata = setMetadata({
  title: "Projects - Taiwo Adewale",
  description:
    "Browse my portfolio of impactful frontend projects built with modern technologies from responsive landing pages to dynamic single-page applications",
  canonical: "/projects",
});

export default function page() {
  return <Projects />;
}
