import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/dashboard.module.css";
import {
  FaUser,
  FaCalendarCheck,
  FaUmbrellaBeach,
  FaMoneyCheckAlt,
  FaBuilding,
  FaUsers,
} from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import { useEmployees } from "../context/EmployeeContext";

const Dashboard = () => {
  const { employees, stats } = useEmployees();
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h2>Dashboard</h2>
          <input
            type="text"
            placeholder="Search for Employee..."
            className={styles.searchBar}
          />

          <div className={styles.profileInfo}>
            <span>
              <FaUser className={styles.user} />
            </span>
            <span className={styles.status}>● Active</span>
          </div>
        </header>

        <section className={styles.welcomeBanner}>
          <h2>Welcome Back, Admin</h2>
          <p>You have pending Approvals & Leave Requests</p>
        </section>

        <section className={styles.grid}>
          {[
            { label: "Total Employees", value: stats.total },
            { label: "Active Employees", value: stats.active },
            { label: "Inactive Employees", value: stats.inactive },
            { label: "New Joiners", value: stats.newJoiners },
          ].map((item, index) => (
            <div key={index} className={styles.card}>
              <h3>{item.label}</h3>
              <h3>{item.value}</h3>
            </div>
          ))}
        </section>

        <section className={styles.chartSection}>
          <h3>Recently Active Employees</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Emp ID</th>
                  <th>Name</th>
                  <th>Email ID</th>
                  <th>Mobile</th>
                  <th>Designation</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.mobile}</td>
                    <td>{emp.designation}</td>
                    <td>
                      <span
                        className={`${styles.status} ${
                          emp.status.toLowerCase() === "active"
                            ? styles.active
                            : styles.inactive
                        }`}
                      >
                        {emp.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
