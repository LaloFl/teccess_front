import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

// COMPONENTS
import DashNav from "../../components/DashNav";

import "./styles.sass";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard";
  });
  return (
    <div className="dashboard_layout">
      <DashNav />
      <div className="dashboard_screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
