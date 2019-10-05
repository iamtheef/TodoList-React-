import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./Hooks/useInputState";

function EditTodoForm({ editTodo, id, task, toggleEdit }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      style={{ marginLeft: "1rem", width: "100%" }}
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEdit();
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
export default EditTodoForm;
