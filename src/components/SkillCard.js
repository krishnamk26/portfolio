import React from "react";

function SkillCard(props) {
  return (
    <div className="logo-card">
      <img src={props.pngsrc} alt="logo" />
      <h2 className="skill-title">{props.title}</h2>
    </div>
  );
}

export default SkillCard;
