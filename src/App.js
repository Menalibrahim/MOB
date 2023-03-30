import React from "react";
//import {NavBar, HomePage} from "./pages";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {HomePage, MyFooter} from "./pages";
import { IphoneProduct, SamsungProduct } from "./components/products";
//import IphoneProduct from "./components/products/iphone";

function App() {
  return(
  <BrowserRouter>
      <Routes>
       {/* <Route path="/" element={<NavBar/>}/> */} 
        <Route index element={<HomePage />}/>
        <Route path="iphone" element={<IphoneProduct/>}/>
        <Route path="samsung" element={<SamsungProduct/>}/>
        
      </Routes>
          </BrowserRouter>

       );
}

export default App;
