import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, NavBar } from "./pages";

import Products from "./pages/products";
import Checkout from "./pages/checkout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        { index: "index", element: <HomePage /> },
        { path: "products", element: <Products /> },
        { path: "products/:productId", element: <Products /> },
        { path: "checkout", element: <Checkout /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
