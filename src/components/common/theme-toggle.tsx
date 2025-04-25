import { useEffect, useState } from "react";
import "@theme-toggles/react/css/Within.css"
import { Within } from "@theme-toggles/react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Within
      className="scale-[3]"
      onToggle={() => setTheme(theme === "light" ? "dark" : "light")}
      toggled={theme === "dark"}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

export default ThemeToggle;
