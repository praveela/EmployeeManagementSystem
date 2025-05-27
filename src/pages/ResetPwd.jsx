import React, { useState } from "react";
import styles from "../css/reset.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPwd = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, role } = location.state || {};
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const backToHome = () => {
    navigate('/forgot');
  }

  const handleReset = (e) => {
    e.preventDefault();

    if (!password || !confirm) {
      toast.error("All fields are required");
      return;
    }

    if (password !== confirm) {
      toast.error("Passwords do not match");
      return;
    }

    if (role === "employee") {
      const employees = JSON.parse(localStorage.getItem("employees")) || [];
      const updated = employees.map(emp =>
        emp.email.toLowerCase() === email.toLowerCase()
          ? { ...emp, password }
          : emp
      );
      localStorage.setItem("employees", JSON.stringify(updated));
    } else if (role === "admin") {
      if (email === "admin@gmail.com") {
        const updatedAdmin = {
          id: "A001",
          name: "Admin User",
          email,
          phone: "9876543210",
          password,
        };
        localStorage.setItem("adminData", JSON.stringify(updatedAdmin));
      }
    }

    toast.success("Password successfully reset");
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleReset} className={styles.form}>
        <h2>Reset Password</h2>
        <p>for {email}</p>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button type="submit">Reset</button>
        <button onClick={backToHome}>Back</button>
      </form>
    </div>
  );
};

export default ResetPwd;