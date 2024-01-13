import "./FooterStyles.css";

import React from "react";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhoneAlt} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return <div className="footer">
    <div className="footer-container">
      <div className="left">
        <div className="location">
          <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
          <div>
            <h4>1/1, Krishnapuram Colony,</h4>
            <h4>4th Street, Madurai-625014</h4>
          </div>
        </div>
        <div className="phone">
          <h4>
            <FaPhoneAlt size={20} style={{ color: "white", marginRight: "2rem" }} />
            +91-9578675765
          </h4>
        </div>
        <div className="email">
          <h4>
            <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
            krishnamk2604@gmail.com
          </h4>
        </div>
      </div>
      <div className="right">
        <div className="social">
        <NavLink to="https://www.linkedin.com/in/krishnamk26" target="_blank"><FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} /></NavLink>
        <NavLink to="https://github.com/krishnamk26" target="_blank"><FaGithub size={30} style={{ color: "white", marginRight: "1rem" }} /></NavLink>
        
        </div>
      </div>
    </div>
  </div>;
};

export default Footer;
