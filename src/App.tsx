import ContactForm from "./components/sections/contact/contact-form";
import ThemeToggle from "./components/common/theme-toggle";
import LinkBlock from "./components/common/link-block";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 flex flex-col items-center justify-center gap-4">
      <ThemeToggle/>
      <ContactForm />
      <LinkBlock showResume showInstagram showGithub showLinkedin />
    </div>
  );
};

export default App;
