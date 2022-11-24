import React, { useEffect, useState, useRef } from "react";

import { Link } from "react-router-dom";
import { FaUser, FaWindowClose, FaBarcode } from "react-icons/fa";

import StudentCard from "../../components/StudentCard";

import logo_tec from "../../assets/logo_tec.png";

import "./styles.sass";

export default function Logger() {
  const [data, setData] = useState({});
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const rfid = inputRef.current.value;
    inputRef.current.value = "";
    getData(rfid).then((res) => {
      console.log(res);
      console.log(data);
      if (data.studentData) {
        if (
          res.log["status"] === "NG" &&
          res.studentData["id_estudiante"] === data.studentData["id_estudiante"]
        )
          return 0;
      }
      setData(res);
      setTimeout(() => {
        setData({});
      }, 2000);
    });
  };

  const getData = async (rfid) => {
    const API_URL = process.env.REACT_APP_BACKEND_URL;

    // GET STUDENT PK
    const fetchURL = `${API_URL}/api/estudiantes_rfid/${rfid}/`;
    const studentRes = await fetch(fetchURL);
    if (studentRes.status === 404)
      return {
        studentData: {},
        log: { status: "NG", message: "¡Estudiante no encontrado!" },
      };
    const studentData = await studentRes.json();

    const pk = studentData.id_estudiante;

    // POST LOG
    const log = await (
      await fetch(`${API_URL}/api/logs_from/${pk}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      })
    ).json();

    return { studentData, log };
  };
  const ola = isHex("a");

  const isHex = (hex) => {
    const regex = /^[0-9A-F]{8}$/i;
    return regex.test(hex);
  };

  useEffect(() => {
    document.title = "Logger";
    rfidTrack();
  }, []);

  const rfidTrack = () => {
    inputRef.current.focus();
  };

  return (
    <div className="logger_screen">
      <header>
        <div className="exit_button">
          <Link to="/">
            <FaWindowClose size={25} />
          </Link>
        </div>
        <img id="logo" src={logo_tec} alt="logo_tec" />
        <h1>Sistema de acceso a TECNM Tijuana</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={inputRef} onBlur={rfidTrack} />
        </form>
      </header>
      <main>
        {Object.keys(data).length === 0 ? (
          <div className="box_data_false">
            <FaBarcode size={100} />
            <h2>Por favor, acerque su tarjeta...</h2>
          </div>
        ) : data?.log?.status === "OK" ? (
          <div className="box_data_true">
            <StudentCard studentData={data["studentData"]} />
          </div>
        ) : (
          <div className="box_data_false">
            <FaBarcode size={100} />
            <h2>{data?.log?.message}...</h2>
          </div>
        )}
      </main>
    </div>
  );
}
