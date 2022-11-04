import React from "react";

import { works } from "../data";
import { SectionWrap } from "../wrapper";

const Works = () => {
  return (
    <>
      <div className="flex flex-col gap-y-12 pt-4 pb-8 w-full items-center">
        <h3 className="section-header w-fit text-center text-primary font-bold text-4xl">
          My Works
        </h3>

        <div className="flex flex-wrap gap-6 justify-center w-full overflow-hidden">
          {works.map((work, index) => (
            <div
              key={`work-${index}`}
              className="bg-[rgba(0,0,0,0.3)] flex flex-col w-full rounded-2xl overflow-hidden"
            >
              <img src={work.image} alt="" className="w-full" />

              <div className="flex flex-col p-4 pb-6 gap-2">
                <div>
                  <h4 className="text-xl capitalize font-bold">{work.title}</h4>
                  <p className="text-sm">{work.description}</p>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap gap-x-4 gap-y-2 mt-4">
                  <a
                    href={work.projectUrl}
                    target="_blank"
                    className="w-1/2 bg-primary text-white text-center rounded-lg text-sm px-4 py-2 font-medium flex-grow sm:flex-grow-0"
                  >
                    Live Site
                  </a>
                  <a
                    href={work.github}
                    target="_blank"
                    className="w-1/2 bg-primary text-white text-center rounded-lg text-sm px-4 py-2 font-medium flex-grow sm:flex-grow-0"
                  >
                    Github
                  </a>
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
