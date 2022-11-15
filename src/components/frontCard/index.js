import React from "react";

import CardLogo from "../../images/card-logo.svg";

import "./index.css";

const FrontCard = ({ formValues }) => {
  const { cardNumber, cardHolder, cardExpiry } = formValues;

  // add a space every 4 characters
  const formatCardNumber = (cardNumber) => {
    return cardNumber.replace(/\s?/g, "").replace(/(.{4})/g, "$1 ");
  };

  //render cardexpiry month and year or placeholder
  const renderCardExpiry = () => {
    if (cardExpiry.month && cardExpiry.year) {
      return `${cardExpiry.month}/${cardExpiry.year}`;
    } else {
      return "00/00";
    }
  };

  return (
    <div className="frontCard">
      <div className="cardInfo">
        <img src={CardLogo} alt="logo" />
        <div className="cardDetails">
          <p className="cardNumber">
            {cardNumber ? formatCardNumber(cardNumber) : "0000 0000 0000 0000"}
          </p>
          <div className="cardDetails--HolderExpiry">
            <p className="cardHolder">
              {cardHolder ? cardHolder : "Jane Appleseed"}
            </p>
            <p className="cardExpiry">{renderCardExpiry()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
