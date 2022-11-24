import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles.sass";

export default function Home() {
  useEffect(() => {
    document.title = "Acceso TECNM Tijuana";
  }, []);
  return (
    <main className="home_main">
      <h1>Menú</h1>
      <Link to="/logger">Sistema de acceso</Link>
      <Link to="/dashboard">Dashboard</Link>
    </main>
  );
}
