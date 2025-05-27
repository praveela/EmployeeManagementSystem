import React, { useState } from "react";
import { useLeaves } from "../context/LeaveContext";
import styles from "../css/leave.module.css";
import { useNavigate } from "react-router-dom";
import EmployeeSidebar from "./EmployeeSidebar";

const RequestLeave = () => {
  const { addLeaveRequest } = useLeaves();
  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    startDate: "",
    endDate: "",
    reason: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addLeaveRequest({ ...formData, status: "Pending" });
    navigate("/dashboard/leave");
  };

  return (
    <div className={styles.dashboard}>
        <EmployeeSidebar />
      <div className={styles.wrapper}>
        <h2>Request Leave</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Employee ID"
            value={formData.employeeId}
            onChange={(e) =>
              setFormData({ ...formData, employeeId: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) =>
              setFormData({ ...formData, startDate: e.target.value })
            }
            required
          />
          <input
            type="date"
            value={formData.endDate}
            onChange={(e) =>
              setFormData({ ...formData, endDate: e.target.value })
            }
            required
          />
          <textarea
            placeholder="Reason for Leave"
            value={formData.reason}
            onChange={(e) =>
              setFormData({ ...formData, reason: e.target.value })
            }
            required
          />
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default RequestLeave;
