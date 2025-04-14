import SpotifyCard from "./components/common/spotify-card";
import ThemeToggle from "./components/common/theme-toggle";
import ExperienceCard from "./components/sections/experience/experience-card";
import ProjectCard from "./components/sections/projects/project-card";
import config from "./config.json"
import { Project, Experience } from "./types"

function App() {
    return (
        <div className="bg-gray-50 dark:bg-gray-950 flex flex-col items-center justify-center gap-4">
            <ThemeToggle />
            <div className="w-full h-11/12 flex flex-col items-center justify-center gap-2">
                {config.experiences.map((experience: Experience) => (
                    <ExperienceCard {...experience} />
                ))}
            </div>
            <div className="w-full h-11/12 flex flex-row gap-2 flex-wrap">
                {config.projects.map((project: Project) => (
                    <ProjectCard {...project} />
                ))}
            </div>
            <SpotifyCard />
        </div>
    );
}

export default App;
