import React, { createContext } from "react";
import useTodoState from "../Hooks/useTodoState";

const defaultTodos = [];
export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodos);

  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
