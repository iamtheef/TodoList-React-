import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./Hooks/useInputState";
import { LanguageContext } from "./Context/LanguageContext";
import { FunctionContext } from "./Context/TodosContext";
// import { TodosContext } from "./Context/TodosContext";

function TodoForm() {
  //INITIALIZING HOOK
  const [value, handleChange, reset] = useInputState("");
  // importing context
  const { language } = useContext(LanguageContext);
  const { addTodo } = useContext(FunctionContext);

  //WORDS
  const words = {
    english: {
      label: "Add New Todo"
    },
    spanish: {
      label: "Añadir nuevo Todo"
    }
  };

  //grbbing the words
  const { label } = words[language];

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label={label}
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
