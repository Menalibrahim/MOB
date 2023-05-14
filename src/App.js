import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, NavBar } from "./pages";
import { IphoneProduct } from "./components/products";
import Products from "./pages/products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        { index: "index", element: <HomePage /> },
        { path: "products", element: <Products /> },
        { path: "checkout", element: <IphoneProduct /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
