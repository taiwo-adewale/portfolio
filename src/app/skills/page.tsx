import Skills from "@/containers/skills";

import { setMetadata } from "@/helpers/setMedata";

export const metadata = setMetadata({
  title: "Skills - Taiwo Adewale",
  description:
    "Take a look at all my skills that make me the developer I am today.",
  canonical: "/skills",
});

export default function page() {
  return <Skills />;
}
