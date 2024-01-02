import Banner from "@/components/Banner";
import ContactForm from "./ContactForm";

import contactBanner from "public/assets/contact-banner.webp";

export default function Contact() {
  return (
    <div>
      <Banner title="contact" label="let’s talk" image={contactBanner} />

      <ContactForm />
    </div>
  );
}
