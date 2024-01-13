import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"

const AboutContent = () => {
  return <div className="about">
    <div className="left">
      <h1>Who Am I</h1>
      <p> Developed features and maintained applications using MERN stack
 (MongoDB, Express, React, Node.js). Developed RESTful APIs using
 Express and Node.js .Developed user interfaces using React.js.
 Implemented authentication and authorization using JSON Web Tokens.
 Utilized React Hooks, Context API for state management. Collaborated
 with UI/UX designers to develop responsive UI components. Deployed
 applications to Netlify(Front end) & Render(Back end)</p>
      <Link to="https://drive.google.com/file/d/1057GYT5hsXNJukqjoJgWzYc7vmXGfTWk/view?usp=sharing " target="_blank"><button className="btn">Resume</button></Link>
    </div>
    <div className="right">
      <div className="img-container">
        <div className="img-stack top">
          <img src={React1} className="img" alt="true"/>
        </div>
        <div className="img-stack bottom">
          <img src={React2} className="img" alt="true"/>
        </div>
      </div>
    </div>
  </div>;
};

export default AboutContent;
