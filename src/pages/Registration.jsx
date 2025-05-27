import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/bg.png";
import styles from "../css/registration.module.css";
import { toast } from "react-toastify";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    mail: "",
    pwd: "",
    cpwd: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.fname.trim()) {
      tempErrors.fname = "First Name is Required!";
      toast.error(tempErrors.fname);
    }
    if (!formData.lname.trim()) {
      tempErrors.lname = "Last Name is Required!";
      toast.error(tempErrors.lname);
    }

    if (!formData.mail.trim()) {
      tempErrors.mail = "Email is Required!";
      toast.error(tempErrors.mail);
    } else if (!mailRegex.test(formData.mail)) {
      tempErrors.mail = "Invalid Email Format";
      toast.error(tempErrors.mail);
    }

    if (!formData.pwd) {
      tempErrors.pwd = "Password is Required!";
      toast.error(tempErrors.pwd);
    } else if (!pwdRegex.test(formData.pwd)) {
      tempErrors.pwd = "Password must be in formate";
      toast.error(tempErrors.pwd);
    }

    if (!formData.cpwd) {
      tempErrors.cpwd = "Confirm Your Password";
      toast.error(tempErrors.cpwd);
    } else if (formData.cpwd !== formData.pwd) {
      tempErrors.cpwd = "Passwords do not match!";
      toast.error(tempErrors.cpwd);
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      const existingEmp = JSON.parse(localStorage.getItem("employees")) || [];
      const matchedEmpIndx = existingEmp.findIndex((emp) => {
        const fullName = `${formData.fname} ${formData.lname}`.toLowerCase();
        return (
          emp.name.toLowerCase() === fullName &&
          emp.email.toLowerCase() === formData.mail.toLowerCase()
        );
      });

      if (matchedEmpIndx === -1) {
        toast.error("You are not an authorized employee.");
        return;
      }

      const matchedEmp = existingEmp[matchedEmpIndx];
      if (matchedEmp.password) {
        toast.error("You are already Registered.");
        return;
      }

      const updatedEmp = {
        ...matchedEmp,
        password: formData.pwd,
      };

      existingEmp[matchedEmpIndx] = updatedEmp;

      localStorage.setItem("employees", JSON.stringify(existingEmp));
      toast.success("Registered Successfully!");
      navigate("/");
    } else {
      toast.error("Registeration Failed, Please Try again Later");
    }
  };

  const backToHome = () => {
    const tempErrors = {};
    setErrors(tempErrors);
    navigate("/");
  };

  return (
    <div id={styles.register}>
      <div className={styles.info}>
        <img src={bg} alt="Register" />
        <button id={styles.btn}>
          <Link to="/login/emp">Have An Account?</Link>
        </button>
      </div>
      <div className={styles.header}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.heading}>
            <span>Welcome To</span>
            <h1>REGISTER FORM</h1>
          </div>
          <div className={styles.gridContainer}>
            <div className={styles.formGroup}>
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                value={formData.fname}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                value={formData.lname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="mail">Email ID</label>
            <input
              type="email"
              id="mail"
              value={formData.mail}
              onChange={handleChange}
            />
          </div>

          <div className={styles.gridContainer}>
            <div className={styles.formGroup}>
              <label htmlFor="pwd">Password</label>
              <input
                type="password"
                id="pwd"
                value={formData.pwd}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="cpwd">Confirm Password</label>
              <input
                type="password"
                id="cpwd"
                value={formData.cpwd}
                onChange={handleChange}
              />
            </div>
          </div>

          <div id={styles.buttons}>
            <button id={styles.registerbtn} type="submit">
              Register
            </button>
            <button id={styles.registerbtn} type="button" onClick={backToHome}>
              Back To Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
