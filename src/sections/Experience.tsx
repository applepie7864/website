import { useState } from 'react'
import ExperienceCard from '../components/ExperienceCard'

export default function Experience() {
  return (
    <section id="experience" className='pl-[34.5rem] pr-20 pt-16 flex flex-col items-center justify-center gap-4'>
      <ExperienceCard 
        website="https://www.descartes.com/home"
        companyName='DESCARTES'
        position='Software Engineer Intern' 
        date='May 2024 - Aug 2024'
        location='Waterloo, ON, Canada'
        description='Supported the migration of company applications onto the .NET Core framework and developed geocoding services for address search and validation &#128205;'
      />
      <ExperienceCard 
        website="https://eonmedia.ai/"
        companyName='EON MEDIA'
        position='Software Engineer Intern' 
        date='Sep 2023 - Dec 2023'
        location='Toronto, ON, Canada'
        description='Developed AI features, streamlined HLS encoding processes with AWS Lambda and built RESTful APIs for a video streaming platform &#127909;'
      />
    </section>
  )
}
