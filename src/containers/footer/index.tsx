import SocialLinks from "./SocialLinks";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="pb-12">
      <Container>
        <SocialLinks />

        <p className="text-center text-xl">
          Taiwo Adewale © 2023. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
