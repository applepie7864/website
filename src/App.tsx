import ThemeToggle from "./components/common/theme-toggle";
import Navigator from "./components/common/navigator";
import SpotifyCard from "./components/common/spotify-card";
import LinkBlock from "./components/common/link-block";
import config from "./config.json"
import { Experience } from "./types";
import ExperienceCard from "./components/sections/experience/experience-card";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950">
      <ThemeToggle />
      <Navigator />
    </div>
  );
};

export default App;
