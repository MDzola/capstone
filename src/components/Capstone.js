import React, { Component } from "react";
import NavBar from "./navbar/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./capstone.css";


class Capstone extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

export default Capstone;
