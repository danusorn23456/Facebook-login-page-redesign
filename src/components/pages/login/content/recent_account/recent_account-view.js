import React from "react";
import "./recent_account.scss";

export default class RecentAccount extends React.Component {
  render() {
    return (
      <div class="login-board">
        <label className="login-board__label--recent-login">
          Recent logins
        </label>
        <p className="login-board__paragraph--add-picture">
          Click your picture or add an account.
        </p>
        <div className="login-board__card">
          <img
            className="card--profile"
            src={require("../../../../figure/profile.jpg")}
            alt="profile-img"
          />
          <h1 className="card--name">Danuson</h1>
        </div>
      </div>
    );
  }
}
