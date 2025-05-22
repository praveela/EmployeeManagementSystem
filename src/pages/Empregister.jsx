import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import styles from "../css/empregister.module.css";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEmployees } from "../context/EmployeeContext";

const Empregister = () => {
  const navigate = useNavigate();

  const { addEmployee } = useEmployees();

  const generateEmployeeId = () =>
    `EMP${Math.floor(1000 + Math.random() * 9000)}`;

  const initialFormState = {
    id: generateEmployeeId(),
    name: "",
    email: "",
    mobile: "",
    designation: "",
    status: "ACTIVE",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.id.trim()) newErrors.id = "Employee ID is required";
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Valid 10-digit mobile number is required";
    if (!formData.designation)
      newErrors.designation = "Designation is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      addEmployee(formData);
      setFormData({
        ...initialFormState,
        id: generateEmployeeId(), 
      });
      navigate("/dashboard/employee");
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <div className={styles.dashboard}>
      <Sidebar />

      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>Register Employee</h2>
          <div className={styles.profileInfo}>
            <span>
              <FaUser className={styles.user} />
            </span>
            <span className={styles.status}>● Active</span>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Employee ID</label>
            <input
              type="text"
              value={formData.id}
              readOnly
              onChange={(e) => setFormData({ ...formData, id: e.target.value })}
            />
            {errors.id && <p className={styles.error}>{errors.id}</p>}
          </div>

          <div className={styles.inputGroup}>
            <label>Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>

          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>

          <div className={styles.inputGroup}>
            <label>Mobile Number</label>
            <input
              type="tel"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
            />
            {errors.mobile && <p className={styles.error}>{errors.mobile}</p>}
          </div>

          <div className={styles.inputGroup}>
            <label>Designation</label>
            <select
              value={formData.designation}
              onChange={(e) =>
                setFormData({ ...formData, designation: e.target.value })
              }
            >
              <option selected>Designation</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Business Analyst">Business Analyst</option>
              <option value="Project Manager">Project Manager</option>
            </select>
            {errors.designation && (
              <p className={styles.error}>{errors.designation}</p>
            )}
          </div>

          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.submitBtn}>
              Add Employee
            </button>
            <Link to="/dashboard/employee">
              <button type="button" className={styles.cancelBtn}>
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Empregister;