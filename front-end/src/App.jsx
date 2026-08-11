import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";

import NoPage from "./component/NoPage";
import Header from "./header/Header";
import Login from "./page/home/Login";
import Home from "./page/home/Home";
import Register from "./page/home/Register";
import Product from "./page/product/Product";
import ProductDetails from "./page/product/ProductDetails";
import Cart from "./page/cart/Cart";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="app">
      <ToastContainer position="top-center" autoClose={3000} />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            
              <Home />
            
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
