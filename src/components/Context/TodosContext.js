import React, { createContext } from "react";
import useTodoState from "../Hooks/useTodoState";
export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosStuff = useTodoState();

  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
