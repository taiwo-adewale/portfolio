import Image from "next/image";

import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import Separator from "@/components/Separator";
import Award from "./Award";

import aboutCircle from "public/assets/about-circle.webp";
import aboutBanner from "public/assets/about-banner.jpg";
import waleImg from "public/assets/taiwo-adewale.jpg";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Banner title="about" label="my story" image={aboutBanner} />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="px-6 py-10 border sm:px-8 bg-card-secondary border-border rounded-large">
          <SectionTitle>Taiwo Adewale</SectionTitle>

          <div className="mt-8 mb-10">
            <span className="text-xl font-light">Frontend Web Developer</span>
          </div>

          <Image
            src={waleImg}
            alt="taiwo adewale"
            width={800}
            height={800}
            className="object-cover object-top w-full rounded-large aspect-square brightness-75"
          />
        </div>

        <div>
          <Image
            src={aboutCircle}
            alt="rotating circle"
            width={100}
            height={100}
            className="mx-auto animate-rotate-slow lg:mx-0"
          />

          <div className="flex flex-col mt-8 gap-y-6">
            <p className="uppercase text-2xl sm:text-3xl xl:text-[2rem] text-center lg:text-left !leading-normal">
              I am Taiwo Adewale, a frontend developer passionate about creating
              beautiful and functional user interfaces that enhance the user
              experience. I have experience in{" "}
              <Link
                href="/skills"
                className="underline duration-300 hover:text-primary"
              >
                various frontend technologies
              </Link>{" "}
              and I am always eager to learn new technologies and techniques.
            </p>
            <p className="uppercase text-2xl sm:text-3xl xl:text-[2rem] text-center lg:text-left !leading-normal">
              I am excited to bring my skills and enthusiasm to any project I
              work on, and I look forward to collaborating with others to create
              great products.
            </p>
          </div>
        </div>
      </div>

      {/* <Separator />

      <SectionTitle>Awards</SectionTitle>

      <ul className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2">
        <Award
          title="BEST DESIGNER"
          description="Top-tier award for exceptional innovation and creative designs"
          year={2023}
        />
      </ul> */}
    </div>
  );
}
