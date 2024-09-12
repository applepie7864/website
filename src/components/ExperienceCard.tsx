interface ExperienceCardProps {
    companyName: string;
    website: string;
    position: string;
    date: string;
    location: string;
    description: string;
}

export default function ExperienceCard(props: ExperienceCardProps) {
    var url = ""
    if (props.companyName == "DESCARTES") {
        url = require("../assets/imgs/descartes.png")
    } else if (props.companyName == "EON MEDIA") {
        url = require("../assets/imgs/eon.png")
    }

    return (
        <div className="w-full bg-zinc-200 px-10 py-9 rounded-sm">
            <div className="bg-inherit flex flex-col items-start justify-center gap-4">
                <div className="w-full bg-inherit flex flex-row justify-between items-start">
                    <div className="bg-inherit flex flex-row justify-start gap-4">
                        <a href={ props.website } className="bg-inherit" target="_blank">
                            <img className="w-11 h-11 rounded-full border border-zinc-300 shadow-md hover:shadow-inner" src={ url } alt={props.companyName} />
                        </a>
                        <div className="bg-inherit">
                            <div className="bg-inherit text-lg text-zinc-800 sb leading-6">{props.companyName}</div>
                            <div className="bg-inherit text-sm text-zinc-700 m">{props.position}</div>
                        </div>
                    </div>
                    <div className="bg-inherit">
                        <div className="bg-inherit text-right text-sm text-zinc-800 r">{props.date}</div>
                        <div className="bg-inherit text-right text-sm text-zinc-700 r">{props.location}</div>
                    </div>
                </div>
                <div className="bg-inherit text-sm text-zinc-700 r">{props.description}</div>
            </div>
        </div>
    )
}
