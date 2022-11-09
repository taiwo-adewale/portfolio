import React from "react";

import { SectionWrap } from "../wrapper";
import { images } from "../assets";

const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap w-full py-4 gap-6">
        <div className="w-full md:w-3/5 xl:w-1/2 order-2 md:order-1 flex flex-col justify-center">
          <h3 className="uppercase mb-4 text-center md:text-start text-sm tracking-[1px] text-neutral-400">
            I am Taiwo Adewale
          </h3>
          <h2 className="text-4xl sm:text-5xl text-center md:text-start font-bold mb-12 break-word text-transparent bg-clip-text bg-gradient-to-r gradient-colors">
            Web Developer
          </h2>
          <div className="text-center md:text-start">
            <a
              href="#contact"
              className="py-3 px-6 rounded-lg bg-gradient-to-br font-medium tracking-[0.5px] gradient-colors text-white"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="w-full md:w-3/5 xl:w-1/2 order-1 md:order-2 flex md:justify-end">
          <img
            src={images.heroImage}
            alt="hero"
            className="w-full h-[300px] lg:h-[300px] xl:h-[350px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default SectionWrap(Hero);
