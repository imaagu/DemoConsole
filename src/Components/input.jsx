import React from "react";
const Input = ({
  imp = false,
  label,
  name,
  type,
  value,
  onChange,
  message = "",
}) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{imp === true ? label + "*" : label} </label>
      <div className="form-group text-center mb-3">
        <input
          name={name}
          id={name}
          type={type}
          value={value}
          placeholder={label}
          onChange={onChange}
          className="form-control"
        />
        <div className={message !== "" ? "text-left text-danger" : ""}>
          {message}
        </div>
      </div>
    </div>
  );
};

export default Input;
