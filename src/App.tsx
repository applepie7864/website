import ThemeToggle from "./components/common/theme-toggle";
import SpotifyCard from "./components/common/spotify-card";

function App() {
    return (
        <div className="bg-gray-50 dark:bg-gray-950 w-screen h-screen flex items-center justify-center gap-4 flex-wrap">
            <ThemeToggle />
            <SpotifyCard />
        </div>
    );
}

export default App;
