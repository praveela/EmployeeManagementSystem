import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const defaultAdmin = {
  id: "A001",
  name: "Admin User",
  email: "admin@gmail.com",
  phone: "9876543210",
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("isAuthenticated")
  );

  const [loggedInAdmin, setLoggedInAdmin] = useState(() => {
    const storedAdmin = localStorage.getItem("adminData");
    return storedAdmin ? JSON.parse(storedAdmin) : defaultAdmin;
  });

  const login = (mail, password) => {
    if (mail === "admin@gmail.com" && password === "Admin@123") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("adminData", JSON.stringify(defaultAdmin));
      setLoggedInAdmin(defaultAdmin);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("adminData");
    setLoggedInAdmin(null);
  };

  const updateLoggedInAdmin = (updatedAdmin) => {
    setLoggedInAdmin(updatedAdmin);
    localStorage.setItem("adminData", JSON.stringify(updatedAdmin));
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        loggedInAdmin,
        updateLoggedInAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);