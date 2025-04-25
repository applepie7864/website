import data from "./config.json";

import SideBar from "./components/common/side-bar";
import Navigator from "./components/common/navigator";
import LinkBlock from "./components/common/link-block";
import SpotifyCard from "./components/common/spotify-card";

import ExperienceSection from "./components/sections/experience/main";
import ProjectSection from "./components/sections/projects/main";
import ContactSection from "./components/sections/contact/main";

function App() {
  return (
    <main className="bg-gray-50 dark:bg-gray-950 regular text-gray-800 dark:text-gray-200 flex items-center justify-center">
      <div
        id="desktop"
        className="hidden desktop:block w-[1200px] fade-in"
      >
        <SideBar />
        <div className="ml-[500px] pr-20 py-20 flex flex-col gap-10">
          <ExperienceSection />
          <ProjectSection />
          <ContactSection />
          <div className="flex flex-col items-end">
            <SpotifyCard />
            <div className="pr-5 pt-7 flex flex-col items-end">
              <LinkBlock showLinkedin showGithub showInstagram showVsco showResume />
              <div className="mt-3 text-sm text-gray-500">
                {"© " + data.general.year + " " + data.general.name + ". " + data.general.location}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile"
        className="block desktop:hidden w-[300px] px-5 pt-10 pb-5 flex flex-col gap-10 fade-in"
      >
        <div className="flex flex-col items-left justify-center">
          <div className="text-5xl bold">{data.general.name}</div>
          <div className="mb-2 text-2xl medium text-gray-500">{data.general.title}</div>
          <div className="text-base">{data.general.description}</div>
        </div>
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
        <div className="w-full mt-10 text-xs text-gray-500 flex justify-center">
          {"© " + data.general.year + " " + data.general.name + ". " + data.general.location}
        </div>
      </div>
    </main>
  );
};

export default App;
