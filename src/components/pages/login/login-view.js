import React from "react";
import Header from "./header/header-view";
import Content from "./content/content-view";
import Footer from "./footer/footer-view";

export default class LoginPage extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Content/>
        <Footer/>
      </>
    );
  }
}
