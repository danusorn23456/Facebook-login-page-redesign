import React from "react";
import "./footer.scss";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: [
        "ภาษาไทย",
        "日本語",
        "中文(简体)",
        "Tiếng Việt",
        "Français (France)",
        "Deutsch",
        "Русский",
        "Español",
        "Português (Brasil)",
        "Italiano",
      ],
      category: [
        "Sign Up",
        "Log In",
        "Messenger",
        "Facebook Lite",
        "Watch",
        "People",
        "Pages",
        "categories",
        "Places",
        "Games",
        "Locations",
        "Marketplace",
        "Groups",
        "Instagram",
        "Local",
        "Fundraisers",
        "Services",
        "About",
        "Create ad",
        "Create Page",
        "Developers",
        "Careers",
        "Privacy",
        "Cookies",
        "AdChoices",
        "Terms",
        "Help",
      ],
    };
  }

  render() {
    return (
      <footer className="main-footer">
        <div className="main-footer__content">
          <div className="language main-footer__language">
            <label className="language__label language__label--current-language">English(UK)</label>
            {this.state.language.map((item, index) => (
              <a className="language__link" href={item} key={item}>
                {item}
              </a>
            ))}
            <button className="language__button language__button--more-language">+</button>
          </div>
          <hr></hr>
          <div className="category main-footer__category">
            {this.state.category.map((item, index) => (
              <a className={`category__link category__link--${item}`} href={item} key={item}>
                {item}
              </a>
            ))}
          </div>
        <label className="main-footer__label main-footer__label--facebook-copyright">Facebook © 2020</label>
        </div>
      </footer>
    );
  }
}
