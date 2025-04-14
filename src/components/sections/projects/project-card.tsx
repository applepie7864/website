import { useState } from "react";
import { Project } from "../../../types"
import Github from "../../svg/github";

const ProjectCard = ({ id, name, description, link, technologies }: Project) => {
    const images = [
        require("../../../assets/imgs/apple.png"), 
        require("../../../assets/imgs/cc3k.png"),
        require("../../../assets/imgs/docuverse.png"),
        require("../../../assets/imgs/ispy.png"),
        require("../../../assets/imgs/2048.png")
    ]

    return (
        <div className="w-80 h-[22rem] rounded-md border-2 border-gray-200 dark:border-gray-800 p-4">
            <img src={images[id]} alt="screenshot" className="w-full h-3/5 rounded-md border-2 border-gray-200 dark:border-gray-800 object-cover" />
            <div className="p-1 flex flex-col justify-between h-2/5">
                <div className="flex flex-row items-center gap-2">
                    <div className="medium text-lg text-gray-700 dark:text-gray-300 mt-1">{name}</div>
                    <a href={link} target="_blank" rel="noreferrer" className="cursor-pointer">
                        <Github />
                    </a>
                </div>
                <div className="regular text-md text-gray-500 mb-2">{description}</div>
                <div className="flex flex-row gap-1">
                    {technologies.map((technology: string) => (
                        <div className="px-2 py-1 rounded-md border-[1.5px] border-gray-200 dark:border-gray-800 regular text-xs text-gray-700 dark:text-gray-300">{technology}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;