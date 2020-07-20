import React from "react";
import "./header.scss";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header header__login">
        <div className="header__side ">
          <a href="facebook" className="header__side--left">
            <div className="header--logo"></div>
          </a>
          <div className="header__side--right">
            <table className="login">
              <tbody>
                <tr>
                  <td>
                    <label className="login__label label--email">
                      Email or phone
                    </label>
                  </td>
                  <td>
                    <label className="login__label label--password">
                      Password
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="login__input input--email"
                      type="text"
                      placeholder="email"
                    ></input>
                  </td>
                  <td>
                    <input
                      className="login__input input--password"
                      type="text"
                      placeholder="password"
                    ></input>
                  </td>
                  <td>
                    <button className="login__button">Log In</button>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td className="login__link">
                    <a href="forgotten" className="login__link--forgotten-account">Forgotten account?</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </header>
    );
  }
}
