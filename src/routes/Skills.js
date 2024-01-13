import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Skill from "../components/Skill";


const Skills = () => {
  return <>
    <Navbar/>
    <HeroImg2 heading="SKILLS." text="I bring a dynamic and youthful perspective, coupled with innovative ideas, to craft visually stunning and user-friendly interfaces. Proficient in ReactJS, HTML, CSS, JavaScript, Node.js, and the MERN stack, I possess the skills to develop robust web applications. My track record includes the successful completion of numerous projects, showcasing my ability to seamlessly transform conceptual visions into tangible realities."/>
    <Skill/>
    <Footer/>
  </>;
};

export default Skills;
