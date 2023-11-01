import React from "react";

const CustomInput = ({
  label,
  name,
  id,
  value,
  placeholder,
  handleChange,
  type,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
};

export default CustomInput;
