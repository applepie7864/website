import { useEffect, useState } from "react";
import { ExperienceProps } from "../types"

export default function ExperienceCard(props: ExperienceProps) {
    return (
        <div className="w-full px-10 py-4 rounded-sm">
            <div className="bg-inherit flex flex-col items-start justify-center gap-4">
                <div className="w-full bg-inherit flex flex-row justify-between items-start">
                    <div className="bg-inherit flex flex-row justify-start gap-4">
                        <a href={ props.logo } className="bg-inherit" target="_blank">
                            <img className="w-10 h-10 rounded-sm shadow-md hover:shadow-inner bg-white" src={ props.website } alt={props.company} />
                        </a>
                        <div className="bg-inherit">
                            <div className="bg-inherit text-lg text-zinc-800 sb leading-6">{props.company}</div>
                            <div className="bg-inherit text-sm text-zinc-700 m">{props.title}</div>
                        </div>
                    </div>
                    <div className="bg-inherit">
                        <div className="bg-inherit text-right text-sm text-zinc-700 r">{props.location}</div>
                        <div className="bg-inherit text-right text-sm text-zinc-800 r">{props.date}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
