import React from "react";

import { FeatureItem } from "../../components/";

import Fire from "../../assets/fire.svg";

import "./Features.css";

const Features = () => {
  return (
    <div className="furniture__features">
      <div className="furniture__features-content">
        <h1>
          Hot <img src={Fire} alt="Fire emoji" />
          deals for you
        </h1>
        <p>Online shopping for retail sales direct to consumers</p>
      </div>
      <div className="furniture__features-list">
        <FeatureItem
          title="1.5% cashback"
          text="Online shopping for retail sales direct to consumers"
        />
        <FeatureItem
          title="30-day terms"
          text="Online shopping for retail sales direct to consumers"
        />
        <FeatureItem
          title="Save money"
          text="Online shopping for retail sales direct to consumers"
        />
      </div>
    </div>
  );
};

export default Features;
