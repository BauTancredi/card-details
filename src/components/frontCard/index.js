import React from "react";

import CardLogo from "../../images/card-logo.svg";

import "./index.css";

const FrontCard = () => {
  return (
    <div className="frontCard">
      <div className="cardInfo">
        <img src={CardLogo} alt="logo" />
        <div className="cardDetails">
          <p className="cardNumber">0000 0000 0000 0000</p>
          <div className="cardDetails--HolderExpiry">
            <p className="cardHolder">Jane Appleseed</p>
            <p className="cardExpiry">00/00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
