import React from "react";
import image from "../images/aboutimg.jpg";


const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            <b>Welcome to DiaBook, where we've reimagined the way you book dialysis services.</b> <br/>Our innovative platform simplifies the entire process, ensuring accessible and reliable care at your fingertips.<br/> Say goodbye to time-consuming calls and paperwork.<br/> With just a few clicks, you can effortlessly search, compare, and secure your dialysis appointments.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
