import React, { useState } from "react";
import styles from "../css/forgot.module.css";
import image from "../assets/forgotpwd.png";
import lock from "../assets/lockicon.png";

const Forgotpwd = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [pass, setPass] = useState("");

    const validateEmail = (mail) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setPass(mail);
        return pattern.test(mail);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!email) {
            setError("Email is Required");
            setPass("");
        } else if(!validateEmail(email)) {
            setError('Please enter a valid Email address');
            setPass("");
        } else {
            setError("");
        }
    };

  return (
    <div id={styles.main}>
      <div className={styles.left}>
        <div className={styles.titles}>
          <img src={lock} alt="Password" />
          <h2>Reset Password</h2>
          <p>Enter your email address to reset your password</p>
          {pass && <p>Password reset link sent to {pass}</p>}
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="user">Email ID</label>
            <input type="email" id="user" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
            {error && <span className={styles.error}>{error}</span>}
          </div>
          <button id={styles.registerbtn} type="submit">
            Reset Password
          </button>
        </form>
      </div>
      <div className={styles.right}>
        <img src={image} alt="Forgot Password" />
      </div>
    </div>
  );
};

export default Forgotpwd;
