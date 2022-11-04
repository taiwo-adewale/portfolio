import React from "react";

import { SectionWrap } from "../wrapper";
import { images } from "../assets";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap w-full py-4 gap-y-10 gap-x-8">
        <div className="w-full md:w-1/2 md:order-2 flex flex-col justify-between items-center md:items-start">
          <h3 className="section-header about w-fit text-primary font-bold text-4xl mb-6">
            About Me
          </h3>

          <h2 className="text-4xl font-bold mb-4">I am a Website Developer</h2>

          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
            beatae veniam sint odit vel, omnis architecto dolores autem facere
            obcaecati aspernatur deleniti voluptatem! Molestias sed voluptatibus
            possimus delectus suscipit at!
          </p>
        </div>

        <div className="w-full md:w-1/2 md:order-1">
          <img
            src={images.heroImage}
            alt="hero"
            className="w-full h-[280px] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default SectionWrap(About, "about");
