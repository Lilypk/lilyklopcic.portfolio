import "./App.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";

import Projects from "./components/Projects";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
      
        <Aboutme />
        <Projects />
        
        </div>
      
    );
  }
}
export default App;
