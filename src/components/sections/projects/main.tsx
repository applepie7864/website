import data from '../../../config.json';
import { Project } from '../../../types';
import ProjectCard from './project-card';

const ProjectSection = () => {
  return (
    <section id="projects">
      <div className="block desktop:hidden text-2xl medium mb-2">Projects</div>
      <div className="w-full grid grid-cols-1 desktop:grid-cols-2 gap-4">
        {data.projects.map((project: Project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;