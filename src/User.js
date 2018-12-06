import React from "react";
import PropTypes from "prop-types";

const User = props => {
  return (
    <p>
      <li>
        Username: {props.user.userName} | Number of Games Played:{" "}
        {props.showGames ? props.user.games : "*"}
      </li>
    </p>
  );
};

User.propTypes = {
  showGames: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
};

export default User;
