import React from 'react';
import data from '../../../config.json';
import { Project } from '../../../types';
import ProjectCard from './project-card';

const ProjectSection = () => {
  return (
    <section id="projects" className='flex flex-row flex-wrap flex-grow justify-between gap-3'>
      {data.projects.map((project: Project) => (
        <ProjectCard {...project} />
      ))}
    </section>
  );
};

export default ProjectSection;