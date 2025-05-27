import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/dashboard.module.css";
import { FaUmbrellaBeach, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useAuthEmp } from "../context/AuthEmpContext";
import { toast } from "react-toastify";

const EmployeeSidebar = () => {
  const { logout } = useAuthEmp();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/login/emp");
  };

  return (
    <aside className={styles.sidebar}>
      <h1 className={styles.logo}>EMS</h1>
      <nav>
        <ul>
          <li>
            <Link to="/employee/profile" className={styles.link}>
              <FaUserCircle className={styles.icon} /> Employee Profile
            </Link>
          </li>
          <li>
            <Link to="/employee/leaveRequest" className={styles.link}>
              <FaUmbrellaBeach className={styles.icon} /> Leave Request
            </Link>
          </li>
          <li onClick={handleLogout} className={styles.link}>
            <FaSignOutAlt className={styles.icon} /> Signout
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default EmployeeSidebar;