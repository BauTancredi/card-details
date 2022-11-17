import React, { useEffect, useState, useCallback, Fragment } from "react";

import IconComplete from "../../images/icon-complete.svg";
import { FormInitialValues } from "../../App";

import "./index.css";

const Form = ({ formValues, setFormValues }) => {
  const { cardNumber, cardHolder, cardExpiry, cardCVC } = formValues;
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [formComplete, setFormComplete] = React.useState(false);

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

  //call formValidate on input change or blur
  const formValidate = useCallback(() => {
    const { cardNumber, cardHolder, cardExpiry, cardCVC } = formValues;
    const errors = {};

    //card number validation
    if (isNaN(cardNumber)) {
      errors.cardNumber = "Card number must be a number";
    } else if (cardNumber.length < 16) {
      errors.cardNumber = "Card number must be 16 digits";
    }

    //card holder validation
    if (cardHolder.length < 3) {
      errors.cardHolder = "Card holder name must be at least 3 characters";
    }

    //card expiry validation
    if (isNaN(cardExpiry.month)) {
      errors.cardExpiryMonth = "Month must be a number";
    } else if (cardExpiry.month.length < 2) {
      errors.cardExpiryMonth = "Month must be 2 digits";
    }

    if (isNaN(cardExpiry.year)) {
      errors.cardExpiryYear = "Year must be a number";
    } else if (cardExpiry.year.length < 2) {
      errors.cardExpiryYear = "Year must be 2 digits";
    }

    //card cvc validation
    if (isNaN(cardCVC)) {
      errors.cardCVC = "CVC must be a number";
    } else if (cardCVC.length < 3) {
      errors.cardCVC = "CVC must be 3 digits";
    }

    setErrors(errors);
  }, [formValues]);

  useEffect(() => {
    formValidate();
  }, [formValidate]);

  useEffect(() => {
    document.getElementById("cardNumber").focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormComplete((prev) => !prev);

    //reset form if formComplete is true
    if (formComplete) {
      setFormValues(FormInitialValues);
      setTouched({});
    }
  };

  const renderContent = () => {
    if (!formComplete) {
      return (
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
              className={
                touched.cardNumber && errors.cardNumber ? "errorInput" : ""
              }
              onBlur={() => setTouched({ ...touched, cardNumber: true })}
            />
            {touched.cardNumber && errors.cardNumber && (
              <p className="error">{errors.cardNumber}</p>
            )}
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
              className={
                touched.cardHolder && errors.cardHolder ? "errorInput" : ""
              }
              onBlur={() => setTouched({ ...touched, cardHolder: true })}
            />
            {touched.cardHolder && errors.cardHolder && (
              <p className="error">{errors.cardHolder}</p>
            )}
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
                  className={
                    touched.cardExpiryMonth && errors.cardExpiryMonth
                      ? "errorInput"
                      : ""
                  }
                  onBlur={() =>
                    setTouched({ ...touched, cardExpiryMonth: true })
                  }
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
                  className={
                    touched.cardExpiryYear && errors.cardExpiryYear
                      ? "errorInput"
                      : ""
                  }
                  onBlur={() =>
                    setTouched({ ...touched, cardExpiryYear: true })
                  }
                />
              </div>
              {touched.cardExpiryMonth && errors.cardExpiryMonth && (
                <p className="error">{errors.cardExpiryMonth}</p>
              )}
              {touched.cardExpiryYear && errors.cardExpiryYear && (
                <p className="error">{errors.cardExpiryYear}</p>
              )}
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
                className={
                  touched.cardCVC && errors.cardCVC ? "errorInput" : ""
                }
                onBlur={() => setTouched({ ...touched, cardCVC: true })}
              />
              {touched.cardCVC && errors.cardCVC && (
                <p className="error">{errors.cardCVC}</p>
              )}
            </div>
          </div>
        </form>
      );
    } else {
      return (
        <Fragment>
          <img src={IconComplete} alt="icon complete" />
          <h2>THANK YOU!</h2>
          <p>We've added your card details</p>
        </Fragment>
      );
    }
  };

  return (
    <div className="formContainer">
      <div className="content">
        {renderContent()}
        <button
          className={`formContainer--button ${
            Object.keys(errors).length > 0 ? "disabled" : ""
          }`}
          type="submit"
          onClick={handleSubmit}
          disabled={Object.keys(errors).length > 0}
        >
          {formComplete ? "Continue" : "Confirm"}
        </button>
      </div>
    </div>
  );
};

export default Form;
