import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
