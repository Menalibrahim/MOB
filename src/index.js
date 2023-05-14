import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";
import { PhoneDataProvider } from "./context/phoneData.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PhoneDataProvider>
      <App />
    </PhoneDataProvider>
  </React.StrictMode>
);
