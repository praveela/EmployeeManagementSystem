import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Login from "./pages/Login";
import Register from "./pages/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
