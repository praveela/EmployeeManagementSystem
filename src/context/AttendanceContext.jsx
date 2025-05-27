// context/AttendanceContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AttendanceContext = createContext();

export const AttendanceProvider = ({ children }) => {
  const [attendance, setAttendance] = useState(() => {
    const stored = localStorage.getItem("attendance");
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem("attendance", JSON.stringify(attendance));
  }, [attendance]);

  const markAttendance = (employeeId, date, status) => {
    setAttendance((prev) => ({
      ...prev,
      [date]: {
        ...prev[date],
        [employeeId]: status,
      },
    }));
  };

  return (
    <AttendanceContext.Provider value={{ attendance, markAttendance }}>
      {children}
    </AttendanceContext.Provider>
  );
};

export const useAttendance = () => useContext(AttendanceContext);