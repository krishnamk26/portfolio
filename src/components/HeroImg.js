import "./HeroImgStyles.css";
import React, { useEffect } from "react";
import introImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"

const HeroImg = () => {
  useEffect(()=>{
    AOS.init({
      duration : 600,
      delay:200
    },[]);
  })
  return <div className="hero">
    <div className="mask" data-aos="fade-up">
        <img className="into-img" src={introImg} alt="introImg"/>
    </div>
    <div className="content">
    <h1 data-aos="slide-down">React Developer</h1>
    <div>
      <Link data-aos="slide-left" to="/project" className="btn"> My Projects</Link>
      <Link data-aos="slide-right" to="https://drive.google.com/file/d/1057GYT5hsXNJukqjoJgWzYc7vmXGfTWk/view?usp=sharing " target="_blank" className="btn btn-light">Download CV</Link>
    </div>
    </div>
  </div>;
};

export default HeroImg;
