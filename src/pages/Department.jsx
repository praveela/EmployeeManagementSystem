import React, { useState, useEffect } from "react";
import styles from "../css/department.module.css";
import {
  FaUserPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import Sidebar from "./Sidebar";

const Department = () => {
  const initialDepartment = [
    { id: "DEP001", name: "Engineering" },
    { id: "DEP002", name: "UI/UX Design" },
    { id: "DEP003", name: "Human Resources" },
    { id: "DEP004", name: "Customer Support" },
    { id: "DEP005", name: "Quality Assurance" },
  ];

  const [departments, setDepartments] = useState(() => {
    const stored = localStorage.getItem("departments");
    return stored ? JSON.parse(stored) : initialDepartment;
  });

  // Write to localStorage when departments change
  useEffect(() => {
    localStorage.setItem("departments", JSON.stringify(departments));
  }, [departments]);

  const [showModal, setShowModal] = useState(false);
  const [newDeptName, setNewDeptName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [currentDeptId, setCurrentDeptId] = useState(null);

  const handleAddDepartment = () => {
    setShowModal(true);
    setEditMode(false);
    setNewDeptName("");
  };

  const handleEdit = (dept) => {
    setShowModal(true);
    setEditMode(true);
    setNewDeptName(dept.name);
    setCurrentDeptId(dept.id);
  };

  const closeModal = () => {
    setShowModal(false);
    setNewDeptName("");
    setEditMode(false);
    setCurrentDeptId(null);
  };

  const saveModal = () => {
    if (newDeptName.trim() === "") return;

    if (editMode) {
      const updatedDepartments = departments.map((dept) =>
        dept.id === currentDeptId ? { ...dept, name: newDeptName.trim() } : dept
      );
      setDepartments(updatedDepartments);
    } else {
      const maxIdNum = Math.max(
        ...departments.map((d) => parseInt(d.id.replace("DEP", "")))
      );
      const newDept = {
        id: `DEP${(maxIdNum + 1).toString().padStart(3, "0")}`,
        name: newDeptName.trim(),
      };
      setDepartments([...departments, newDept]);
    }

    closeModal();
  };

  const handleDelete = (id) => {
    const filtered = departments.filter((dept) => dept.id !== id);
    setDepartments(filtered);
  };

  return (
    <div className={styles.dashboard}>
      <Sidebar />

      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1>Department</h1>
          <input
            type="text"
            placeholder="Search for Department..."
            className={styles.searchBar}
          />
          <button className={styles.addBtn} onClick={handleAddDepartment}>
            <FaUserPlus /> Add Department
          </button>
        </header>

        <div className={styles.tableActions}>
          <table className={styles.tab}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept) => (
                <tr key={dept.id}>
                  <td data-label="ID">{dept.id}</td>
                  <td data-label="Department">{dept.name}</td>
                  <td data-label="Action">
                    <button
                      className={styles.editBtn}
                      onClick={() => handleEdit(dept)}
                    >
                      <FaEdit className={styles.icon} size={30} />
                    </button>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => handleDelete(dept.id)}
                    >
                      <FaTrash className={styles.icon} size={30} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>{editMode ? "Edit" : "Add"} Department</h3>
            <input
              type="text"
              placeholder="Enter Department Name"
              value={newDeptName}
              onChange={(e) => setNewDeptName(e.target.value)}
              className={styles.input}
            />
            <div className={styles.modalActions}>
              <button className={styles.saveBtn} onClick={saveModal}>
                Save
              </button>
              <button className={styles.cancelBtn} onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Department;
