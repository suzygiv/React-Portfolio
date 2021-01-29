import React, { Component } from "react";
import Container from "../Container/index";
import Button from 'react-bootstrap/Button';


class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
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
      email: "",
      message:""
    });
  };

  render() {
    return (
      <div>
        <Container>
        <form
          className="ui form"
          id={this.props.id}
          name={this.props.name}
          method={this.props.method}
          action={this.props.action}
          >
          <textarea
            id="firstName"
            name="name"
            onChange={this.handleInputChange.bind(this)}
            placeholder="First Name"
            required
            value={this.state.name}
            style={{ width: "100%" }}
            rows={1}
          />
          <textarea
            id="lastName"
            name="name"
            onChange={this.handleInputChange.bind(this)}
            placeholder="Last Name"
            required
            value={this.state.name}
            style={{ width: "100%" }}
            rows={1}
          />
          <br />
          <div className="form-group">
              <label for="inputEmailAddress">Email Address</label>
              <input className="form-control" type="text" id="inputEmailAddress" placeholder="" />
           </div>
          <textarea
            id="message"
            name="message"
            onChange={this.handleInputChange.bind(this)}
            placeholder="what would you like to chat about?"
            required
            value={this.state.message}
            style={{ width: "100%", height: "250px" }}
          />
          <br />
          <Button variant="dark" onClick={this.handleFormSubmit}>Submit</Button>
        </form>
        </Container>
      </div>
    );
          }
        }


export default Form;