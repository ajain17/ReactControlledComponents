import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddUser from "./AddUser";
import ListUsers from "./ListUsers";
/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/
const games = 0;
class App extends Component {
  state = {
    users: []
  };

  addUserInApp = userName => {
    this.setState({
      users: this.state.users.concat({ userName, games })
    });

    console.log(this.state);
  };

  render() {
    console.log(this.state.users);
    console.log("render");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddUser addUser={this.addUserInApp} usersList={this.state.users} />
        <div>
          <ListUsers usersList={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
