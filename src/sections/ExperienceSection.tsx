import React from 'react'
import config from '../config.json'
import { Experience } from '../types'
import ExperienceCard from '../components/ExperienceCard'

const ExperienceSection = () => {
  return (
    <div className='flex flex-col gap-2'>
        {config.experiences.map((experience: Experience) => (
            <ExperienceCard {...experience} />
        ))}
    </div>
  )
}

export default ExperienceSection
