import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";
import App from "./views/App";
import ReloadPrompt from "./components/ReloadPrompt/ReloadPrompt"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ReloadPrompt/>
  </React.StrictMode>,
  document.getElementById("root")
);
