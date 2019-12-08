import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import PropTypes from "prop-types";

class Home extends Component {
  constructor() {
    super()
    this.state = {
      course_modules: [
        {id: 1, title: '1. Setting up a new Rails app with React', description: 'This is the video description', active: false },
        {id: 2, title: '2. Adding React to an exisiting Rails App', description: 'This is the video description', active: false },
        {id: 3, title: '3. Building an HelloWorld App', description: 'This is the video description', active: false },
        {id: 4, title: '4. Adding React Router Dom to your App', description: 'This is the video description', active: false }
      ]
    }
  }
  render () {
    return (
      <div>
        <Jumbotron />
      </div>
    );
  }
}

export default Home;
