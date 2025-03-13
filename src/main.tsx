import {HashRouter} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Pages/HomePage.tsx";
import "./CSS/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
        <HomePage />
    </HashRouter>
  </React.StrictMode>
);
