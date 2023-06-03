import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app"
import { BudgetsProvider } from "./contexts/BudgetsContext"

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BudgetsProvider>
      <App />
    </BudgetsProvider>
  </React.StrictMode>,
)