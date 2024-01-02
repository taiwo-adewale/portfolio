import Link from "next/link";

import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import Container from "@/components/Container";

export default function Header() {
  return (
    <header className="pt-8 lg:pt-12">
      <Container>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-secondary text-5xl font-semibold leading-none rounded-small"
          >
            Wale
          </Link>

          <NavMobile />
          <NavDesktop />
        </div>
      </Container>
    </header>
  );
}
