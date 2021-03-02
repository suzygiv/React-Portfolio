
import React, { Component } from "react";
import Card from "../components/Card/index";
import Wrapper from "../components/Wrapper/index";
import projects from "../data/projects";

class App extends Component {
  // Setting this.state.project to the projects json array
  state = {
    projects
  }

  // Map over this.state.project and render a project component for each project object
  render() {
    return (
        
      <Wrapper>
          <br/>
        {this.state.projects.map(projects => (
          <Card
            title={projects.title}
            image={projects.image}
            description={projects.description}
            Deployed={projects.Deployed}
            Github={projects.Github}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
