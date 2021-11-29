import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import "./Navbar.css";

import Logo from "../../assets/Logo.svg";
import Search from "../../assets/Search Icon.svg";
import More from "../../assets/More Icon.svg";

const Menu = () => (
  <>
    <p>
      <a href="/">Home</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#features">Features</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
  return (
    <nav className="furniture__navbar">
      <div className="furniture__navbar-logo">
        <img src={Logo} alt="Furniture shop logo" />
      </div>
      <div className="furniture__navbar-navigation">
        <Menu />
      </div>
      <div className="furniture__navbar-icons">
        <img src={Search} alt="Search icon" />
        <img src={More} alt="More icon" />
      </div>
      <div className="furniture_navbar-mobile_hamburger">
        {mobileMenuToggle ? (
          <RiCloseFill
            color="#242424"
            size={22}
            onClick={() => setMobileMenuToggle(false)}
          />
        ) : (
          <RiMenu3Fill
            color="#242424"
            size={22}
            onClick={() => setMobileMenuToggle(true)}
          />
        )}
      </div>
      <div
        className={`furniture__navbar-mobile_menu ${
          mobileMenuToggle ? "slide" : ""
        }`}
      >
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
