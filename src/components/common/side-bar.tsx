import data from "../../config.json";
import Navigator from "./navigator";
import ThemeToggle from "./theme-toggle";

export default function SideBar() {
  return (
    <div className="fixed top-0 left-0 w-[35rem] h-full bg-gray-50 dark:bg-gray-950 px-20 py-16 flex flex-col items-left justify-between">
      <div className="flex flex-col">
        <div className="text-6xl bold text-gray-800 dark:text-gray-200">{data.general.name}</div>
        <div className="text-3xl medium text-gray-500 mt-1 mb-5">{data.general.title}</div>
        <div className="text-lg regular text-gray-800 dark:text-gray-200">{data.general.description}</div>
      </div>
      <Navigator />
    </div>
  );
};