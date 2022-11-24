import React from "react";
import { FaUser } from "react-icons/fa";

import "./styles.sass";

export default function StudentCard({ studentData }) {
  return (
    <div className="student_card">
      <div className="student_card_photo">
        {studentData["foto"] ? (
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt="Foto del estudiante"
          />
        ) : (
          <FaUser size={200} />
        )}
      </div>
      <div className="student_card_info">
        <div className="student_card_name">
          <span>{studentData?.nombre}</span>
          <span>{studentData?.apellidos}</span>
        </div>
        <div className="student_card_id">{studentData?.n_control}</div>
        <div className="student_card_carrera">{studentData?.carrera}</div>
      </div>
    </div>
  );
}
