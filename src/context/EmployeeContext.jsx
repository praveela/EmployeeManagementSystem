import React, { createContext, useContext, useState, useEffect } from "react";

const EmployeeContext = createContext();

const initialEmployees = [
  {
    id: "EMP12354",
    name: "Harsha", 
    email: "Harsha@example.com",
    mobile: "9856743218",
    designation: "Full Stack Developer",
    status: "ACTIVE",
  },
  {
    id: "EMP78619",
    name: "Raji",
    email: "raji@gmail.com",
    mobile: "9856743218",
    designation: "UI/UX Designer",
    status: "ACTIVE",
  },
  {
    id: "EMP34513",
    name: "Priyanshi",
    email: "priya@example.com",
    mobile: "9856743218",
    designation: "UI/UX Designer",
    status: "ACTIVE",
  },
  {
    id: "EMP23112",
    name: "Haaniya",
    email: "Haniya@example.com",
    mobile: "9856743218",
    designation: "Backend Developer",
    status: "ACTIVE",
  },
  {
    id: "EMP23418",
    name: "Maliha",
    email: "Maliha2373@gmail.com",
    mobile: "9856743218",
    designation: "Backend Developer",
    status: "ACTIVE",
  },
];

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");
    return savedEmployees ? JSON.parse(savedEmployees) : initialEmployees;
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  const deleteEmployee = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  const stats = {
    total: employees.length,
    active: employees.filter((event) => event.status === "ACTIVE").length,
    inactive: employees.filter((event) => event.status === "INACTIVE").length,
    newJoiners: employees.length > 5 ? employees.length - 5 : 0,
  };

  const editEmployee = (updatedEmployee) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp))
    );
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, editEmployee, deleteEmployee, stats }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees = () => useContext(EmployeeContext);
