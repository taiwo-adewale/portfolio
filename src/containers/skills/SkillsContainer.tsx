import SectionTitle from "@/components/SectionTitle";
import Separator from "@/components/Separator";
import SkillCard from "./SkillCard";
import { Skill } from "@/types/skill";

type Props = {
  title: string;
  skills: Skill[];
  bottomSeparator?: boolean;
};

export default function SkillsContainer({
  title,
  skills,
  bottomSeparator = true,
}: Props) {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>

      <ul className="flex gap-x-5 gap-y-6 flex-wrap justify-center mt-10">
        {skills.map((skill, index) => (
          <SkillCard key={`skill-${index}`} skill={skill} />
        ))}
      </ul>

      {bottomSeparator && <Separator />}
    </>
  );
}
