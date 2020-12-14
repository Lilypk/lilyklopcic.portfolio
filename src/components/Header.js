import React, { Component } from "react";
import { Redirect, useHistory } from "react-router-dom";
import "./Header.css";
import Linkedin from "../images/linkedin.png";
import Github from "../images/github.png";
import Resume from "../images/resume.png";
import Gmail from '../images/emaillogo.png'
class Header extends Component {
  render() {
    function openLinkedinNewTab() {
      const linkedinUrl = "https://www.linkedin.com/in/lily-klopcic-232279127/";
      var win = window.open(linkedinUrl, "_blank");
      win.focus();
    }
    function openGithubNewTab() {
      const githubUrl = "https://github.com/Lilypk";
      var win = window.open(githubUrl, "_blank");
      win.focus();
    }
    function openResumeNewTab() {
      const resumeUrl =
        "https://docs.google.com/document/d/1vTZxhq8qHt69DAf5V1ezpDCBox0F1E8fEAlyBZLczsQ";
      var win = window.open(resumeUrl, "_blank");
      win.focus();
    }

    return (
      <div className="header">
        <h3>
          lily klopcic
          <br />
          Full Stack Software Engineer
        </h3>
        <a onClick={openLinkedinNewTab}>
          <img className="linkedin" src={Linkedin} alt="Linkedin" />
        </a>
        <a onClick={openGithubNewTab}>
          <img className="github" src={Github} alt="Github" />
        </a>
        <a onClick={openResumeNewTab}>
          <img className="resume" src={Resume} alt="Resume" />
        </a>
        <div className='tooltip'>
           <a><img className='gmail'src={Gmail}/></a>
            <span class="tooltiptext">lilyklopcic@gmail.com</span>
            </div>
      </div>
    );
  }
}

export default Header;
