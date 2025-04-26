import data from '../../../config.json';
import { Experience } from '../../../types';
import ExperienceCard from './experience-card';

const ExperienceSection = () => {
  return (
    <section id="experience" className='flex flex-col gap-2'>
      <div className="block desktop:hidden text-2xl medium">Experience</div>
      {data.experiences.map((experience: Experience) => (
        <ExperienceCard {...experience} />
      ))}
    </section>
  );
};

export default ExperienceSection;
