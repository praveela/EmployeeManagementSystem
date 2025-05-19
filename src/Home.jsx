import React from 'react'
import styles from "./home.module.css"
import { FaUsers, FaBuilding, FaUserPlus, FaFileAlt } from "react-icons/fa";
import Login from './Login';

const Home = () => {
  return (
   <div id={styles.main}>
      
        <nav id={styles.nav}>
            <h1>EMS</h1>
            <div id={styles.navlink}>
                <a href="#">Login</a>
                <a href="#">Register</a>
            </div>
        </nav>

        <div id={styles.header}>
            <h1>Welcome to the Employee Management System</h1>
            <p>Manage Employee and track employee records efficiently</p>
            <button id={styles.get}>Get Started</button>
        </div>

        <section className={styles.features}>

         <div className={styles.card}>
            <div className="icon"><FaUsers size={30} /></div>
            <h3>Total Employees</h3>
            <p>View and manage all employees</p>
            </div>

            <div className={styles.card}>
             <div className="icon"><FaBuilding size={30} /></div>
            <h3>Departments</h3>
            <p>Organize employees by department</p>
            </div>

             <div className={styles.card}>
             <div className="icon"><FaUserPlus size={30} /></div>
            <h3>Add Employee</h3>
            <p>Add a new employee to the system</p>
            </div>

             <div className={styles.card}>
            <div className="icon"><FaFileAlt size={30} /></div>
            <h3>Employee Reports</h3>
            <p>Generate and view employee reports</p>
            </div>
        </section>

   </div>
  )
}

export default Home;