import Banner from "@/components/Banner";
import { projects } from "@/constants/projects";
import ProjectCard from "./ProjectCard";

import projectsBanner from "public/assets/projects-banner.jpg";

export default function Projects() {
  return (
    <div>
      <Banner title="my works" label="built by me" image={projectsBanner} />

      <ul className="grid grid-cols-1 gap-8 py-10 md:py-12 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project}></ProjectCard>
        ))}
      </ul>
    </div>
  );
}
