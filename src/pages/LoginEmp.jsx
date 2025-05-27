import React from "react";
import styles from "../css/login.module.css";
import style from "../css/registration.module.css";
import bg from "../assets/official-logins.png";
import { toast } from "react-toastify";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthEmp } from "../context/AuthEmpContext";

const LoginEmp = () => {
  const navigate = useNavigate();
  const { login } = useAuthEmp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    const matchEmp = employees.find(
      (emp) =>
        emp.email.toLowerCase() === email.trim().toLowerCase() &&
        emp.password === password.trim()
    );

    if (matchEmp) {
      toast.success("Login Successfull!");
      login(matchEmp);
      navigate("/employee/profile");
    } else {
      toast.error("Login Unsuccessfull!");
    }
  };

  const backToHome = () => {
    navigate("/");
  };

  return (
    <div id={styles.main}>
      <div id={styles.logins}>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
          <div className={style.heading}>
            <span>Welcome Back</span>
            <h1>Employee Login</h1>
          </div>
          <div className={style.formGroup}>
            <label htmlFor="mail">Email ID</label>
            <input
              type="email"
              id="mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="pwd">Password</label>
            <input
              type="password"
              id="pwd"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div id={styles.forgot}>
            <Link to="/forgot" state={{ role: "employee" }}>Forgot password ?</Link>
          </div>
          <div id={styles.buttons}>
            <button id={styles.registerbtn} type="submit">
              Login
            </button>
            <button id={styles.registerbtn} type="button" onClick={backToHome}>
              Back To Home
            </button>
          </div>
        </form>
      </div>
      <div id={styles.left}>
        <img src={bg} alt="Login" />
        <button className={styles.btn}>
          <Link to="/registration">Didn't Have Account</Link>
        </button>
      </div>
    </div>
  );
};

export default LoginEmp;
