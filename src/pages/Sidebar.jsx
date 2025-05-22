// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/dashboard.module.css";
import {
  FaCalendarCheck,
  FaUmbrellaBeach,
  FaMoneyCheckAlt,
  FaBuilding,
  FaUsers,
  FaUser,
} from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const Sidebar = () => {
  return (
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
            <Link to="/dashboard/department" className={styles.link}>
              <FaBuilding className={styles.icon} /> Departments
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
