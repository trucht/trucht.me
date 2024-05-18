import { useState } from "react";
import IconSun from "../../../public/icon-sun.svg";
import IconMoon from "../../../public/icon-moon.svg";
import Image from "next/image";

function DarkModeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    setDarkMode();
  };

  const setDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div
      className={`dark:bg-gray-900 ${
        isDarkMode ? "dark:text-white" : "text-black"
      }`}
    >
      <button
        onClick={toggleDarkMode}
        className="inline-block bg-[#6BB67F] dark:bg-[#1A3F55] dark:rounded-md text-white px-4 py-2"
      >
        {isDarkMode ? <IconSun /> : <IconMoon />}
      </button>
    </div>
  );
}

export default DarkModeToggler;
