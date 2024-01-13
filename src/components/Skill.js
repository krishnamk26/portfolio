import React from "react";
import "./Skill.css"
import SkillCard from "./SkillCard";
import SkillCardData from "./SkillCardData"
import "./SkillCardStyle.css"

const Skill = (props) => {
  return <div className="logo-container">
        <h1 className="skill-heading">Skill & Experience</h1>
      <div className="log-container">
        {SkillCardData.map((val,ind)=>{
          return(
            <SkillCard
            key={ind}
            pngsrc={val.pngsrc}
            title={val.title}/>
          )
        })}
      </div>
    </div>
};

export default Skill;
