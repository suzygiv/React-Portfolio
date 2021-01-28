import React, { Component } from "react";
import Card from "../components/Card/index";
import Wrapper from "../components/Wrapper/index";
import project from "../projects.json";

class App extends Component {
  // Setting this.state.project to the projects json array
  state = {
    project
  }

  // Map over this.state.project and render a project component for each project object
  render() {
    return (
        
      <Wrapper>
          <br/>
        {this.state.project.map(project => (
          <Card
            id={project.id}
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            Deployed={project.Deployed}
            Github={project.Github}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;