import LinkBlock from "./components/common/link-block";
import SideBar from "./components/common/side-bar";
import SpotifyCard from "./components/common/spotify-card";
import ThemeToggle from "./components/common/theme-toggle";
import ContactSection from "./components/sections/contact/main";
import ExperienceSection from "./components/sections/experience/main";
import ProjectSection from "./components/sections/projects/main";
import data from "./config.json";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950">
      <div className="ml-[35rem] pr-20 py-16 flex flex-col gap-8">
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
        <div className="w-full flex flex-col items-end">
          <SpotifyCard />
          <div className="flex flex-col items-end pr-5 pt-7">
            <LinkBlock showLinkedin showGithub showInstagram showVsco showResume />
            <div className="text-sm regular text-gray-500 mt-3">
              {"© " + data.general.year + " " + data.general.name + ". " + data.general.location}
            </div>
          </div>
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default App;
