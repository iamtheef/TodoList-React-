import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "./style.css";

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
