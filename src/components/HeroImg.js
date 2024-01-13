import "./HeroImgStyles.css";
import React from "react";
import introImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
        <img className="into-img" src={introImg} alt="introImg"/>
    </div>
    <div className="content">
    <h1>React Developer</h1>
    <div>
      <Link to="/project" className="btn"> My Projects</Link>
      <Link to="https://drive.google.com/file/d/1057GYT5hsXNJukqjoJgWzYc7vmXGfTWk/view?usp=sharing " target="_blank" className="btn btn-light">Download CV</Link>
    </div>
    </div>
  </div>;
};

export default HeroImg;
