import React, { useState, createContext, useEffect } from "react";

export const LanguageContext = createContext();

//ckeck for language or set it to english
const lang = JSON.parse(window.localStorage.getItem("language")) || "english";

export function LanguageProvider(props) {
  const [language, setLanguage] = useState(lang);
  const changeLanguage = e => setLanguage(e.target.value);

  //update
  useEffect(() => {
    window.localStorage.setItem("language", JSON.stringify(language));
  });

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
