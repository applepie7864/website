import { useState } from "react";
import { Experience } from "../../../types";

const ExperienceCard = ({company, title, date, location, website, logo, summary}: Experience) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="w-full p-2 flex flex-row cursor-default bg-gray-50 dark:bg-gray-950 rounded-md border-2 border-gray-200 dark:border-gray-800"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a href={website} target="_blank" rel="noreferrer" className="w-1/12 m-2">
        <img src={logo}
           alt="logo"
           className="rounded-full cursor-pointer hover:scale-[1.02] border-2 border-gray-200 dark:border-gray-800"
        />
      </a>
      {
        hover ? (
          <div className="w-11/12 px-2 text-gray-500 regular flex flex-row items-center">{summary}</div>
        ) : (
          <div className="w-11/12 flex flex-row px-2 items-center justify-between">
            <div className="flex flex-col items-start justify-center">
              <div className="medium text-lg text-gray-700 dark:text-gray-300">{company}</div>
              <div className="regular text-md text-gray-500">{title}</div>
            </div>
            <div className="flex flex-col items-end justify-center">
              <div className="regular text-md text-gray-700 dark:text-gray-300 mt-[0.1rem]">{date}</div>
              <div className="regular text-md text-gray-500">{location}</div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default ExperienceCard;
