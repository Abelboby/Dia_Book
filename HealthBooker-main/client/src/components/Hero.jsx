import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
        Your Dialysis Care,<br />
        Simplified.
        </h1>
        <p>
        Streamline your dialysis booking experience with our user-friendly online platform.
        Say goodbye to lengthy phone calls and paperwork, and embrace convenience and efficiency.
        <br/>
        <br/>
        <br/>
        <b>Join us today and discover a hassle-free way to manage your dialysis needs.</b>
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
