import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";
import { PhoneDataProvider } from "./context/phoneData.context";
import { CartProvider } from "react-use-cart";
import { CartHolderProvider } from "./context/cartHolder.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartHolderProvider>
      <CartProvider>
        <PhoneDataProvider>
          <App />
        </PhoneDataProvider>
      </CartProvider>
    </CartHolderProvider>
  </React.StrictMode>
);
