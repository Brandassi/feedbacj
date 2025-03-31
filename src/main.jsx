import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/index.css"; // Importando o Tailwind ou outras estilizações globais

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
