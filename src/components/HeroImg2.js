import "./HeroImg2Styles.css";

import React, {useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

// class HeroImg2 extends Component {
//   render() {
//     useEffect(() => {
//       AOS.init({
//         duration : 1000,
//       });
//     }, []);

//     return <div className="hero-img">
//       <div className="heading">
//         <h1>{this.props.heading}</h1>
//         <p>{this.props.text}</p>
//       </div>
//     </div>;
//   }
// }

// export default HeroImg2;

const HeroImg2 = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="hero-img">
      <div className="heading">
        <h1 data-aos="fade-up">{props.heading}</h1>
        <p data-aos="fade-up">{props.text}</p>
      </div>
    </div>
  );
};

export default HeroImg2;
