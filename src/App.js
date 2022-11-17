import React, { useState, useEffect } from "react";

import BackCard from "./components/BackCard";
import FrontCard from "./components/FrontCard";
import Form from "./components/Form";
import FormComplete from "./components/FormComplete";

import "./App.css";

export const FormInitialValues = {
  cardNumber: "",
  cardHolder: "",
  cardExpiry: {
    month: "",
    year: "",
  },
  cardCVC: "",
};

function App() {
  const [formValues, setFormValues] = React.useState(FormInitialValues);

  return (
    <div className="App">
      <div className="container">
        <div className="cardsContainer">
          <BackCard cardCVC={formValues.cardCVC} />
          <FrontCard formValues={formValues} />
        </div>
        <Form formValues={formValues} setFormValues={setFormValues} />
      </div>
    </div>
  );
}

export default App;
