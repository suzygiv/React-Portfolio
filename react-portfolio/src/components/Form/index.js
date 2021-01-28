import React, { Component } from "react";
import Container from "../Container/index";
import Button from 'react-bootstrap/Button';

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <Container>
          <h1>
            CONTACT
          </h1>
          <form className="form">
            <input
              value={this.state.firstName}
              name="firstName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="First Name"
            />
            &nbsp;&nbsp;&nbsp; 
            <input
              value={this.state.lastName}
              name="lastName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Last Name"
            />
            <div class="form-group">
            <div className="form-group">
                <label for="inputEmailAddress">Email Address</label>
                <input className="form-control" type="text" id="inputEmailAddress" placeholder="" />
            </div>
              <label for="exampleFormControlTextarea1">Message:</label>
              <input class="form-control" id="exampleFormControlTextarea1" rows="3"
                placeholder="">
              </input>
            </div>
            <Button variant="dark" onClick={this.handleFormSubmit}>Submit</Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default Form;