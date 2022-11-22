import React from "react";

export default function InputGroup({ label, id, inputRef, defaultValue }) {
  return (
    <div className="input_group">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        ref={inputRef}
        defaultValue={defaultValue ? defaultValue : ""}
      />
    </div>
  );
}
