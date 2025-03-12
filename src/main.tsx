import {Route, HashRouter} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Pages/HomePage.tsx";
import AnagramProject from "./Pages/AnagramProject.tsx";
import "./CSS/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter basename='/'>
        <Route path="/" element={<HomePage />} />
        <Route path="/AnagramSolver" element={<AnagramProject />} />
    </HashRouter>
  </React.StrictMode>
);
