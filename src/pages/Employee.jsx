import React from 'react';
import { Link } from 'react-router-dom';
import style from '../css/dashboard.module.css';
import styles from '../css/employee.module.css';
import {
  FaUser, FaCalendarCheck, FaUmbrellaBeach, FaMoneyCheckAlt, FaBuilding, FaUsers,
  FaUserPlus, FaEdit, FaTrash
} from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';

const Employee = () => {
  const employees = [
    { id: 'EMP1234', name: 'Harsha', email: 'Harsha@example.com', mobile: '9856743218', designation: 'Full Stack Developer', status: 'ACTIVE' },
    { id: 'EMP78619', name: 'Raji', email: 'raji@gmail.com', mobile: '9856743218', designation: 'UI/UX Designer', status: 'ACTIVE' },
    { id: 'EMP34513', name: 'Priyanshi', email: 'priya@example.com', mobile: '9856743218', designation: 'UI/UX Designer', status: 'ACTIVE' },
    { id: 'EMP23112', name: 'Haaniya', email: 'Haniya@example.com', mobile: '9856743218', designation: 'Backend Developer', status: 'ACTIVE' },
    { id: 'EMP23418', name: 'Maliha', email: 'Maliha2373@gmail.com', mobile: '9856743218', designation: 'Backend Developer', status: 'ACTIVE' }
  ];

  return (
    <div className={styles.dashboard}>
      <aside className={style.sidebar}>
        <h1 className={style.logo}>EMS</h1>
        <nav>
          <ul>
            <li><Link to="/dashboard" className={style.link}><FaHouse className={style.icon} /> Dashboard</Link></li>
            <li><Link to="/dashboard/employee" className={style.link}><FaUsers className={style.icon} /> Employees</Link></li>
            <li><FaCalendarCheck className={style.icon} /> Attendance</li>
            <li><FaUmbrellaBeach className={style.icon} /> Leave</li>
            <li><FaMoneyCheckAlt className={style.icon} /> Payroll</li>
            <li><FaBuilding className={style.icon} /> Departments</li>
          </ul>
        </nav>
      </aside>

      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>Employee</h2>
          <div className={styles.profileInfo}>
            <span><FaUser className={styles.user} /></span>
            <span className={styles.status}>● Active</span>
          </div>
        </div>

        <div className={styles.head2}>
          <input type="text" placeholder="Search for Employee..." className={styles.searchBar} />
          <div className={styles.controls}>
            <button className={styles.exportBtn}>Export</button>
            <Link><button className={styles.addBtn}><FaUserPlus /> Add Employee</button></Link>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.card}>Total Employees <span>9</span></div>
          <div className={styles.card}>Active <span>6</span></div>
          <div className={styles.card}>Inactive <span>0</span></div>
          <div className={styles.card}>New Joiners <span>33</span></div>
        </div>

        <div className={styles.filters}>
          <div>
            <h3>Employee List</h3>
          </div>
          <div>
            <input type="date" />
            <select>
             <option disabled selected>Designation</option>
             <option>Full Stack Developer</option>
             <option>UI/UX Developer</option>
             <option>FrontEnd Developer</option>
             <option>BackEnd Developer</option>
             <option>Business Analyst</option>
             <option>Project Manager</option>
            </select>

            <select>
             <option disabled selected>Select Status</option>
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
              {employees.map(emp => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.mobile}</td>
                  <td>{emp.designation}</td>
                  <td><span className={styles.status}>{emp.status}</span></td>
                  <td>
                    <FaEdit className={styles.icon} />
                    <FaTrash className={styles.icon} />
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