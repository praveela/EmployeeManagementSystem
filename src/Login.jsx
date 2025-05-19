import React from 'react';
import styles from "./login.module.css";
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        let valid = true;
        const newErrors = {};

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } 
    else if (!emailPattern.test(email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } 
    else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login successful!");
      // You can also do API call here
    }
    // else{
    //   alert("Login unsuccessful");
    // }
  };

  return (
    <div className={styles.body}>
    <div className={styles.main}>
      <h1>Employee Management System</h1>
      <h2>Login</h2>

      <form onSubmit={handleSubmit} className={styles.form}>

        <div className={styles.group}>
          <label>Email Address</label>
          <input type="text" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className={styles.group}>
          <label>Password</label>
          <input type="password"  className={styles.input}  value={password}  onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>

        <button type="submit" className={styles.submitbtn}> Sign In </button>

        <p className={styles.registerlink}> Don’t have an account? <a href="#"> Register </a> </p>
        
      </form>
    </div>
    </div>
  )
}

export default Login