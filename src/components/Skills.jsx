import React, { useRef, useEffect, useState } from "react";

import { SectionWrap } from "../wrapper";
import SkillsProgress from "./SkillsProgress";
import { skills } from "../data";

const Skills = () => {
  return (
    <>
      <div className="flex flex-col gap-y-12 pt-4 pb-8 w-full items-center">
        <h3 className="section-header text-center w-fit text-primary font-bold text-4xl">
          My Skills
        </h3>

        <div className="flex flex-wrap gap-6 items-center justify-center">
          {skills.map((skill) => (
            <SkillsProgress
              key={skill.name}
              endValue={skill.progress}
              name={skill.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrap(Skills, "skills");
