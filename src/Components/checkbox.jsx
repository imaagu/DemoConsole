import React from "react";
const Checkbox = ({ label, name, value, onChange }) => {
  return (
    <div className="form-check  mb-3">
      <input
        name={name}
        id={name}
        type="checkbox"
        checked={value}
        onChange={onChange}
        className="form-check-input"
      />
      <label className="form-check-label" htmlFor={label}>
        &nbsp;{label}
      </label>
    </div>
  );
};

export default Checkbox;
