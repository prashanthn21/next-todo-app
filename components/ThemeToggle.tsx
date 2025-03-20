"use client";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme} className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded">
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
