import React from "react";

import {
  StarFile,
  CircleStar,
  TwoCircles,
  Client,
  Logo,
  ArrLeftRight,
  RedHalfCircle,
} from "./import.js";

import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="furniture__testimonials">
      <div className="furniture__testimonials-heading">
        <img src={TwoCircles} alt="" />
        <div className="furniture__testimonials-heading_text">
          <h1>What our happy client say</h1>
          <p>
            File storage made easy – including powerful features you won’t find
            anywhere else. Whether you’re.
          </p>
        </div>
        <img src={StarFile} alt="" />
      </div>
      <img
        className="furniture__testimonials-redcircle"
        src={RedHalfCircle}
        alt=""
      />
      <div className="furniture__testimonials-content">
        <div className="furniture__testimonials-content_imgs">
          <img src={Client} alt="" />
          <img src={CircleStar} alt="" />
        </div>
        <div className="furniture__testimonials-content_info">
          <img src={Logo} alt="" />
          <h5>
            File storage made easy – including powerful features you won’t find
            anywhere else. Whether you’re.
          </h5>
          <div>
            <h6>Larry Diamond</h6>
            <p>Chief Executive Officer</p>
          </div>
          <img
            className="furniture__testimonials-content_info-btns"
            src={ArrLeftRight}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
