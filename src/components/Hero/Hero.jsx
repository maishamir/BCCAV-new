import React from "react";
import heroImg from "../../assets/images/bangladeshBG.jpeg";
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <img src={heroImg} alt="" className="hero__img" />

      <div className="hero__content">
        <div className="hero__content-text">
          Connecting <br />
          <span className="hero__content-text--cursive">Bangladesh</span> <br />
          and <span className="hero__content-text--cursive">Canada</span>
          <br />
          <small>Through Culture, Community, and Friendship</small>
        </div>
          <button className="hero__button">Become a Member</button>
      </div>
    </section>
  );
}

export default Hero;
