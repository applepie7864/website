import SpotifyCard from "./components/Spotify";
import ThemeToggle from "./components/ThemeToggle";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import ExtracurricularSection from "./sections/ExtracurricularSection";

function App() {
  return (
    <div className="bg-white dark:bg-black m-8">
      <ExperienceSection />
      <SpotifyCard />
      <ThemeToggle />
      <ExtracurricularSection />
      <ContactSection />
    </div>
  );
}

export default App;
