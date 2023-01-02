import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

import { works } from "../data";
import { SectionWrap } from "../wrapper";

const Works = () => {
  return (
    <>
      <div className="flex flex-col gap-y-12 pt-4 pb-8 w-full items-center">
        <h3 className="section-header w-fit text-center text-primary font-bold text-4xl">
          My Works
        </h3>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8">
          {works.map((work, index) => (
            <div key={`work-${index}`} className="w-full">
              <div className="bg-[#202020] flex flex-col rounded-2xl overflow-hidden">
                <img src={work.image} alt="project" className="w-full" />

                <div className="flex flex-col p-4 pb-6 gap-2 rounded-b-2xl border-t-0 border border-[rgba(64,66,69,0.5)]">
                  <div>
                    <h4 className="text-2xl capitalize font-bold break-all text-gray-100">
                      {work.title}
                    </h4>
                    <p className="text-xs sm:text-sm">{work.description}</p>
                  </div>

                  <div className="flex xs:flex-wrap sm:flex-nowrap gap-x-4 gap-y-2 mt-4">
                    <a
                      href={work.projectUrl}
                      target="_blank"
                      className="w-1/2 flex items-center justify-center gap-x-2 bg-gradient-to-br gradient-colors text-white text-center rounded-lg text-sm px-4 xs:py-1.5 py-2 font-medium flex-grow sm:flex-grow-0"
                    >
                      <BiWorld className="text-base" />
                      <span>Live Site</span>
                    </a>
                    <a
                      href={work.github}
                      target="_blank"
                      className="w-1/2 flex items-center justify-center gap-x-2 bg-[#171515] text-white text-center rounded-lg text-sm px-4 xs:py-1.5 py-2 font-medium flex-grow sm:flex-grow-0"
                    >
                      <FaGithub className="text-base" />
                      <span>Github</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrap(Works, "works");
