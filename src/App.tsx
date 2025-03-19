import EmailForm from "./components/sections/contact/contact-form";
import RectangleCard from "./components/common/RectangleCard";
import SpotifyCard from "./components/common/spotify-card";
import ThemeToggle from "./components/common/theme-toggle";
import ContactSection from "./components/sections/contact/main";
import ExperienceSection from "./components/sections/ExperienceSection";
import ExtracurricularSection from "./components/sections/ExtracurricularSection";
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
