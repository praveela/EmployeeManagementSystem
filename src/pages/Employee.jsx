import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/employee.module.css";
import Sidebar from "./Sidebar";
import {
  FaUser,
  FaCalendarCheck,
  FaUmbrellaBeach,
  FaMoneyCheckAlt,
  FaBuilding,
  FaUsers,
  FaUserPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
// import { FaHouse } from "react-icons/fa6";
import { useEmployees } from "../context/EmployeeContext";

const Employee = () => {
  const { employees, stats, deleteEmployee } = useEmployees();
  const handleDelete = (id) => {
    deleteEmployee(id);
  }
  return (
    <div className={styles.dashboard}>
      <Sidebar />

      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>Employee</h2>
          <div className={styles.profileInfo}>
            <span>
              <FaUser className={styles.user} />
            </span>
            <span className={styles.status}>● Active</span>
          </div>
        </div>

        <div className={styles.head2}>
          <input
            type="text"
            placeholder="Search for Employee..."
            className={styles.searchBar}
          />
          <div className={styles.controls}>
            {/* <button className={styles.exportBtn}>Export</button> */}
            <Link to="/dashboard/employee/register">
              <button className={styles.addBtn}>
                <FaUserPlus /> Add Employee
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.card}>
            Total Employees <span>{stats.total}</span>
          </div>
          <div className={styles.card}>
            Active <span>{stats.active}</span>
          </div>
          <div className={styles.card}>
            Inactive <span>{stats.inactive}</span>
          </div>
          <div className={styles.card}>
            New Joiners <span>{stats.newJoiners}</span>
          </div>
        </div>

        <div className={styles.filters}>
          <div>
            <h3>Employee List</h3>
          </div>
          <div>
            <input type="date" />
            <select>
              <option disabled selected>
                Designation
              </option>
              <option>Full Stack Developer</option>
              <option>UI/UX Developer</option>
              <option>FrontEnd Developer</option>
              <option>BackEnd Developer</option>
              <option>Business Analyst</option>
              <option>Project Manager</option>
            </select>

            <select>
              <option disabled selected>
                Status
              </option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

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
                <th>Actions</th>
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
                  <td id={styles.td}>
                    <Link to={`/dashboard/employee/edit/${emp.id}`}><FaEdit className={styles.icon} size={30}/> </Link>
                    <button onClick={() => handleDelete(emp.id)} className={styles.del}>
                      <FaTrash className={styles.icon} size={30}/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employee;
