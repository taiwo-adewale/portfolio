import Banner from "@/components/Banner";
import { skills } from "@/constants/skills";
import SkillsContainer from "./SkillsContainer";

import skillsBanner from "public/assets/skills-banner.jpg";

export default function Skills() {
  return (
    <div>
      <Banner title="my skills" label="code toolkit" image={skillsBanner} />

      <SkillsContainer
        title="Frontend"
        skills={skills.filter((skill) => skill.type === "frontend")}
      />

      <SkillsContainer
        title="Databases"
        skills={skills.filter((skill) => skill.type === "database")}
      />

      <SkillsContainer
        title="Tools"
        skills={skills.filter((skill) => skill.type === "tool")}
        bottomSeparator={false}
      />
    </div>
  );
}
