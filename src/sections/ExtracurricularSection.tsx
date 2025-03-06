import React from 'react'
import config from '../config.json'
import { Experience } from '../types'
import RectangleCard from '../components/RectangleCard'

const ExtracurricularSection = () => {
  return (
    <div className='flex flex-col gap-2'>
        {config.extracurriculars.map((extracurricular: Experience) => (
            <RectangleCard {...extracurricular} />
        ))}
    </div>
  )
}

export default ExtracurricularSection