import About from "@/containers/about";

import { setMetadata } from "@/helpers/setMedata";

export const metadata = setMetadata({
  title: "About - Taiwo Adewale",
  description:
    "Passionate frontend developer - clean code, intuitive design, happy users. Learn more about me.",
  canonical: "/about",
});

export default function Page() {
  return <About />;
}
