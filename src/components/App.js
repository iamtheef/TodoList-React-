import React from "react";
// import "../style.css";
import TodoApp from "./TodoApp";
import { LanguageProvider } from "./Context/LanguageContext";
import { ThemeProvider } from "./Context/ThemeContext";

export default function App() {
  return (
    <div>
      <ThemeProvider>
        <LanguageProvider>
          <TodoApp />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}
