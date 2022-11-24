import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// SCREENS
import Dashboard from "./screens/Dashboard";
import DashboardAdmins from "./screens/DashboardAdmins";
import DashboardAdd from "./screens/DashboardAdd";
import DashboardReport from "./screens/DashboardReport";
import DashboardStudents from "./screens/DashboardStudents";
import Home from "./screens/Home";
import Logger from "./screens/Logger";

// GLOBAL STYLES
import "./global.sass";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/logger" element={<Logger />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route element={<Dashboard />}>
            <Route path="/dashboard" element={<DashboardReport />} />
            <Route path="/dashboard/admins" element={<DashboardAdmins />} />
            <Route path="/dashboard/add" element={<DashboardAdd />} />
            <Route path="/dashboard/students" element={<DashboardStudents />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
