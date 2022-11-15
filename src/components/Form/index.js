import React, { useEffect } from "react";

import "./index.css";

const Form = ({ formValues, setFormValues, handleSubmit }) => {
  const { cardNumber, cardHolder, cardExpiry, cardCVC } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((formValues) => ({
      ...formValues,
      [name]: value,
    }));
  };

  const handleCardExpiry = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      cardExpiry: { ...formValues.cardExpiry, [name]: value },
    });
  };

  //disable submit button if formvalues are empty
  const disableSubmit = () => {
    if (
      cardNumber === "" ||
      cardHolder === "" ||
      cardExpiry.month === "" ||
      cardExpiry.year === "" ||
      cardCVC === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    document.getElementById("cardNumber").focus();
  }, []);

  return (
    <div className="formContainer">
      <form>
        <div className="formContainer--input">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            placeholder="e.g 1234 5678 9123 000"
            onChange={handleChange}
            value={cardNumber}
            maxLength={16}
          />
        </div>
        <div className="formContainer--input">
          <label htmlFor="cardHolder">Card Holder</label>
          <input
            type="text"
            name="cardHolder"
            id="cardHolder"
            placeholder="e.g Jane Appleseed"
            onChange={handleChange}
            value={cardHolder}
          />
        </div>
        <div className="formContainer--section_expiryDateCvc">
          <div className="formContainer--input">
            <label htmlFor="expiryDate">Expiry Date</label>
            <div className="formContainer--input_expiryDate">
              <input
                type="text"
                name="month"
                id="expiryDate"
                placeholder="MM"
                onChange={handleCardExpiry}
                value={cardExpiry.month}
                maxLength={2}
                size={2}
              />
              <input
                type="text"
                name="year"
                id="expiryDate"
                placeholder="YY"
                onChange={handleCardExpiry}
                value={cardExpiry.year}
                maxLength={2}
                size={2}
              />
            </div>
          </div>
          <div className="formContainer--input">
            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              name="cardCVC"
              id="cvc"
              placeholder="e.g 123"
              onChange={handleChange}
              value={cardCVC}
              maxLength={3}
              size={3}
            />
          </div>
        </div>
        <button
          className={`formContainer--button ${
            disableSubmit() ? "disabled" : ""
          }`}
          type="submit"
          onClick={handleSubmit}
          disabled={disableSubmit()}
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Form;
