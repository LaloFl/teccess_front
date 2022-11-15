import React from "react";

import DashNavElement from "../DashNavElement";
import { FaHome, FaList, FaUser } from "react-icons/fa";

import "./styles.sass";

export default function DashNav() {
  return (
    <div className="dashnav">
      <DashNavElement Icon={FaHome} label="Menu" route="/dashboard" />
      <DashNavElement Icon={FaList} label="Report" route="/dashboard/report" />
      <DashNavElement Icon={FaUser} label="Admins" route="/dashboard/admins" />
    </div>
  );
}
