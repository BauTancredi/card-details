import React from "react";

import "./index.css";

const BackCard = ({ cardCVC }) => {
  // render cardCVC or placeholder
  const renderCardCVC = () => {
    if (cardCVC) {
      return cardCVC;
    } else {
      return "000";
    }
  };

  return (
    <div className="backCard">
      <p className="cvc">{renderCardCVC()}</p>
    </div>
  );
};

export default BackCard;
