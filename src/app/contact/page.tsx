import Contact from "@/containers/contact";

import { setMetadata } from "@/helpers/setMedata";

export const metadata = setMetadata({
  title: "Contact - Taiwo Adewale",
  description:
    "Seeking to bring your UI visions to life? Drop me a message, and let's make magic happen.",
  canonical: "/contact",
});

export default function page() {
  return <Contact />;
}
