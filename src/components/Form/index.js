import React from "react";

import "./index.css";

const Form = () => {
  return (
    <div>
      <form className="formContainer">
        <div className="formContainer--input">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            placeholder="e.g Jane Appleseed"
          />
        </div>
        <div className="formContainer--input">
          <label htmlFor="cardHolder">Card Holder</label>
          <input
            type="text"
            name="cardHolder"
            id="cardHolder"
            placeholder="e.g 1234 5678 9123 000"
          />
        </div>
        <div className="formContainer--section_expiryDateCvc">
          <div className="formContainer--input">
            <label htmlFor="expiryDate">Expiry Date</label>
            <div className="formContainer--input_expiryDate">
              <input
                type="text"
                name="expiryDate"
                id="expiryDate"
                placeholder="MM"
              />
              <input
                type="text"
                name="expiryDate"
                id="expiryDate"
                placeholder="YY"
              />
            </div>
          </div>
          <div className="formContainer--input">
            <label htmlFor="cvc">CVC</label>
            <input type="text" name="cvc" id="cvc" placeholder="e.g 123" />
          </div>
        </div>
        <button className="formContainer--button" type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Form;
