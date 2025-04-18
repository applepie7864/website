import React from 'react';
import data from '../../../config.json';
import { Experience } from '../../../types';
import ExperienceCard from './experience-card';

const ExperienceSection = () => {
  return (
    <section id="experience" className='flex flex-col gap-2'>
      {data.experiences.map((experience: Experience) => (
        <ExperienceCard {...experience} />
      ))}
    </section>
  );
};

export default ExperienceSection;
