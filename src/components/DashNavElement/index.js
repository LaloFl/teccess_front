import React from "react";

import { Link } from "react-router-dom";

import "./styles.sass";
export default function DashNavElement({ label, route, Icon }) {
  return (
    <div className="dashnav_element">
      <Link to={route}>
        <Icon />
        <span>{label}</span>
      </Link>
    </div>
  );
}
