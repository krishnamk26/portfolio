import "./WorkCardStyles.css";
import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
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
