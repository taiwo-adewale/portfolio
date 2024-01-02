"use client";

import Image from "next/image";
import Link from "next/link";

import HomeCard from "./HomeCard";
import service1Img from "public/assets/service1.webp";
import service2Img from "public/assets/service2.webp";
import service3Img from "public/assets/service3.webp";
import projectsImg from "public/assets/projects.webp";
import contactImg from "public/assets/contact.webp";
import skillsImg from "public/assets/skills.webp";

import waleImg from "public/assets/taiwo-adewale.jpg";

export default function Home() {
  const serviceImgs = [service1Img, service2Img, service3Img];

  return (
    <div className="grid grid-cols-12 gap-5 lg:grid-rows-2">
      <div className="col-span-12 h-[25rem] lg:h-auto lg:row-span-2 lg:col-span-4">
        <Link
          href="/about"
          aria-label="about page"
          className="relative group flex flex-col size-full overflow-hidden border-2 border-card-border rounded-[1.875rem] py-5 duration-200 hover:border-primary isolate"
        >
          <Image
            src={waleImg}
            alt="taiwo adewale"
            fill
            className="object-cover group-hover:scale-110 group-focus:scale-110 transition-all duration-500 -z-[1] object-top brightness-50"
          />

          {/* <div className="absolute inset-0 bg-black/40 -z-[1]"></div> */}

          <div className="px-6 pb-5 mt-auto sm:px-10">
            <h2 className="uppercase text-[2.625rem] mb-2.5">About</h2>

            <div className="flex items-center">
              <div className="size-2 bg-white mr-2.5"></div>

              <span className="text-base">My Story</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-12 col-span-12 gap-5 lg:col-span-8">
        <div className="col-span-12 sm:col-span-4">
          <HomeCard
            href="/skills"
            title="skills"
            label="code toolkit"
            ariaLabel="skills page"
          >
            <Image
              src={skillsImg}
              alt="keyboard and coffee on a table"
              width={220}
              height={150}
              className="w-full duration-500 group-hover:scale-110 group-focus:scale-110"
            />
          </HomeCard>
        </div>

        <div className="col-span-12 sm:col-span-8">
          <HomeCard
            href="/services"
            title="services"
            label="digital suite"
            ariaLabel="services page"
          >
            <div className="flex items-center justify-center gap-3 px-5 py-4">
              {serviceImgs.map((image, index) => (
                <Image
                  key={`service-img-${index}`}
                  src={image}
                  alt=""
                  width={100}
                  height={100}
                  className="w-1/4 max-w-24 p-[4%] duration-300 ease-linear border-2 rounded-full border-primary bg-home-card-service group-hover:rotate-180 group-focus:rotate-180 aspect-square"
                  style={{ transitionDelay: index * 20 + "ms" }}
                />
              ))}
            </div>
          </HomeCard>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 gap-5 lg:col-span-8">
        <div className="col-span-12 sm:col-span-7">
          <HomeCard
            href="/projects"
            title="projects"
            label="built by me"
            ariaLabel="projects page"
          >
            <div className="flex items-center justify-center px-5 py-2">
              <Image
                src={projectsImg}
                alt="spinning moon on a hand"
                width={140}
                height={140}
                className="border-[0.625rem] border-[#202126] rounded-full group-hover:animate-rotate group-focus:animate-rotate"
              />
            </div>
          </HomeCard>
        </div>

        <div className="col-span-12 sm:col-span-5">
          <HomeCard
            href="/contact"
            title="contact"
            label="let's talk"
            ariaLabel="contact page"
          >
            <div className="flex items-center justify-center px-5 py-4">
              <Image
                src={contactImg}
                alt="paper plane"
                width={140}
                height={90}
                className="group-hover:translate-x-[21.875rem] group-hover:-translate-y-[12.5rem] sm:group-hover:translate-x-[13.75rem] sm:group-hover:-translate-y-[11.25rem] group-focus:translate-x-[21.875rem] group-focus:-translate-y-[12.5rem] sm:group-focus:translate-x-[13.75rem] sm:group-focus:-translate-y-[11.25rem] duration-1000"
              />
            </div>
          </HomeCard>
        </div>
      </div>
    </div>
  );
}
