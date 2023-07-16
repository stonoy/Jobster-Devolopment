import React from "react";

const FormInput = ({ handelChange, name, type, value }) => {
  return (
    <div className="form-row">
      <label htmlFor="name">{name}</label>
      <input type={type} name={name} value={value} onChange={handelChange} />
    </div>
  );
};

export default FormInput;
