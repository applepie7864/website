import { useState } from 'react';
import '../assets/imgs/apple.png'
import Export from '../assets/svg/Export';

interface ProjectCardProps {
    projectName: string;
    mainTool: string;
    githubRepo: string;
    projectDescription: string;
}

export default function ProjectCard(props: ProjectCardProps) {
    var url = ""
    if (props.projectName == "APPLE WEBSITE") {
        url = require("../assets/imgs/apple.png")
    } else if (props.projectName == "CC3K") {
        url = require("../assets/imgs/cc3k.png")
    } else if (props.projectName == "DOCUVERSE") {
        url = require("../assets/imgs/docuverse.png")
    } else if (props.projectName == "ISPY") {
        url = require("../assets/imgs/ispy.png")
    } else if (props.projectName == "2048") {
        url = require("../assets/imgs/2048.png")
    } else if (props.projectName == "PORTFOLIO") {
        url = require("../assets/imgs/portfolio.png")
    }

    return (
        <div className="w-[19.7rem] h-[20rem] bg-zinc-200 rounded-sm mb-4 p-4">
            <div className='w-full h-[12rem] mb-4 relative group'>
                <img className="w-full h-full object-cover border rounded-sm border-zinc-300 shadow-md absolute" src={ url } alt="url" />
                <div className="absolute w-full h-full bg-transparent hidden z-10 group-hover:block">
                    <div className='absolute bg-zinc-700 opacity-70 w-full h-full'></div>
                    <div className='absolute w-full h-full bg-transparent flex items-center justify-center'>
                        <a className="bg-inherit" href={ props.githubRepo } target='_blank'><Export /></a>
                    </div>
                </div>
            </div>
            <div className="bg-inherit px-[0.2rem]">
                <div className='bg-inherit flex flex-row items-center gap-2 h-10'>
                    <div className="bg-inherit text-lg sb text-zinc-900 mb-1">{ props.projectName }</div>
                    <div className='bg-inherit text-xs leading-3 p-1.5 translate-y-[-1.5px] rounded-full bg-zinc-50 m text-zinc-700 shadow-sm'>{ props.mainTool }</div>
                </div>
                <div className="bg-inherit text-zinc-700 text-sm">{ props.projectDescription }</div>
            </div>
        </div>
    )
}
