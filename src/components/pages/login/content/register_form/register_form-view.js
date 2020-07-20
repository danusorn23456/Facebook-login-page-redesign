import React from "react";
import "./register_form.scss";

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        31,
      ],
      month: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    };
  }

  render() {
    return (
      <div className="register">
        <h1 className="register__heading">Create a new account</h1>
        <p className="register__paragraph">It"s quick and easy.</p>
        <form className="register__form">
          <section className="field register__section">
            <div className="field__layout">
              <input
                className="field__input field__input--name"
                placeholder="First name"
                id="name"
              />
              <input
                className="field__input field__input--surname"
                placeholder="Surname"
                id="surname"
              />
              <input
                className="field__input field__input--contact"
                placeholder="Mobile number or Email address"
                id="contact"
              />
              <input
                className="field__input field__input--password"
                placeholder="New password"
                id="password"
              />
            </div>
          </section>

          <section className="date register__section">
            <label className="date__label date__label--birth-day">Birthday</label>
            <div className="date__layout">
              <select className="date__selection">
                {/* wait state */}
              </select>
              <select className="date__selection">
                {/* wait state */}
              </select>
              <select className="date__selection">
                {/* wait state */}
              </select>
              <div className="date__question"></div>
            </div>
          </section>

          <section className="checkbox register__section">
            <label className="checkbox__label checkbox__label--gender">Gender</label>
            <div className="checkbox__layout">
              <div className="checkbox__unit">
                <input
                  className="checkbox__input checkbox__input--female"
                  type="checkbox"
                  for="female"
                />
                <label id="female" className="checkbox__label checkbox__label--female">Female</label>
              </div>
              <div className="checkbox__unit">
                <input
                  className="checkbox__input checkbox__input--male"
                  type="checkbox"
                  for="male"
                />
                <label id="male" className="checkbox__label checkbox__label--male">Male</label>
              </div>
              <div className="register__unit">
                <input
                  className="checkbox__input checkbox__input--custome"
                  type="checkbox"
                  id="input"
                />
                <label for="custome" className="checkbox__label checkbox__label--male">Custome</label>
              </div>
              <div className="checkbox__question"></div>
            </div>
          </section>

          <section className="policy register__section">
            <p className="policy__paragraph policy__paragraph--agree">
              By clicking Sign Up, you agree to our{" "}
              <a href="policy" className="policy__link policy__link--data-policy">
                Terms, Data Policy
              </a>{" "}
              and
              <br />
              <a href="cookie-policy" className="policy__link policy__link--cokie-policy">
                Cookie Policy.
              </a>{" "}
              You may receive SMS notifications from us and
              <br />
              can opt out at any time.
            </p>
          </section>

          <section className="signup register__section">
            <button className="signup__button" type="submit">
              Sign Up
            </button>
          </section>

          <label className="register__label label_create-page">
            <a
              href="create-page"
              className="register__link link_create-pages"
            >
              Create a Page
            </a>{" "}
            for a celebrity, band or business.
          </label>
        </form>
      </div>
    );
  }
}
