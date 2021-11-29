import React from "react";

import HeaderImage from "../../assets/Hero-image.png";
import Dots from "../../assets/Dots.svg";
import Arrow from "../../assets/Arrow-down.png";

import "./Header.css";

const Header = () => {
  return (
    <div className="furniture__header">
      <div className="furniture__header-content">
        <img src={Dots} alt="Dots" />
        <h1>We Help You Make Modern Interior</h1>
        <p>
          We will help you to make an elegant and luxurious interior designed by
          professional interior designer.
        </p>
      </div>
      <div className="furniture__header-image_container">
        <img src={HeaderImage} alt="header" />
        <div className="furniture__header-image_container-arrow">
          <img src={Arrow} alt="Arrow down" />
        </div>
      </div>
    </div>
  );
};

export default Header;
