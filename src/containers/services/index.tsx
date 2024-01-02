import Banner from "@/components/Banner";
import ServiceCard from "./ServiceCard";

import service1Img from "public/assets/service1.webp";
import service2Img from "public/assets/service2.webp";
import service3Img from "public/assets/service3.webp";
import servicesBanner from "public/assets/services-banner.webp";

export default function Services() {
  return (
    <div>
      <Banner title="services" label="digital suite" image={servicesBanner} />

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ServiceCard
          title="Frontend Development"
          description="Bringing your vision to life in pixels."
          image={service1Img}
        />
        <ServiceCard
          title="On Page SEO"
          description="Optimizing pages for higher search engine visibility."
          image={service2Img}
        />
        <ServiceCard
          title="Backend Development"
          description="Coming soon... 😁"
          image={service3Img}
        />
        <ServiceCard
          title="Mobile Development"
          description="Coming soon... 😁"
          image={service1Img}
        />
      </ul>
    </div>
  );
}
