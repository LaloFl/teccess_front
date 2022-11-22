import React, { useRef } from "react";

import InputGroup from "../../components/InputGroup";

import { faker } from "@faker-js/faker";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles.sass";

export default function DashboardAdd() {
  const formFields = [
    {
      label: "Nombre",
      id: "nombre",
      type: "text",
      defaultValue: faker.name.firstName(),
    },
    {
      label: "Apellidos",
      id: "apellidos",
      type: "text",
      defaultValue: faker.name.lastName() + " " + faker.name.lastName(),
    },
    {
      label: "N. Control",
      id: "n_control",
      type: "text",
      defaultValue: faker.datatype.number({ min: 19211000, max: 19219999 }),
    },
    {
      label: "RFID",
      id: "rfid",
      type: "text",
      defaultValue: faker.random.alphaNumeric(8).toUpperCase(),
    },
    {
      label: "Carrera",
      id: "carrera",
      type: "text",
      defaultValue: faker.name.jobArea(),
    },
    {
      label: "Campus",
      id: "campus",
      type: "text",
      defaultValue: faker.address.city(),
    },
    {
      label: "Teléfono",
      id: "telefono",
      type: "text",
      defaultValue: faker.phone.number("6643095506"),
    },
    {
      label: "CURP",
      id: "curp",
      type: "text",
      defaultValue: faker.random.alphaNumeric(18).toUpperCase(),
    },
    {
      label: "Tipo de Sangre",
      id: "t_sangre",
      type: "text",
      defaultValue: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"][
        faker.datatype.number({ min: 0, max: 7 })
      ],
    },
    {
      label: "Alergias",
      id: "alergias",
      type: "text",
      defaultValue: [
        "Ninguna",
        "Polen",
        "Polvo",
        "Animales",
        "Medicamentos",
        "Comida",
        "Otros",
      ][faker.datatype.number({ min: 0, max: 6 })],
    },
    {
      label: "Remark",
      id: "remark",
      type: "text",
      defaultValue: faker.lorem.sentence(3),
    },
  ];

  const formInputs = {
    nombre: useRef(),
    apellidos: useRef(),
    n_control: useRef(),
    rfid: useRef(),
    carrera: useRef(),
    campus: useRef(),
    telefono: useRef(),
    curp: useRef(),
    t_sangre: useRef(),
    alergias: useRef(),
    remark: useRef(),
  };

  const submitData = (e) => {
    e.preventDefault();
    var data = {};
    Object.keys(formInputs).forEach((k) => {
      data[k] = formInputs[k].current.value;
    });

    const API_URL = process.env.REACT_APP_BACKEND_URL;
    fetch(`${API_URL}/api/estudiantes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        toast("✅ ¡Estudiante agregado!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <>
      <div>
        <h1>Añadir nuevo alumno</h1>
        <span>Nueva credencial RFID ligada a alumno</span>
      </div>
      <form onSubmit={submitData}>
        {formFields.map((field) => (
          <InputGroup
            id={field.id}
            label={field.label}
            inputRef={formInputs[field.id]}
            key={field.id}
            defaultValue={field.defaultValue}
          />
        ))}

        <button type="submit">Submit</button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
