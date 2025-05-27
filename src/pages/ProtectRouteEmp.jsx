import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthEmp } from "../context/AuthEmpContext";

const ProtectRouteEmp = ({ children }) => {
  const { loggedInEmployee } = useAuthEmp();

  if (!loggedInEmployee) {
    return <Navigate to="/login/emp" />;
  }

  return children;
};

export default ProtectRouteEmp;
