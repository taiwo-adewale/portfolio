import Link from "next/link";
import Image from "next/image";

import { Project } from "@/types/project";
import { FaGithub } from "react-icons/fa";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <li className="flex flex-col border-2 border-border rounded-large">
      <Link href={project.url} target="_blank" tabIndex={-1}>
        <Image
          src={project.image}
          alt={project.title + "page screenshot"}
          width={720}
          height={400}
          className="w-full object-cover rounded-t-large"
          placeholder="blur"
        />
      </Link>

      <div className="flex flex-col flex-grow p-4 sm:p-6 gap-y-3">
        <div className="text-[1.625rem] flex justify-between items-center gap-x-1">
          <h2 className="capitalize line-clamp-1">{project.title}</h2>

          {project.github ? (
            <Link
              href={project.github}
              target="_blank"
              aria-label={`github repository for ${project.title}`}
              className="text-2xl rounded-full border-border border-2 p-1.5 hover:border-primary hover:bg-card-secondary focus:bg-card-secondary duration-300"
            >
              <FaGithub />
            </Link>
          ) : (
            <div className="text-2xl rounded-full border-border border-2 p-1.5 opacity-30">
              <FaGithub />
            </div>
          )}
        </div>

        <p className="flex-grow font-light text-lg">{project.description}</p>

        <div>
          <Link
            target="_blank"
            aria-label={`view ${project.title}`}
            href={project.url}
            className="text-xl text-primary rounded-sm"
          >
            View →
          </Link>
        </div>
      </div>
    </li>
  );
}
