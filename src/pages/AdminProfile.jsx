import React, { useContext, useState } from "react";
import styles from "../css/AdminProfile.module.css";
import { FaUser, FaEnvelope, FaPhone, FaEdit, FaSave } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import Sidebar from "./Sidebar";
import defaultAvatar from "../assets/users.png";

const AdminProfile = () => {
  const { loggedInAdmin, updateLoggedInAdmin } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...loggedInAdmin });
  const [profileImage, setProfileImage] = useState(defaultAvatar);

  if (!loggedInAdmin) return <p>Loading profile...</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleSave = () => {
    updateLoggedInAdmin(formData);
    setEditMode(false);
  };

  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.profileContainer}>
        <h2 className={styles.title}>Admin Profile</h2>
        <div className={styles.profileCard}>
          <div className={styles.imageSection}>
            <img
              src={profileImage}
              alt="Profile"
              className={styles.profileImage}
            />
            {editMode && (
              <div className={styles.imageEditContainer}>
                <label
                  htmlFor="profileImageUpload"
                  className={styles.editImageLabel}
                >
                  Change Image
                </label>
                <input
                  type="file"
                  id="profileImageUpload"
                  accept="image/*"
                  onChange={handleImageChange}
                  className={styles.fileInput}
                />
              </div>
            )}
          </div>

          <div className={styles.infoSection}>
            <ProfileField
              icon={<FaUser />}
              label="Admin ID"
              value={loggedInAdmin.id}
            />

            <ProfileField
              icon={<FaUser />}
              label="Name"
              value={formData.name}
              editMode={editMode}
              name="name"
              onChange={handleChange}
            />

            <ProfileField
              icon={<FaEnvelope />}
              label="Email"
              value={formData.email}
              editMode={editMode}
              name="email"
              onChange={handleChange}
            />

            <ProfileField
              icon={<FaPhone />}
              label="Phone"
              value={formData.phone}
              editMode={editMode}
              name="phone"
              onChange={handleChange}
            />

            <div className={styles.buttonContainer}>
              {editMode ? (
                <button className={styles.saveBtn} onClick={handleSave}>
                  <FaSave /> Save
                </button>
              ) : (
                <button
                  className={styles.editBtn}
                  onClick={() => setEditMode(true)}
                >
                  <FaEdit /> Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileField = ({
  icon,
  label,
  value,
  editMode,
  name,
  onChange,
  type = "text",
}) => {
  return (
    <div className={styles.profileItem}>
      <span className={styles.icon}>{icon}</span>
      <label className={styles.label}>{label}:</label>
      {editMode && name ? (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={styles.input}
        />
      ) : (
        <span className={styles.value}>{value}</span>
      )}
    </div>
  );
};

export default AdminProfile;
