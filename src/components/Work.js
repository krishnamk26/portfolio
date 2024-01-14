import "./WorkCardStyles.css";
import React, { useEffect } from "react";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCradData"
import AOS from "aos";
import "aos/dist/aos.css"


const Work = (props) => {
  useEffect(() => {
    AOS.init({
      duration : 1000,
    });
  }, []);
  return <div className="work-container">
    <h1 data-aos="fade-right" className="project-heading">PROJECTS</h1>
    <div className="project-container">
      {WorkCardData.map((val, ind)=>{
        return(
            <WorkCard 
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            source={val.source}
            />
        )
      })}
    </div>
  </div>;
};

export default Work;
