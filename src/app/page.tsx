import Home from "@/containers/home";

import { setMetadata } from "@/helpers/setMedata";

export const metadata = setMetadata({
  title: "Taiwo Adewale - Frontend web developer",
  description:
    "Experienced Frontend Developer. Tailwind CSS, React & Next.js specialist. Let's build your dream website.",
  canonical: "/",
});

export default function Page() {
  return <Home />;
}
