import { Experience } from "../../../types"

const ExperienceCard = ({ company, title, date, location, website, logo }: Experience) => {
  return (
    <a href={website} target="_blank" className="w-1/2 flex flex-row items-center justify-between hover:scale-[1.01] cursor-default bg-gray-50 dark:bg-gray-950 py-4 px-6 rounded-lg border-gray-200 dark:border-gray-800 border-2">
      <div className="flex flex-row items-center gap-4">
          <img src={logo} alt="logo" className="w-12 h-12 rounded-full" />
          <div className="flex flex-col items-start">
              <div className="semi-bold text-xl text-gray-700 dark:text-gray-300">{company}</div>
              <div className="regular text-l text-gray-600 dark:text-gray-400">{title}</div>
          </div>
      </div>
      <div className="flex flex-col items-end">
          <div className="semi-bold text-l text-gray-700 dark:text-gray-300">{date}</div>
          <div className="regular text-m text-gray-600 dark:text-gray-400">{location}</div>
      </div>
    </a>
  )
}

export default ExperienceCard
