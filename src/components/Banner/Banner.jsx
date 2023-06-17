import React from "react";
import { BannerStyled } from "./BannerStyled";
import NavBar from "../NavBar/NavBar";

const Banner = () => {
  return (
    <BannerStyled>
      <NavBar />
      <div className="container">
        <div className="left">
          <p className="head">ABDUL JALEEL</p>
          <p className="subTxt">
            I am a Full stack software developer who loves to learn and create
            new things.
          </p>
          <button>Hire me!</button>
        </div>
        <div className="right">
          <img src="./img/moon.png" alt="moon" />
        </div>
      </div>
    </BannerStyled>
  );
};

export default Banner;
