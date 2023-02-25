import { skills } from "utils/data";

function Skills() {
  return (
    <main className="text-dark dark:text-light">
      <div className="divide-y divide-gray-200 dark:divide-borderColorDark">
        <div className="pt-2 md:pt-6 pb-6 md:pb-8 text-center">
          <h1 className="font-bold leading-9 tracking-tight text-dark dark:text-light text-3xl sm:leading-10 md:text-4xl lg:text-5xl xxl:text-6xl md:leading-14">
            Skills
          </h1>
        </div>

        <div className="py-10 md:py-12 xxl:py-20 flex-center gap-8 flex-wrap">
          {skills.map((skill, index) => (
            <div
              key={`skill-${index}`}
              className="rounded-lg border-2 border-borderColorLight dark:border-borderColorDark border-opacity-60 flex-center flex-col items-center space-y-2 sm:space-y-3 xxl:space-y-5 w-28 sm:w-28 md:w-32 lg:w-36 h-28 sm:h-28 md:h-32 lg:h-36 xxl:w-52 xxl:h-52"
            >
              <div style={{ color: skill.color }}>{skill.icon}</div>
              <span className="lg:text-lg xxl:text-2xl">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Skills;
