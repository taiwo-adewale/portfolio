import Link from "next/link";

import { socials } from "@/constants/socials";

export default function SocialLinks() {
  return (
    <div className="flex justify-center mb-5 gap-x-4">
      {socials.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          aria-label={social.name}
          target="_blank"
          className="group size-12 border-2 border-border rounded-small flex flex-col overflow-hidden hover:border-primary duration-300 [&_svg]:size-5"
        >
          <div className="flex items-center justify-center flex-shrink-0 size-11 duration-300 group-hover:-translate-y-11 group-focus:-translate-y-11">
            {social.icon}
          </div>

          <div className="flex items-center justify-center flex-shrink-0 size-11 duration-300 group-hover:-translate-y-11 group-focus:-translate-y-11 bg-card-secondary text-card-foreground">
            {social.icon}
          </div>
        </Link>
      ))}
    </div>
  );
}
