import React from "react";
import Sidebar from "./Sidebar";
import { FaUser } from "react-icons/fa";
import styles from "../css/empregister.module.css";
import { useLeaves } from "../context/LeaveContext";

const Leave = () => {
  const { leaves, updateLeaveStatus } = useLeaves();
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>Leave Requests</h2>
          <div className={styles.profileInfo}>
            <span>
              <FaUser className={styles.user} />
            </span>
            <span className={styles.status}>● Active</span>
          </div>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr key={leave.id}>
                <td>{leave.employeeId}</td>
                <td>{leave.name}</td>
                <td>{leave.startDate}</td>
                <td>{leave.endDate}</td>
                <td>{leave.reason}</td>
                <td>{leave.status}</td>
                <td id={styles.buttons}>
                  <button className={styles.submitBtn}
                    onClick={() => updateLeaveStatus(leave.id, "Approved")}
                    disabled={leave.status !== "Pending"}
                  >
                    Approve
                  </button>
                  <button className={styles.cancelBtn}
                    onClick={() => updateLeaveStatus(leave.id, "Rejected")}
                    disabled={leave.status !== "Pending"}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leave;
