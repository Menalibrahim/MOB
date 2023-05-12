import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, MyFooter, NavBar } from "./pages";
import { IphoneProduct, SamsungProduct } from "./components/products";
import TechnoProduct from "./components/products/TechnoP";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        { index: "index", element: <HomePage /> },
        { path: "product", element: <HomePage /> },
        { path: "checkout", element: <IphoneProduct /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
