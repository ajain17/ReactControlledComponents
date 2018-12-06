import React, { Component } from "react";
import PropTypes from "prop-types";
import User from "./User";

class ListUsers extends Component {
  state = {
    showGames: true,
    hideGamesText: "Hide Games",
    showGamesText: "Show Games"
  };

  handleClick = event => {
    this.setState(prevState => ({
      showGames: !prevState.showGames
    }));
  };

  render() {
    let listOfUsers = this.props.usersList;
    return (
      <React.Fragment>
        {listOfUsers.length > 0 && (
          <div>
            <button onClick={this.handleClick}>
              {this.state.showGames
                ? this.state.hideGamesText
                : this.state.showGamesText}
            </button>
            <div>
              {listOfUsers.map(user => (
                <User
                  key={user.userName}
                  showGames={this.state.showGames}
                  user={user}
                />
              ))}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

User.propTypes = {
  usersList: PropTypes.array.isRequired
};

export default ListUsers;
