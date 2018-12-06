import React, { Component } from "react";
import PropTypes from "prop-types";

const initialState = {
  firstname: "",
  lastname: "",
  username: "",
  isFormValid: true
};

class AddUser extends Component {
  state = initialState;

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value
    }));
  };

  handleClick = event => {
    event.preventDefault();
    if (this.validateUserName()) {
      this.props.addUser(this.state.username);
      this.resetForm();
    }
  };

  resetForm = () => {
    this.setState(initialState);
  };

  validateUserName = () => {
    let users = this.props.usersList;
    if (
      users.length > 0 &&
      users.filter(user => user.userName === this.state.username).length > 0
    ) {
      this.setState({
        isFormValid: false
      });
      return false;
    }
    return true;
  };

  isEnabled = () => {
    return (
      this.state.firstname.length &&
      this.state.lastname.length &&
      this.state.username.length
    );
  };

  render() {
    return (
      <React.Fragment>
        <form>
          FirstName:{" "}
          <input
            type="text"
            name="firstname"
            value={this.state.firstname}
            onChange={this.handleChange}
          />{" "}
          <br />
          LastName:{" "}
          <input
            type="text"
            name="lastname"
            value={this.state.lastname}
            onChange={this.handleChange}
          />{" "}
          <br />
          UserName:{" "}
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />{" "}
          <br />
          <button onClick={this.handleClick} disabled={!this.isEnabled()}>
            {" "}
            Add User{" "}
          </button>
        </form>

        {!this.state.isFormValid && (
          <h2> Please provide a unique user name </h2>
        )}
      </React.Fragment>
    );
  }
}


AddUser.propTypes = {
  usersList: PropTypes.array.isRequired,
  addUser: PropTypes.func.isRequired
};

export default AddUser;
