import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// SCREENS
import Dashboard from "./screens/Dashboard";
import DashboardManage from "./screens/DashboardManage";
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
            <Route path="/dashboard" element={<DashboardManage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
