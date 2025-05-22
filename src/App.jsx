import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginEmp from "./pages/LoginEmp";
import Register from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Forgotpwd from "./pages/Forgotpwd";
import Employee from "./pages/Employee";
import Empregister from "./pages/Empregister";
import { EmployeeProvider } from "./context/EmployeeContext";
import EmployeeEdit from "./pages/EmployeeEdit";

const App = () => {
  return (
    <EmployeeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/admin" element={<Login />} />
          <Route path="/login/emp" element={<LoginEmp />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgot" element={<Forgotpwd />} />
          <Route path="/dashboard/employee" element={<Employee />} />
          <Route
            path="/dashboard/employee/register"
            element={<Empregister />}
          />
          <Route path="/dashboard/employee/edit/:id" element={<EmployeeEdit />} />
        </Routes>
      </BrowserRouter>
    </EmployeeProvider>
  );
};

export default App;
