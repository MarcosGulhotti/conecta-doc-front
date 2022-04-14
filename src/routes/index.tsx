import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/dashboard";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import SchedulePage from "../pages/schedule";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/schedules" element={<SchedulePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
