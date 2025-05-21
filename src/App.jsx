import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Login from "./pages/Login";
import LoginEmp from "./pages/LoginEmp";
import Register from "./pages/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Forgotpwd from "./pages/Forgotpwd";
import Employee from "./pages/Employee";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/admin" element={<Login />} />
        <Route path="/login/emp" element={<LoginEmp />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot" element={<Forgotpwd />} />
        <Route path="/dashboard/employee" element={<Employee />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
