import React, { useContext } from "react";
import uuid from "uuid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { LanguageContext } from "./LanguageContext";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import useLocalStorageState from "./Hooks/useLocalStorageState";

function TodoApp() {
  const words = {
    english: {
      header: "TODOS WITH HOOKS"
    },
    spanish: {
      header: "TODOS CON GANCHOS"
    }
  };
  const { language, changeLanguage } = useContext(LanguageContext);
  const initialTodos = [];
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

  const addTodo = newTodoText => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
  };

  const removeTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id != id);
    setTodos(updatedTodos);
  };

  const toggleTodo = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const updateTodo = (id, newTask) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };
  const { header } = words[language];
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100uv",
        backgroundColor: "white"
      }}
      elevation={0}
    >
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <AppBar color="primary" position="static" style={{ height: "64px" }}>
            <Toolbar>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {popupState => (
                  <React.Fragment>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                      Language
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={changeLanguage("english")}>
                        English
                      </MenuItem>
                      <MenuItem onClick={changeLanguage("spanish")}>
                        Spanish
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
              <Typography color="inherit">{header}</Typography>
            </Toolbar>
          </AppBar>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            remove={removeTodo}
            toggle={toggleTodo}
            edit={updateTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
export default TodoApp;
