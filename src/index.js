import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

const people = ["A", "B", "C"];
ReactDOM.render(
  <React.StrictMode>
    <App name="Galax" />
  </React.StrictMode>,
  document.getElementById("root")
);
