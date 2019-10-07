import React from "react";
// import "../style.css";
import TodoApp from "./TodoApp";
import { LanguageProvider } from "./LanguageContext";

export default function App() {
  return (
    <div>
      <LanguageProvider>
        <TodoApp />
      </LanguageProvider>
    </div>
  );
}
