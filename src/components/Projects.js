import "./Projects.css";
import React, { Component } from "react";
import Bodyworks from "../images/bodyworks.png";
import Simon from '../images/simon.png';

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
    function openSimonsNewTab() {
      const simonUrl = "https://lilypk.github.io/project_4/";
      var win = window.open(simonUrl, "_blank");
      win.focus();
    }
    function openSimonRepoNewTab() {
      const simonRepoUrl = "https://github.com/Lilypk/project_4";
      var win = window.open(simonRepoUrl, "_blank");
      win.focus();
    }
    return (
      
      <div className="projectsDiv">
        <h5 className='project'>Projects</h5>
      
       <div className='projectsrow'>
         <a onClick={openBodyworksNewTab}>
          <img className="bodyworks" src={Bodyworks} alt="BodyWorks Project" />
        </a> 
       <h5 className='projectdescription'>BodyWorks is an application using MERN Stack with full CRUD functuality. 
       <a onClick={openBodyworksRepoNewTab}>
       <button className='repolink'>Link to Repo</button>
        </a>  </h5>
</div>
<div className='projectsrow'>
        <a onClick={openSimonsNewTab}>
          <img className="bodyworks" src={Simon} alt="Simon Project" />
        </a> 
       <h5 className='projectdescription'>Simon is a replica of the game Simon, using HTML, CSS, and JavaScript.
 
       <a onClick={openSimonRepoNewTab}>
       <button className='repolink'>Link to Repo</button>
        </a>  </h5>
</div>



      </div>
     
    );
  }
}
export default Projects;
