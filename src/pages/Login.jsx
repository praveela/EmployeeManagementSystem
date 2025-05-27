import React from "react";
import styles from "../css/login.module.css";
import style from "../css/registration.module.css";
import bg from "../assets/login.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validate = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    if (!email.trim()) {
      toast.error("Email shouldn't be empty!");
      return false;
    }
    if (!emailPattern.test(email)) {
      toast.error("Invalid Email Format");
      return false;
    }

    if (!password.trim()) {
      toast.error("Password is required");
      return false;
    }
    if (password.length < 8 || !pwdRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters and contain letters and numbers"
      );
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const success = login(email, password);
      if (success) {
        toast.success("Login Successful!");
        console.log(`${email} - ${password}`);
        navigate("/dashboard");
      } else {
        toast.error("Invalid Gmail or Password!");
      }
    } else {
      toast.error("Invalid Something Wrong!");
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
            <h1>Admin Login</h1>
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
            <Link to="/forgot" state={{ role: "admin" }}>Forgot password ?</Link>
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
      </div>
    </div>
  );
};

export default Login;
