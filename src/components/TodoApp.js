import React, { useContext } from "react";
import Switch from "@material-ui/core/Switch";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { LanguageContext } from "./Context/LanguageContext";
import { TodosProvider } from "./Context/TodosContext";
import { ThemeContext } from "./Context/ThemeContext";

function TodoApp() {
  // LANGUAGE WORDS
  const words = {
    english: {
      header: "TODOS WITH HOOKS"
    },
    spanish: {
      header: "TODOS CON GANCHOS"
    }
  };

  //INITIALIZING HOOKS
  const { isDark, setTheme } = useContext(ThemeContext);
  const { language, changeLanguage } = useContext(LanguageContext);
  const { header } = words[language];
  const styles = {
    background: {
      backgroundColor: isDark ? "black" : "white",
      padding: 0,
      margin: 0,
      height: "100vh"
    },
    bar: {
      backgroundColor: isDark ? "grey" : "primary",
      height: "64px",
      width: "100vw"
    }
  };

  return (
    <Paper style={styles.background} elevation={0}>
      <Grid container justify="center">
        <AppBar position="static" style={styles.bar}>
          <Toolbar style={{ justifyContent: "space-between" }}>
            <Typography color="inherit">{header}</Typography>
            <div>
              <Switch onChange={setTheme} />

              <Select
                value={language}
                onChange={changeLanguage}
                style={{ color: "white" }}
              >
                <MenuItem value="english">English</MenuItem>
                <MenuItem value="spanish">Spanish</MenuItem>
              </Select>
            </div>
          </Toolbar>
        </AppBar>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default TodoApp;
