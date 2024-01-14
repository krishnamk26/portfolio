import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"


function SkillCard(props) {
  useEffect(() => {
    AOS.init({
      duration : 1000,
    });
  }, []);
  return (
    <div className="logo-card" data-aos="flip-right">
      <img src={props.pngsrc} alt="logo" />
      <h2 className="skill-title">{props.title}</h2>
    </div>
  );
}

export default SkillCard;
