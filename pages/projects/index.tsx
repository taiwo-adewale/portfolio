import Image from "next/image";
import Link from "next/link";

import { works } from "utils/data";

function Projects() {
  return (
    <main>
      <div className="divide-y divide-gray-200 dark:divide-borderColorDark">
        <div className="pt-2 pb-6 text-center md:pt-6 md:pb-8">
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-dark dark:text-light sm:leading-10 md:text-4xl lg:text-5xl xxl:text-6xl md:leading-14">
            Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8 py-10 md:py-12 md:grid-cols-2 xxl:grid-cols-3">
          {works.map((work, index) => (
            <div
              key={`work-${index}`}
              className="flex flex-col overflow-hidden border-2 rounded-xl border-borderColorLight dark:border-borderColorDark border-opacity-60"
            >
              <Link
                href={work.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  className="w-full"
                  placeholder="blur"
                />
              </Link>
              <div className="flex flex-col flex-grow p-4 sm:p-6">
                <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-black xxl:text-3xl dark:text-white">
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
                <p className="flex-grow mb-3 text-dark dark:text-textGray xxl:text-xl">
                  {work.description}
                </p>
                <div>
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
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;
