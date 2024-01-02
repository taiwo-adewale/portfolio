import Services from "@/containers/services";

import { setMetadata } from "@/helpers/setMedata";

export const metadata = setMetadata({
  title: "Services - Taiwo Adewale",
  description:
    "Crafting custom web solutions for startups, businesses, and everyone in between. See my services!",
  canonical: "/services",
});

export default function page() {
  return <Services />;
}
