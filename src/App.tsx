import ThemeToggle from "./components/common/theme-toggle";
import SpotifyCard from "./components/common/spotify-card";
import ExperienceCard from "./components/sections/experience/experience-card";
import config from "./config.json"
import { Experience } from "./types"

function App() {
    return (
        <div className="bg-gray-50 dark:bg-gray-950 w-screen h-screen flex items-center justify-center flex-wrap">
            <ThemeToggle />
            <div className="w-full h-11/12 flex flex-col items-center justify-center gap-2">
                {config.experiences.map((experience: Experience) => (
                    <ExperienceCard {...experience} />
                ))}
            </div>
        </div>
    );
}

export default App;
