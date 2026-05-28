import React from "react";
import { useApp } from "../context/useApp";
import { dictionary } from "../locales.ts";

export const LanguageToggler: React.FC = () => {
  const { language, changeLanguage } = useApp();

  const handleToggle = () => {
    const nextLanguage = language === "ua" ? "en" : "ua";
    changeLanguage(nextLanguage);
  };

  return (
    <button 
      onClick={handleToggle}
    >
     {language}
    </button>
  );
};