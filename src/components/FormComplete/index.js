import React from "react";

import IconComplete from "../../images/icon-complete.svg";

import "./index.css";

const FormComplete = ({ handleSubmit }) => {
  return (
    <div className="formContainer">
      <img src={IconComplete} alt="icon complete" />
      <h2>THANK YOU!</h2>
      <p>We've added your card details</p>
      <button onClick={handleSubmit}>Continue</button>
    </div>
  );
};

export default FormComplete;
