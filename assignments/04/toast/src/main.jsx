import ReactDOM from "react-dom/client";
import "tailwindcss/tailwind.css";
import App from "./App.jsx";
import { ToastProvider } from "./contexts/toast.context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ToastProvider>
    <App />
  </ToastProvider>
);
