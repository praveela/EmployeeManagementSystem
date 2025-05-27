import React, { createContext, useContext, useEffect, useState } from "react";

const LeaveContext = createContext();

const initialLeaves = [
  {
    id: 1,
    employeeId: "EMP12354",
    name: "Harsha",
    startDate: "2025-05-10",
    endDate: "2025-05-12",
    reason: "Medical leave",
    status: "Pending",
  },
];

export const LeaveProvider = ({ children }) => {
  const [leaves, setLeaves] = useState(() => {
    const stored = localStorage.getItem("leaveRequests");
    return stored ? JSON.parse(stored) : initialLeaves;
  });

  useEffect(() => {
    localStorage.setItem("leaveRequests", JSON.stringify(leaves));
  }, [leaves]);

  const addLeaveRequest = (request) => {
    setLeaves((prev) => [...prev, { ...request, id: Date.now() }]);
  };

  const updateLeaveStatus = (id, status) => {
    setLeaves((prev) =>
      prev.map((leave) => (leave.id === id ? { ...leave, status } : leave))
    );
  };

  return (
    <LeaveContext.Provider value={{ leaves, addLeaveRequest, updateLeaveStatus }}>
      {children}
    </LeaveContext.Provider>
  );
};

export const useLeaves = () => useContext(LeaveContext);
