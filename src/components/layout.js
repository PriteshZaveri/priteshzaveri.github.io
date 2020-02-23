import React from "react";
import Header from "./header";
import Footer from "./footer";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
