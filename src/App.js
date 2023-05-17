import React, { useContext, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, NavBar } from "./pages";

import Samsung from "./file/samsung";
import Iphone from "./file/iphone";
import Tecno from "./file/tecno";

import Products from "./pages/products";
import Checkout from "./pages/checkout";
import ProductDetail from "./pages/productDetail";
import { PhoneDataContext } from "./context/phoneData.context";
import Error from "./pages/error";

function App() {
  const phoneBrands = ["Samsung", "Apple", "Tecno"];
  const {
    samsung,
    setSamsung,
    iphone,
    setIphone,
    tecno,
    setTecno,
    allPhones,
    setAllPhones,
  } = useContext(PhoneDataContext);

  useEffect(() => {
    //samsung
    setSamsung(Samsung);
    //iphone
    setIphone(Iphone);
    //tecno
    setTecno(Tecno);

    //all phones
    setAllPhones([...Samsung, ...Iphone, ...Tecno]);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      errorElement: <Error />,
      children: [
        { index: "index", element: <HomePage /> },
        { path: "products", element: <Products /> },
        { path: "products/:productId", element: <ProductDetail /> },
        { path: "checkout", element: <Checkout /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
