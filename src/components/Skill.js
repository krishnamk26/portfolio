import React, { useEffect } from "react";
import "./Skill.css"
import SkillCard from "./SkillCard";
import SkillCardData from "./SkillCardData"
import "./SkillCardStyle.css"
import AOS from "aos";
import "aos/dist/aos.css"

const Skill = (props) => {
  useEffect(() => {
    AOS.init({
      duration : 1000,
    });
  }, []);
  return <div className="logo-container">
        <h1 data-aos="fade-right" className="skill-heading">Skill <span>&</span> Experience</h1>
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
