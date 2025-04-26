import { useState, useEffect, useRef } from "react";
import { capitalize } from "lodash";

import Briefcase from "./icons/briefcase";
import Code from "./icons/code";
import Phone from "./icons/phone";

export default function Navigator() {
  const sections = ["experience", "projects", "contact"];
  const activeBlock = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (!locked) {
        const position = window.scrollY + (window.innerHeight / 2);
        const midpoints = sections.map((id) => {
          const element = document.getElementById(id);
          if (element) {
            const midpoint = element.offsetTop + (element.offsetHeight / 2);
            return midpoint;
          };
          return position;
        });

        let current = active;
        let min_distance = Math.abs(midpoints[current] - position);
        midpoints.forEach((midpoint, i) => {
          const distance = Math.abs(midpoint - position);
          if (distance < min_distance) {
            min_distance = distance;
            current = i;
          }
        });
        setActive(current);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [locked]);

  useEffect(() => {
    const top = active * 3;
    if (activeBlock && activeBlock.current) {
      activeBlock.current.style.transition = "top 0.2s ease";
      activeBlock.current.style.top = `${top}rem`;
    }
  }, [active]);

  function goTo(id: number) {
    const element = document.getElementById(sections[id]);
    if (element) {
      setLocked(true);
      setActive(id);

      const target = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: target, behavior: "smooth" });

      setTimeout(() => {
        setLocked(false);
      }, 700);
    };
  };

  function getTextStyles(id: number) {
    var style = "h-12 px-6 z-10 text-lg regular cursor-pointer flex flex-row items-center justify-center gap-4";
    if (id === active) {
      style += " text-gray-200 dark:text-gray-800"
    } else {
      style += " hover:text-gray-500 dark:hover:text-gray-500"
    }
    return style;
  };

  return (
    <nav className="w-64 flex flex-col items-start justify-center relative">
      <div
        ref={activeBlock}
        className="w-full h-12 absolute top-0 left-0 bg-gray-800 dark:bg-gray-200 rounded-full"
      />

      <div
        className={getTextStyles(0)}
        onClick={() => goTo(0)}
      >
        <div className="navigator-icon"><Briefcase /></div>
        <div>{capitalize(sections[0])}</div>
      </div>

      <div
        className={getTextStyles(1)}
        onClick={() => goTo(1)}
      >
        <div className="navigator-icon"><Code /></div>
        <div>{capitalize(sections[1])}</div>
      </div>

      <div
        className={getTextStyles(2)}
        onClick={() => goTo(2)}
      >
        <div className="navigator-icon"><Phone /></div>
        <div>{capitalize(sections[2])}</div>
      </div>
    </nav>
  );
};