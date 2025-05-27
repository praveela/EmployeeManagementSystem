// src/components/Sidebar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/dashboard.module.css";
import {
  FaCalendarCheck,
  FaUmbrellaBeach,
  FaBuilding,
  FaSignOutAlt,
  FaUsers,
  FaUserCircle,
} from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logout Successfully");
    navigate("/login/admin");
  };
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
            <Link to="/dashboard/attendance" className={styles.link}>
              <FaCalendarCheck className={styles.icon} /> Attendance
            </Link>
          </li>
          <li>
            <Link to="/dashboard/department" className={styles.link}>
              <FaBuilding className={styles.icon} /> Departments
            </Link>
          </li>
          <li>
            <Link to="/dashboard/leave" className={styles.link}>
              <FaUmbrellaBeach className={styles.icon} /> Leave{" "}
            </Link>
          </li>
          <li>
            <Link to="/dashboard/adminProfile" className={styles.link}>
              <FaUserCircle className={styles.icon} /> Profile{" "}
            </Link>
          </li>
          <li onClick={handleLogout}>
            <FaSignOutAlt className={styles.icon} /> Signout
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
