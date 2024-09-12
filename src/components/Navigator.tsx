import { useState } from "react"
import Work from "../assets/svg/Work";
import Code from "../assets/svg/Code";
import Mail from "../assets/svg/Mail";

export default function Navigator() {
    const [section, setSection] = useState("experience");
    const inactiveText = "text-sm text-zinc-500 b"
    const activeText = "text-sm text-zinc-900 b scale-105"

    function goToSection(id: string) {
        setSection(id)
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView()
        }
    };

    window.addEventListener('scroll', scroll);
    function scroll() {
        if (window.scrollY > 1450) {
            setSection("contact")
        } else if (window.scrollY > 420) {
            setSection("projects")
        } else {
            setSection("experience")
        }
    }

    return (
        <nav className="flex flex-col items-start justify-center gap-4">
            <div className="flex flex-row items-center justify-left gap-4 cursor-pointer" onClick={() => goToSection("experience")}>  
                <div className={ section == "experience" ? activeText : inactiveText }>EXPERIENCE</div>
                <Work color={ section == "experience" ? "#18181b" : "#71717a" } /> 
            </div>
            <div className="flex flex-row items-center justify-left gap-4 cursor-pointer" onClick={() => goToSection("projects")}>
                <div className={ section == "projects" ? activeText : inactiveText }>PROJECTS</div>
                <Code color={ section == "projects" ? "#18181b" : "#71717a" } />
            </div>
            <div className="flex flex-row items-center justify-left gap-4 cursor-pointer" onClick={() => goToSection("contact")}>
                <div className={ section == "contact" ? activeText : inactiveText }>CONTACT</div>
                <Mail color={ section == "contact" ? "#18181b" : "#71717a" } />
            </div>
        </nav>
    )
}
