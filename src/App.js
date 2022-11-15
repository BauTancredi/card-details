import React from "react";

import BackCard from "./components/BackCard";
import FrontCard from "./components/FrontCard";
import Form from "./components/Form";
import FormComplete from "./components/FormComplete";

import "./App.css";

function App() {
  const [formComplete, setFormComplete] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    cardNumber: "",
    cardHolder: "",
    cardExpiry: {
      month: "",
      year: "",
    },
    cardCVC: "",
  });

  // render the form or the completed form based on the formComplete state
  const renderForm = () => {
    if (formComplete) {
      return (
        <FormComplete formValues={formValues} handleSubmit={handleSubmit} />
      );
    } else {
      return (
        <Form
          formValues={formValues}
          setFormValues={setFormValues}
          setFormComplete={setFormComplete}
          handleSubmit={handleSubmit}
        />
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormComplete((prev) => !prev);

    //reset form if formComplete is true
    if (formComplete) {
      setFormValues({
        cardNumber: "",
        cardHolder: "",
        cardExpiry: {
          month: "",
          year: "",
        },
        cardCVC: "",
      });
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="cardsContainer">
          <BackCard cardCVC={formValues.cardCVC} />
          <FrontCard formValues={formValues} />
        </div>
        {renderForm()}
      </div>
    </div>
  );
}

export default App;
