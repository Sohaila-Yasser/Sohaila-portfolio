import React from "react";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <div>
        <p className="hello">
          <b>Hello!</b>
        </p>
        <h1>
          <span className="im">I'm </span>
          <span className="sohaila">Sohaila</span>
        </h1>
        <h1 className="yasser">Yasser</h1>
        <h1 className="developer">A FRONT END DEVELOPER</h1>
        <div className="home-buttons">
          <a href="https://github.com/Sohaila-Yasser">
            <button className="home-button-one">
              <b>My work</b>
            </button>
          </a>
          <a href="https://www.instagram.com/sohailayasser26/?hl=ar">
            {" "}
            <button className="home-button-two">
              <b>Contact me</b>
            </button>{" "}
          </a>
        </div>
      </div>
      <div>
        <img
          className="home-img"
          src="https://i.postimg.cc/FKz8PRSr/funny-childish-female-young-character-light-color-background-generative-ai-58409-29585-transformed.png"
        />
      </div>
    </div>
  );
};
