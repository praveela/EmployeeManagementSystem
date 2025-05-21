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

const Dashboard = () => {
  const employees = [
    {
      id: "EMP1234",
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
  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <h1 className={styles.logo}>EMS</h1>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard" className={styles.link}>
                <FaHouse className={styles.icon} /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/employee" className={styles.link}>
                <FaUsers className={styles.icon} /> Employees
              </Link>
            </li>
            <li>
              <FaCalendarCheck className={styles.icon} /> Attendance
            </li>
            <li>
              <FaUmbrellaBeach className={styles.icon} /> Leave
            </li>
            <li>
              <FaMoneyCheckAlt className={styles.icon} /> Payroll
            </li>
            <li>
              <FaBuilding className={styles.icon} /> Departments
            </li>
          </ul>
        </nav>
      </aside>

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
            "Total Employee",
            "Present Employee",
            "Absent Employee",
            "Departments",
          ].map((item, index) => (
            <div key={index} className={styles.card}>
              <h3>{item}</h3>
              <h3>150</h3>
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
                      <span className={styles.status}>{emp.status}</span>
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
