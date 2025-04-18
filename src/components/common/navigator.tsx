import { useState, useEffect, useRef } from "react";
import Briefcase from "./icons/briefcase";
import Code from "./icons/code";
import Phone from "./icons/phone";

export default function Navigator() {
  const activeBlock = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("experience");

  const sections = ["experience", "projects", "contact"];
  const elements = sections.map((section) => document.getElementById(section));

  function goTo(section: string) {
    setActive(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  function handleScroll() {
    elements.forEach((element) => {
      if (element) {
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;
        if (top <= window.scrollY && window.scrollY <= bottom) {
          setActive(element.id);
          return;
        };
      };
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const translationAmount = sections.indexOf(active) * 3;
    if (activeBlock.current) {
      activeBlock.current.style.transition = "transform 0.2s ease";
      activeBlock.current.style.transform = `translateY(${translationAmount}rem)`;
    };
  }, [active]);

  function getTextStyles(section: string) {
    var style = "w-fit h-fit flex flex-row items-center gap-4 cursor-pointer text-lg regular ";
    if (section == active) {
      style += "text-gray-200 dark:text-gray-800";
    } else {
      style += "text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-500";
    };
    return style;
  };

  return (
    <nav className="flex flex-col relative">
      <div
        ref={activeBlock}
        className="w-64 h-12 bg-gray-800 dark:bg-gray-200 rounded-full absolute top-0 left-0"
      />

      <div className="flex items-center w-64 h-12 px-4 py-2 z-10">
        <div
          className={getTextStyles("experience")}
          onClick={() => goTo("experience")}
        >
          <div className="navigator-icon"><Briefcase /></div>
          Experience
        </div>
      </div>

      <div className="flex items-center w-64 h-12 px-4 py-2 z-10">
        <div
          className={getTextStyles("projects")}
          onClick={() => goTo("projects")}
        >
          <div className="navigator-icon"><Code /></div>
          Projects
        </div>
      </div>

      <div className="flex items-center w-64 h-12 px-4 py-2 z-10">
        <div
          className={getTextStyles("contact")}
          onClick={() => goTo("contact")}
        >
          <div className="navigator-icon"><Phone /></div>
          Contact
        </div>
      </div>
    </nav>
  );
};