import { useEffect, useState } from "react";
import "@theme-toggles/react/css/Lightbulb.css"
import { Lightbulb } from "@theme-toggles/react";
import "../../styles/svg.css"

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
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
        <div className="w-16 h-16 flex items-center justify-center">
            <Lightbulb
                className="scale-[3.5] text-yellow-500"
                onToggle={() => setTheme(theme === "light" ? "dark" : "light")}
                toggled={theme === "dark"}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
            />
        </div>
    );
}

export default ThemeToggle;
