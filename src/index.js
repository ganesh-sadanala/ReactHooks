import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const TreesContext = createContext();

const trees = [
  { id: "1", type: "Maple" },
  { id: "2", type: "Apple" },
  { id: "3", type: "Baple" },
  { id: "4", type: "Caple" },
];

export const useTrees = () => useContext(TreesContext);
ReactDOM.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>,
  document.getElementById("root")
);
