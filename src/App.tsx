import SpotifyCard from "./components/SpotifyCard";
import ThemeToggle from "./components/ThemeToggle";
import ExperienceSection from "./sections/ExperienceSection";

function App() {
  return (
    <div className="bg-white dark:bg-black m-8">
      <SpotifyCard />
      <ThemeToggle />
      <ExperienceSection />
    </div>
  );
}

export default App;
