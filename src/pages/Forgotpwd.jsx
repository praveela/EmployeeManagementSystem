import React, { useState } from "react";
import styles from "../css/forgot.module.css";
import image from "../assets/forgotpwd.png";
import lock from "../assets/lockicon.png";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Forgotpwd = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role || "employee"; // default to employee

  const validateEmail = (mail) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Invalid email format");
      return;
    }

    let found = false;

    if (role === "employee") {
      const employees = JSON.parse(localStorage.getItem("employees")) || [];
      found = employees.some((emp) => emp.email.toLowerCase() === email.toLowerCase());
    } else if (role === "admin") {
      found = email.toLowerCase() === "admin@gmail.com"; // only one hardcoded admin
    }

    if (found) {
      toast.success("Email verified. Redirecting to reset page...");
      setTimeout(() => {
        navigate("/reset-password", { state: { email, role } });
      }, 1500); // Delay to allow user to see the toast
    } else {
      toast.error("Email not found!");
    }
  };

  return (
    <div id={styles.main}>
      <div className={styles.left}>
        <div className={styles.titles}>
          <img src={lock} alt="Password" />
          <h2>Reset Password</h2>
          <p>Enter your email address to reset your password</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Email ID</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button id={styles.registerbtn} type="submit">Next</button>
        </form>
      </div>
      <div className={styles.right}>
        <img src={image} alt="Forgot Password" />
      </div>
    </div>
  );
};

export default Forgotpwd;