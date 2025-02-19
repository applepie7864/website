import ExperienceCard from '../ExperienceCard'
import data from '../../config.json'
import { ExperienceProps } from '../../types'

export default function Experience() {
  return (
    <section id="experience" className='pl-[34.5rem] pr-20 pt-16 flex flex-col items-center justify-center'>
      {data.experiences.map((experience: ExperienceProps) => (
        <ExperienceCard {...experience} />
      ))}
    </section>
  )
}
