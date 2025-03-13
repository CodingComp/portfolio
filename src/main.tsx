import {HashRouter, Routes, Route} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Pages/HomePage.tsx";
import AnagramProject from "./Pages/AnagramProject.tsx";
import "./CSS/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <HashRouter>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/AnagramSolver" element={<AnagramProject />} />
          </Routes>
      </HashRouter>
  </React.StrictMode>
);
