import React from "react";

import { SectionWrap } from "../wrapper";
import { images } from "../assets";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap w-full py-4 gap-x-8">
        <div className="w-full md:w-1/2 md:order-2 flex flex-col justify-between items-center md:items-start">
          <h3 className="section-header about w-fit text-primary font-bold text-center md:text-start text-4xl mb-6">
            About Me
          </h3>

          <h2 className="text-4xl font-bold mb-4 text-center md:text-start">
            I am a Website Developer
          </h2>

          <p className="text-sm text-center md:text-start">
            My name is Taiwo Adewale and I am an adept web developer with great
            passion for building interactive websites. I have always wondered
            how things work and that is what fueled my desire to be part of the
            process. As a natural problem solver, I just knew web development
            was for me. Since i entered into web development, I have built many
            web applications which are not only responsive but also built using
            the best software practices. My team work skills are superb and I am
            also fast learner.
          </p>
        </div>

        <div className="w-full md:w-1/2 md:order-1">
          <img
            src={images.aboutImage}
            alt="hero"
            className="w-full h-[280px] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default SectionWrap(About, "about");
