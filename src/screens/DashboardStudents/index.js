import React, { useEffect, useState } from "react";

export default function DashboardStudents() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const API_URL = process.env.REACT_APP_BACKEND_URL;
    fetch(`${API_URL}/api/estudiantes/`)
      .then((res) => res.json())
      .then((res) => {
        setStudents(res);
      });
  }, []);
  return students.length === 0 ? (
    <div>DashboardStudents</div>
  ) : (
    <div>
      {students.map((student) => (
        <div key={student.rfid}>
          {student.id_estudiante}. [{student.ultimo_log}] {student.nombre}{" "}
          {student.apellidos} (#
          {student.n_control}) ({student.rfid})
        </div>
      ))}
    </div>
  );
}
