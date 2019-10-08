import React, { createContext } from "react";
import useToggle from "../Hooks/useToggleState";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDark, setTheme] = useToggle();

  return (
    <ThemeContext.Provider value={{ isDark, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
