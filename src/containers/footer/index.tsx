import SocialLinks from "./SocialLinks";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="pb-12">
      <Container>
        <SocialLinks />

        <p className="text-xl text-center">
          Taiwo Adewale © {new Date().getFullYear()}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
