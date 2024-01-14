import "./WorkCardStyles.css";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"

const WorkCard = (props) => {
  useEffect(() => {
    AOS.init({
      duration : 1000,
    });
  }, []);
  return (
    <div className="project-card" data-aos="flip-left">
        <img src={props.imgsrc} alt="pic"/>
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-detailes">
          <p>{props.text}</p>
          <div className="pro-btns">
              <NavLink to={props.view} target="_blank" className="btn">Live Demo</NavLink>
              <NavLink to={props.source} target="_blank" className="btn-light">GitHub</NavLink>
          </div>
        </div>
      </div>
  )
};

export default WorkCard;
