import LinkBlock from "./components/common/link-block";
import ThemeToggle from "./components/common/theme-toggle";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 flex flex-col items-center justify-center gap-4">
      <ThemeToggle/>
      <LinkBlock showLinkedin showGithub showInstagram showResume/>
    </div>
  );
};

export default App;
