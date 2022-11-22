import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// SCREENS
import Dashboard from "./screens/Dashboard";
import DashboardAdmins from "./screens/DashboardAdmins";
import DashboardAdd from "./screens/DashboardAdd";
import DashboardReport from "./screens/DashboardReport";
import Home from "./screens/Home";

// GLOBAL STYLES
import "./global.sass";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route element={<Dashboard />}>
            <Route path="/dashboard" element={<DashboardReport />} />
            <Route path="/dashboard/admins" element={<DashboardAdmins />} />
            <Route path="/dashboard/add" element={<DashboardAdd />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
