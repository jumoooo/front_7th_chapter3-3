import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
// @ts-expect-error - CSS 파일은 Vite가 처리
import "./index.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
