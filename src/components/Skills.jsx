import React from "react";

import { SectionWrap } from "../wrapper";

const Skills = () => {
  return (
    <>
      <div className="flex flex-col gap-y-12 pt-4 pb-8 w-full items-center">
        <h3 className="section-header text-center w-fit text-primary font-bold text-4xl">
          My Skills
        </h3>
      </div>
    </>
  );
};

export default SectionWrap(Skills, "skills");
