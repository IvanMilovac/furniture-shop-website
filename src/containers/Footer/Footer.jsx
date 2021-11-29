import React from "react";

import { Logo, Facebook, Twitter, LinkedIn, Pinterest } from "./imports.js";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="furniture__footer">
      <div className="furniture__footer-heading">
        <h1>Start your business today for $0+ state fees.</h1>
        <div>
          <button>Get Started</button>
          <button>Contact Sales</button>
        </div>
      </div>
      <div className="furniture__footer-content">
        <div className="furniture__footer-content_column1">
          <img className="logo" src={Logo} alt="Logo" />
          <p>
            Optix seamlessly connects your members with the community,
            resources.
          </p>
          <div>
            <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="Twitter" />
            <img src={LinkedIn} alt="LinkedIn" />
            <img src={Pinterest} alt="Pinterest" />
          </div>
        </div>
        <div className="furniture__footer-content_column-links">
          <h5>Entity types</h5>
          <p>Knowledge base</p>
          <p>Security</p>
          <p>Privacy Policy</p>
          <p>Partners</p>
          <p>About us</p>
          <p>FAQs</p>
        </div>
        <div className="furniture__footer-content_column-links">
          <h5>Services</h5>
          <p>Contact Us</p>
          <p>Press</p>
          <p>Payrool</p>
          <p>Library</p>
          <p>Blog</p>
          <p>Help Center</p>
        </div>
        <div className="furniture__footer-content_column-links">
          <h5>Resources</h5>
          <p>Pricing</p>
          <p>FAQs</p>
          <p>Contact Support</p>
          <p>Privacy Policy</p>
          <p>Terms</p>
        </div>
        <div className="furniture__footer-content_column-links">
          <h5>Support</h5>
          <p>Contact</p>
          <p>Affiliates</p>
          <p>Sitemap</p>
          <p>Cancelation Policy</p>
          <p>Pricing</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
