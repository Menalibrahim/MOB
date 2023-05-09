import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {HomePage, MyFooter} from "./pages";
import { IphoneProduct, SamsungProduct } from "./components/products";
import TechnoProduct from "./components/products/TechnoP";


function App() {
  return(
  <BrowserRouter>
      <Routes>
       {/* <Route path="/" element={<NavBar/>}/> */} 
        <Route index element={<HomePage />}/>
        <Route path="iphone" element={<IphoneProduct/>}/>
        <Route path="samsung" element={<SamsungProduct/>}/>
        <Route path="techno" element={<TechnoProduct/>}/>
      </Routes>
          </BrowserRouter>
       );
}

export default App;
