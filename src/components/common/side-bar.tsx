import { useEffect, useRef } from "react";
import data from "../../config.json";

export default function SideBar() {
  const sideBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      const parent = document.getElementById('desktop');
      const dimensions = parent?.getBoundingClientRect();

      if (sideBarRef && sideBarRef.current && dimensions) {
        sideBarRef.current.style.left = `${dimensions.left}px`;
      }
    };
    updatePosition();

    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <div ref={sideBarRef} className="fixed top-0 w-[500px] h-screen pr-20 pl-20 py-20 flex flex-col items-left justify-between">
      <div className="flex flex-col items-left justify-start">
        <div className="text-6xl bold">{data.general.name}</div>
        <div className="mb-2 text-3xl medium text-gray-500">{data.general.title}</div>
        <div className="text-lg">{data.general.description}</div>
      </div>
    </div>
  );
};