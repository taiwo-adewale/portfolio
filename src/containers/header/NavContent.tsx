"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { navItems } from "@/constants/navItems";

type Props = {
  closeNavMenu?: () => void;
};

export default function NavContent({ closeNavMenu }: Props) {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col lg:flex-row gap-y-2">
      {navItems.map((navItem) => (
        <li key={navItem.href}>
          <Link
            href={navItem.href}
            onClick={closeNavMenu ? closeNavMenu : undefined}
            className={cn(
              "block text-xl mx-1.5 px-7 pt-3 pb-4 border border-transparent rounded-small lg:rounded-full font-extralight transition-colors duration-300 text-center",
              pathname === navItem.href &&
                "bg-primary text-primary-foreground border-border",
              pathname !== navItem.href &&
                "hover:border-border hover:bg-card-secondary text-foreground/50 hover:text-foreground focus-visible:border-border focus-visible:bg-card-secondary focus-visible:text-foreground"
            )}
          >
            {navItem.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
