import React, { createContext, useEffect } from "react";
import useToggle from "../Hooks/useToggleState";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  //checking for stored theme
  const initialTheme = JSON.parse(window.localStorage.getItem("theme"));

  //recall || initializing theme
  const [isDark, setTheme] = useToggle(initialTheme);
  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(isDark));
  });
  return (
    <ThemeContext.Provider value={{ isDark, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
