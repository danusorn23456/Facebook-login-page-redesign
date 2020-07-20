import React from "react";
import './content.scss'
import RecentAccount from "./recent_account/recent_account-view";
import RegisterForm from "./register_form/register_form-view";
export default class Content extends React.Component {
  render() {
    return (
      <main className="main-content">
        <div className="main-content__layout">
        <div className="main-content__side main-content__side--left">
          <RecentAccount></RecentAccount>
        </div>
        <div className="main-content__side main-content__side--right">
          <RegisterForm></RegisterForm>
        </div>
        </div>
      </main>
    );
  }
}
