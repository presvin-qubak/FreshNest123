import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import StoreContextProvider from "./context/StoreContext";
import { LanguageProvider } from "./context/LanguageContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import { NotificationProvider } from "./context/NotificationContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/FreshNest123">
    <LanguageProvider>
      <DarkModeProvider>
        <NotificationProvider>
          <StoreContextProvider>
            <App />

            <Toaster position="top-right" reverseOrder={false} />
          </StoreContextProvider>
        </NotificationProvider>
      </DarkModeProvider>
    </LanguageProvider>
  </BrowserRouter>
);