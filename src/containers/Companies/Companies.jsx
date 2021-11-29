import React from "react";

import {
  Microsoft,
  Entrepreneur,
  Fortune,
  BusinessWeb,
  Mashable,
} from "./imports.js";

import "./Companies.css";

const Companies = () => {
  return (
    <div className="furniture__companies">
      <h3>TRUSTED BY OVER 1K+ COMPANIES</h3>
      <div className="furniture__companies-list">
        <img src={Microsoft} alt="Microsoft logo" />
        <img src={Entrepreneur} alt="Entrepreneur logo" />
        <img src={Fortune} alt="Fortune logo" />
        <img src={BusinessWeb} alt="BusinessWeb logo" />
        <img src={Mashable} alt="Mashable logo" />
      </div>
    </div>
  );
};

export default Companies;
