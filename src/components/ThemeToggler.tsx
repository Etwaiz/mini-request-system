import React from "react";
import { useApp } from "../context/useApp";

export const ThemeToggler: React.FC = () => {
  const { theme, changeTheme } = useApp();

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    changeTheme(nextTheme);
  };

  return (
    <button onClick={toggleTheme} className="theme-toggler-btn">
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};