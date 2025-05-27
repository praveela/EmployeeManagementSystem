import React, { useState } from "react";
import { useEmployees } from "../context/EmployeeContext";
import { useAttendance } from "../context/AttendanceContext";
import Sidebar from "./Sidebar";
import styles from "../css/empregister.module.css";

const Attendance = () => {
  const { employees } = useEmployees();
  const { attendance, markAttendance } = useAttendance();

  const [selectedDate, setSelectedDate] = useState(() =>
    new Date().toISOString().split("T")[0]
  );

  const today = new Date().toISOString().split("T")[0];

  const handleMark = (id, status) => {
    if (selectedDate > today) {
      alert("Cannot mark attendance for a future date.");
      return;
    }

    markAttendance(id, selectedDate, status);
  };

  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>Attendance</h2>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            max={today} // Disables future dates
          />
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Emp ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => {
              const status = attendance[selectedDate]?.[emp.id] || "Not Marked";
              return (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{status}</td>
                  <td id={styles.buttons}>
                    <button
                      className={styles.submitBtn}
                      onClick={() => handleMark(emp.id, "Present")}
                      disabled={status !== "Not Marked"}
                    >
                      Present
                    </button>
                    <button
                      className={styles.cancelBtn}
                      onClick={() => handleMark(emp.id, "Absent")}
                      disabled={status !== "Not Marked"}
                    >
                      Absent
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;