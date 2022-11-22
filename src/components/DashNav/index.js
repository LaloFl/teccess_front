import React from "react";

import DashNavElement from "../DashNavElement";
import { FaList, FaUser, FaUserPlus } from "react-icons/fa";

import "./styles.sass";

export default function DashNav() {
  return (
    <div className="dashnav">
      <DashNavElement Icon={FaList} label="Report" route="/dashboard" />
      <DashNavElement Icon={FaUser} label="Admins" route="/dashboard/admins" />
      <DashNavElement Icon={FaUserPlus} label="Add" route="/dashboard/add" />
    </div>
  );
}
