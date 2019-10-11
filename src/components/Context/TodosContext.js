import React, { createContext } from "react";
import useTodoState from "../Hooks/useTodoState";

const defaultTodos = [];
export const TodosContext = createContext();
export const FunctionContext = createContext();

export function TodosProvider(props) {
  const { todos, addTodo, removeTodo, editTodo, toggleTodo } = useTodoState(
    defaultTodos
  );

  return (
    <TodosContext.Provider value={{ todos }}>
      <FunctionContext.Provider
        value={{ addTodo, removeTodo, toggleTodo, editTodo }}
      >
        {props.children}
      </FunctionContext.Provider>
    </TodosContext.Provider>
  );
}
