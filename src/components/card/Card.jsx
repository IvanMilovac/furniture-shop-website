import React from "react";

import "./Card.css";

const Card = ({ number, title, text }) => {
  return (
    <div className="furniture__about-card_container-item">
      <h1>{number}</h1>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Card;
