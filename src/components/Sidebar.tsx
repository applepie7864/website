import Download from "../assets/svg/Download"
import Github from "../assets/svg/Github"
import Linkedin from "../assets/svg/Linkedin"
import Navigator from "./Navigator"

export default function Sidebar() {
    return (
        <div className='w-[32rem] h-screen fixed top-0 left-0 flex flex-col items-left justify-between pl-20 pr-10 py-16 z-10'>
            <div className="flex flex-col items-left justify-center gap-1">
                <div className="text-6xl b">Annie Guo</div>
                <div className="text-3xl text-zinc-900 sb">Software Engineer</div>
                <div className="text-md text-zinc-700 r mt-4">Hello, World &#128075; Thanks for visiting my personal portfolio! I'm a computer science student at the <a className="link" href="https://uwaterloo.ca/" target="_blank">University of Waterloo</a> with a passion for problem solving and learning new technologies. Previously I've worked at <a className="link" href="https://www.descartes.com/home" target="_blank">Descartes Systems Group</a> and <a className="link" href="https://eonmedia.ai/" target="_blank">Eon Media</a>. Beyond academics, I like to figure skate, bake desserts and explore frontend designs.</div>
            </div>
            <Navigator />
            <div className="w-full flex flex-row items-center justify-start gap-4">
                <a href={require('../assets/resume.pdf')} className="w-28 h-10 flex items-center justify-center gap-1 border border-zinc-700 rounded-md shadow-md hover:shadow-inner" target = "_blank">
                    <div className="text-md text-zinc-700 bg-transparent">Resume</div>
                    <Download />
                </a>
                <a href="https://www.linkedin.com/in/anniewguo/" target="_blank"><Linkedin /></a>
                <a href="https://github.com/applepie7864" target="_blank"><Github /></a>
            </div>
        </div>
    )
}


