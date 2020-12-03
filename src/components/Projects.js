import "./Projects.css";
import React, { Component } from "react";
import Bodyworks from "../images/bodyworks.png";

class Projects extends Component {
  render() {
    function openBodyworksNewTab() {
      const bodyworksUrl = "https://xbry12.github.io/group-project-repo/";
      var win = window.open(bodyworksUrl, "_blank");
      win.focus();
    }
    return (
      
      <div className="projectsDiv">
        <h5 className='project'>Projects</h5>
      
       
         <a onClick={openBodyworksNewTab}>
          <img className="bodyworks" src={Bodyworks} alt="BodyWorks Project" />
        </a> 
       
      </div>
     
    );
  }
}
export default Projects;
