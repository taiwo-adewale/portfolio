import Image from "next/image";
import Link from "next/link";

import { works } from "utils/data";

function Projects() {
  return (
    <main>
      <div className="divide-y divide-gray-200 dark:divide-borderColorDark">
        <div className="pt-2 md:pt-6 pb-6 md:pb-8 text-center">
          <h1 className="font-bold leading-9 tracking-tight text-dark dark:text-light text-3xl sm:leading-10 md:text-4xl lg:text-5xl xxl:text-6xl md:leading-14">
            Projects
          </h1>
        </div>

        <div className="py-10 md:py-12 grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={`work-${index}`}
              className="flex flex-col overflow-hidden rounded-md border-2 border-borderColorLight dark:border-borderColorDark border-opacity-60"
            >
              <Link
                href={work.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  className="w-full object-cover"
                />
              </Link>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h2 className="mb-3 text-2xl xxl:text-3xl font-bold leading-8 tracking-tight dark:text-white text-black">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={work.projectUrl}
                    aria-label={`Link to ${work.title}`}
                    className="capitalize"
                  >
                    {work.title}
                  </Link>
                </h2>
                <p className="mb-3 text-dark dark:text-textGray xxl:text-xl flex-grow">
                  {work.description}
                </p>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={work.projectUrl}
                  className="font-medium leading-6 text-primary hover:text-[#0D9488] dark:hover:text-[#2DD4BF] xxl:text-xl"
                  aria-label={`Link to ${work.title}`}
                >
                  View →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;
