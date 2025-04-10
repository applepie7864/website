import ThemeToggle from "./components/common/theme-toggle";
import SpotifyCard from "./components/common/spotify-card";
import ExperienceCard from "./components/sections/experience/experience-card";

function App() {
    return (
        <div className="bg-gray-50 dark:bg-gray-950 w-screen h-screen flex items-center justify-center gap-4 flex-wrap">
            <ThemeToggle />
            <SpotifyCard />
            <ExperienceCard company="Google" type="Internship" title="Software Engineer" date="Winter 2026" location="San Francisco, CA" website="https://www.google.com/" logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" summary="Developed load balancing algorithms to support the onboarding of 5+ million users on Google Cloudgi" />
        </div>
    );
}

export default App;
