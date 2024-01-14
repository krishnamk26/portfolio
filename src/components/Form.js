import "./FormStyles.css";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

const Form = () => {
  useEffect(() => {
    //this is AOS
    AOS.init({
     duration : 1000,
   });
   }, [])
  return (
  <div className="form-text">
    <div>
    <h2 data-aos="fade-right" className='head-text'>take a <span >coffe</span> & chat with <span>me!</span></h2>
    </div>
    <form data-aos="flip-right">
      <label>Your Name</label>
      <input type="text"/>
      <label>Email</label>
      <input type="email"/>
      <label>Subject</label>
      <input type="text"/>
      <label>Message</label>
      <textarea rows="6" placeholder="Type your message here"/>
      <button className="btn">Submit</button>
    </form>
  </div>
  )
};

export default Form;
