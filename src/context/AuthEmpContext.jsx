import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthEmpContext = createContext();

export const AuthEmpProvider = ({ children }) => {
  const [loggedInEmployee, setLoggedInEmployee] = useState(() => {
    const stored = localStorage.getItem("loggedInEmployee");
    return stored ? JSON.parse(stored) : null;
  });

  const updateLoggedInEmployee = (updatedData) => {
    setLoggedInEmployee(updatedData);
    localStorage.setItem("loggedInEmployee", JSON.stringify(updatedData));
  };

  const login = (employee) => {
    localStorage.setItem("loggedInEmployee", JSON.stringify(employee));
    setLoggedInEmployee(employee);
  };

  const logout = () => {
    localStorage.removeItem("loggedInEmployee");
    setLoggedInEmployee(null);
  };

  return (
    <AuthEmpContext.Provider value={{ loggedInEmployee, login, logout, updateLoggedInEmployee }}>
      {children}
    </AuthEmpContext.Provider>
  );
};

export const useAuthEmp = () => useContext(AuthEmpContext);
