import { Project } from "../../../types";
import Github from "../../common/icons/github";
import '../../../styles/icons.scss';

const ProjectCard = ({ name, description, link, technologies, image }: Project) => {
  return (
    <div className="w-[19.5rem] h-[22rem] rounded-md border-2 border-gray-200 dark:border-gray-800 p-4">
      <img src={image} alt="screenshot" className="w-full h-3/5 rounded-md border-2 border-gray-200 dark:border-gray-800 object-cover" />
      <div className="p-1 flex flex-col justify-between h-2/5">
        <div className="flex flex-row items-center gap-2">
          <div className="medium text-lg text-gray-800 dark:text-gray-200 mt-1">{name}</div>
          <a
            className="project-card-icon text-gray-800 dark:text-gray-200"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
        </div>
        <div className="regular text-md text-gray-500 mb-2">{description}</div>
        <div className="flex flex-row gap-1">
          {technologies.map((technology: string) => (
            <div className="px-2 py-1 rounded-md border-[1.5px] border-gray-200 dark:border-gray-800 regular text-xs text-gray-800 dark:text-gray-200">{technology}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;