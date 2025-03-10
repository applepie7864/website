import EmailForm from "./components/EmailForm";
import RectangleCard from "./components/RectangleCard";
import SpotifyCard from "./components/SpotifyCard";
import ThemeToggle from "./components/ThemeToggle";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import ExtracurricularSection from "./sections/ExtracurricularSection";
import { Experience } from "./types";

function App() {
  const experience: Experience = {
    company: "Google",
    title: "Software Engineer",
    date: "Summer 2027",
    location: "San Francisco, CA",
    website: "https://www.google.com/",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRB4kg1jgnqD5fEaCSHKMoUdFeTBj9CH_opA&s"
  }
  return (
    <div className="bg-white dark:bg-black">
      <EmailForm />
      <SpotifyCard />
      <ThemeToggle />
      <RectangleCard {...experience} />
    </div>
  );
}

export default App;
