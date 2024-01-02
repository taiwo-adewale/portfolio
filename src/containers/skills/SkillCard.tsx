import { Skill } from "@/types/skill";

type Props = {
  skill: Skill;
};

export default function SkillCard({ skill }: Props) {
  return (
    <li className="flex flex-col items-center gap-y-3 rounded-small">
      <div className="bg-card border-[0.375rem] border-border rounded-full p-7 md:p-8">
        <div className="text-5xl md:text-6xl">{skill.icon}</div>
      </div>

      <span className="uppercase font-light text-base whitespace-nowrap">
        {skill.name}
      </span>
    </li>
  );
}
