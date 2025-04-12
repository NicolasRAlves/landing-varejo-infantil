import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Captura } from "./screens/Captura";


createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Captura />
  </StrictMode>,
);
