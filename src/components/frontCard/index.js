import React from "react";

import CardLogo from "../../images/card-logo.svg";

import "./index.css";

const FrontCard = () => {
  return (
    <div className="frontCard">
      <div className="cardLogo">
        <img src={CardLogo} alt="logo" />
      </div>
    </div>
  );
};

export default FrontCard;
