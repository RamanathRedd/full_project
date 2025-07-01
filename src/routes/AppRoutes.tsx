import React from "react";
import Register from "../pages/Register/Register";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
