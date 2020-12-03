import "./Aboutme.css";
import React, { Component } from "react";
import Headshot from "../images/headshot.png";

class Aboutme extends Component {
  render() {
    return (
      <div className="aboutmesection">
       
        <h5 className="bio">
        <h5 className='aboutme'>About Me</h5>
        <div>
           <img className="headshot" src={Headshot} alt="headshot" />
           </div>
          Lily Klopcic is an enterprising full-stack engineer, experienced
          dancer and box office manager, and connoisseur of musical theatre, red
          wine and high fashion. Brought up in the respective worlds of
          restaraunteering and showbusiness, her lifelong passion has been the
          creation and consumption of artistic experience. With a keen eye for
          detail and fine aesthetic, her goal is to take the experiences of her
          upbringing to the tech industry and contribute to a new wave of
          invention in art, technology, and culture.
        </h5>
        
      </div>

    );
  }
}
export default Aboutme;
