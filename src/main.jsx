import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import ContextAuth from "./contexts/ContextAuth";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextAuth>
      <App />
      <Toaster position="top-center" />
    </ContextAuth>
  </React.StrictMode>
);
