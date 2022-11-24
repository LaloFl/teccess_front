import React from "react";

import DashNavElement from "../DashNavElement";
import {
  FaArrowLeft,
  FaList,
  FaUser,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";

import "./styles.sass";

export default function DashNav() {
  return (
    <nav className="dashnav">
      <DashNavElement Icon={FaArrowLeft} label="Menu" route="/" />
      <DashNavElement Icon={FaList} label="Report" route="/dashboard" />
      <DashNavElement Icon={FaUser} label="Admins" route="/dashboard/admins" />
      <DashNavElement Icon={FaUserPlus} label="Add" route="/dashboard/add" />
      <DashNavElement
        Icon={FaUsers}
        label="Students"
        route="/dashboard/students"
      />
    </nav>
  );
}
