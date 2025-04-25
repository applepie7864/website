import { useState } from "react";
import { Experience } from "../../../types";

const ExperienceCard = ({company, title, date, location, website, logo, summary}: Experience) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="w-full p-2 rounded-md border-2 border-gray-200 dark:border-gray-800 flex flex-row items-center justify-between cursor-default"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a
        href={website}
        target="_blank"
        rel="noreferrer"
        className="w-10 desktop:w-14 p-1 flex flex-shrink-0 items-center justify-center"
      >
        <img
          src={logo}
          alt="logo"
          className="desktop:hover:scale-[1.02] rounded-full border-2 border-gray-200 dark:border-gray-800 cursor-pointer"
        />
      </a>

      <div className="hidden desktop:block mx-2 flex flex-grow">
        {
          hover ? (
            <div className="text-md text-gray-500">{summary}</div>
          ) : (
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col items-start justify-center">
                <div className="text-md medium">{company}</div>
                <div className="text-md text-gray-500">{title}</div>
              </div>
              <div className="flex flex-col items-end justify-center">
                <div className="mt-[0.1rem] text-md">{date}</div>
                <div className="text-md text-gray-500">{location}</div>
              </div>
            </div>
          )
        }
      </div>

      <div className="block desktop:hidden w-full mx-2 flex flex-col items-start justify-center">
        <div className="text-sm medium">{company}</div>
        <div className="text-xs text-gray-500">{title}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
