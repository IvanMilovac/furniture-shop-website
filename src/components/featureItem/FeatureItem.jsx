import React from "react";

import FeatureIcon from "../../assets/feature-icon.png";

import "./FeatureItem.css";

const FeatureItem = ({ title, text }) => {
  return (
    <div className="furniture__features-list_item">
      <img src={FeatureIcon} alt="" />
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default FeatureItem;
