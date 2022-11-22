import React from "react";
import { Link } from "react-router-dom";

import "./styles.sass";

export default function Home() {
  return (
    <main className="home_main">
      <Link to="/logger">Logger</Link>
      <Link to="/dashboard">Dashboard</Link>
    </main>
  );
}
