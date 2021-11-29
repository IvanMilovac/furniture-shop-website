import React from "react";

import { Card } from "../../components/";

import { First, Second, Third, Forth } from "./import";

import "./About.css";

const About = () => {
  return (
    <div id="about" className="furniture__about">
      <div className="furniture__about-heading">
        <div className="furniture__about-heading_content">
          <h1>About Us</h1>
          <p>
            At Besnik Consultancy, we take pride in our values – service,
            integrity, and excellence.
          </p>
        </div>
        <button>Learn More</button>
      </div>
      <div className="furniture__about-card_container">
        <Card
          number="1."
          title="Who We Are"
          text="You get a 2-week free trial to kick the Smarty tries. We want you to."
        />
        <Card
          number="2."
          title="What Do We Do"
          text="We give you a free course that guides you through the process."
        />
        <Card
          number="3."
          title="How Do We Help"
          text="Use our multimedia lecturers, videos, and coaching sessions."
        />
        <Card
          number="4."
          title="Create success story"
          text="With access to online learning resources anyone can transfrm."
        />
      </div>
      <div className="furniture__about-image_container">
        <div>
          <img src={First} alt="Chair" />
          <img src={Second} alt="Chair" />
        </div>
        <div>
          <img src={Third} alt="Chair" />
          <img src={Forth} alt="Chair" />
        </div>
      </div>
    </div>
  );
};

export default About;
