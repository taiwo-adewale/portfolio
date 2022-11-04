import React from "react";

import { SectionWrap } from "../wrapper";
import { images } from "../assets";

const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap w-full py-4 gap-6">
        <div className="w-full md:w-3/4 order-2 md:order-1 flex flex-col justify-center">
          <h3 className="uppercase mb-4 text-[rgba(255,255,255,0.8)]">
            I am Taiwo Adewale
          </h3>
          <h2 className="text-5xl font-bold mb-12 break-word">Web Developer</h2>
          <div>
            <a
              href="#contact"
              className="py-3 px-6 rounded-lg bg-primary text-white"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/4 order-1 md:order-2">
          <img src={images.heroImage} alt="hero" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default SectionWrap(Hero);
