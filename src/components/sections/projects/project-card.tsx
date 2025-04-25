import { Project } from "../../../types";
import Github from "../../common/icons/github";

const ProjectCard = ({ name, description, link, technologies, image }: Project) => {
  return (
    <div className="h-[19.5rem] desktop:h-[22.5rem] p-3 desktop:p-4 rounded-md border-2 border-gray-200 dark:border-gray-800">
      <img
        src={image}
        alt="screenshot"
        className="w-full h-3/5 object-cover rounded-md border-2 border-gray-200 dark:border-gray-800"
      />
      <div className="h-2/5 px-1 pt-2 flex flex-col items-start justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex flex-row items-center gap-1 desktop:gap-2">
            <div className="text-base desktop:text-lg medium">{name}</div>
            <a
              className="project-card-icon scale-[0.8] desktop:scale-100"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </div>
          <div className="text-sm desktop:text-base text-gray-500">{description}</div>
        </div>
        <div className="flex flex-row gap-1">
          {technologies.map((technology: string) => (
            <div className="text-[0.65rem] desktop:text-xs px-2 py-1 rounded-md border-[1.5px] border-gray-200 dark:border-gray-800">
              {technology}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;