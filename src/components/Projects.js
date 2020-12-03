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
    function openBodyworksRepoNewTab() {
      const bodyworksRepoUrl = "https://github.com/xbry12/group-project-repo";
      var win = window.open(bodyworksRepoUrl, "_blank");
      win.focus();
    }
    return (
      
      <div className="projectsDiv">
        <h5 className='project'>Projects</h5>
      
       
         <a onClick={openBodyworksNewTab}>
          <img className="bodyworks" src={Bodyworks} alt="BodyWorks Project" />
        </a> 
       <h5 className='projectdescription'>BodyWorks is an application using MERN Stack with full CRUD functuality. 
       <a onClick={openBodyworksRepoNewTab}>
       <button className='repolink'>Link to Repo</button>
        </a>  </h5>
      </div>
     
    );
  }
}
export default Projects;
