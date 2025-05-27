import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Home";
import Login from "./pages/Login";
import LoginEmp from "./pages/LoginEmp";
import Register from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Forgotpwd from "./pages/Forgotpwd";
import Employee from "./pages/Employee";
import Empregister from "./pages/Empregister";
import EmployeeEdit from "./pages/EmployeeEdit";
import Department from "./pages/Department";
import Leave from "./pages/Leave";
import Attendance from "./pages/Attendance";
import RequestLeave from "./pages/RequestLeave";
import AdminProfile from "./pages/AdminProfile";
import EmployeeProfile from "./pages/EmployeeProfile";

import { EmployeeProvider } from "./context/EmployeeContext";
import { LeaveProvider } from "./context/LeaveContext";
import { AttendanceProvider } from "./context/AttendanceContext";
import { AuthProvider } from "./context/AuthContext";
import { AuthEmpProvider } from "./context/AuthEmpContext";

import ProtectRoute from "./pages/ProtectRoute";
import ProtectRouteEmp from "./pages/ProtectRouteEmp";
import ResetPwd from "./pages/ResetPwd";


const App = () => {
  return (
    <AuthProvider>
      <AuthEmpProvider>
        <ToastContainer />
        <EmployeeProvider>
          <LeaveProvider>
            <AttendanceProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login/admin" element={<Login />} />
                  <Route path="/login/emp" element={<LoginEmp />} />
                  <Route path="/registration" element={<Register />} />
                  <Route path="/forgot" element={<Forgotpwd />} />
                  <Route path="/reset-password" element={<ResetPwd />} />

                  {/* Admin protected routes */}
                  <Route path="/dashboard" element={<ProtectRoute><Dashboard /></ProtectRoute>} />
                  <Route path="/dashboard/employee" element={<ProtectRoute><Employee /></ProtectRoute>} />
                  <Route path="/dashboard/employee/register" element={<ProtectRoute><Empregister /></ProtectRoute>} />
                  <Route path="/dashboard/employee/edit/:id" element={<ProtectRoute><EmployeeEdit /></ProtectRoute>} />
                  <Route path="/dashboard/department" element={<ProtectRoute><Department /></ProtectRoute>} />
                  <Route path="/dashboard/leave" element={<ProtectRoute><Leave /></ProtectRoute>} />
                  <Route path="/dashboard/attendance" element={<ProtectRoute><Attendance /></ProtectRoute>} />
                  <Route path="/dashboard/adminProfile" element={<ProtectRoute><AdminProfile /></ProtectRoute>} />

                  {/* Employee protected routes */}
                  <Route path="/employee/leaveRequest" element={<ProtectRouteEmp><RequestLeave /></ProtectRouteEmp>} />
                  <Route path="/employee/profile" element={<ProtectRouteEmp><EmployeeProfile /></ProtectRouteEmp>} />
                </Routes>
              </BrowserRouter>
            </AttendanceProvider>
          </LeaveProvider>
        </EmployeeProvider>
      </AuthEmpProvider>
    </AuthProvider>
  );
};

export default App;