import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import NoPage from "./component/NoPage";
import Header from "./header/Header";
import Protected from "./component/Protected";
import Login from "./page/home/Login";
import Home from "./page/home/Home";
import Register from "./page/home/Register";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Home/>
            </Protected>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NoPage />}></Route>

      </Routes>
    </div>
  );
}

export default App;
